import { useState, useCallback, useRef, useEffect } from 'react'
import { bins, trashItems, diagnoses, loadingMessages } from './data'
import BinSVG from './BinSVG'
import './App.css'

function App() {
  const [queue, setQueue] = useState([...trashItems])
  const [results, setResults] = useState({})
  const [feedback, setFeedback] = useState(null)
  const [activeBin, setActiveBin] = useState(null)
  const [exiting, setExiting] = useState(false)
  const [hoveredBin, setHoveredBin] = useState(null)
  const [phase, setPhase] = useState('start')
  const [recycleProgress, setRecycleProgress] = useState(0)
  const [loadingMsg, setLoadingMsg] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 })
  const dragRef = useRef(null)
  const feedbackTimer = useRef(null)
  const current = queue[0]

  const [throwDir, setThrowDir] = useState(0)

  const processSort = useCallback((binId) => {
    if (!current || exiting || phase !== 'play') return
    const binIdx = bins.findIndex(b => b.id === binId)
    const center = (bins.length - 1) / 2
    setThrowDir((binIdx - center) * 80)
    setActiveBin(binId)
    setExiting(true)
    setResults(r => ({ ...r, [current.id]: binId }))
    const binData = bins.find(b => b.id === binId)
    clearTimeout(feedbackTimer.current)
    setFeedback({ binId, zh: binData.zh })
    setTimeout(() => {
      setQueue(q => {
        const next = q.slice(1)
        if (next.length === 0) setTimeout(() => setPhase('recycling'), 300)
        return next
      })
      setExiting(false)
      setActiveBin(null)
      setDragging(false)
    }, 600)
    feedbackTimer.current = setTimeout(() => setFeedback(null), 1200)
  }, [current, exiting, phase])

  // Drag handlers
  const handleDragStart = (e) => {
    if (!current || exiting) return
    e.dataTransfer.setData('text/plain', current.id)
    e.dataTransfer.effectAllowed = 'move'
    setDragging(true)
  }

  const handleDragOver = (e, binId) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    setHoveredBin(binId)
  }

  const handleDrop = (e, binId) => {
    e.preventDefault()
    setHoveredBin(null)
    processSort(binId)
  }

  const handleDragLeave = () => {
    setHoveredBin(null)
  }

  const handleDragEnd = () => {
    setDragging(false)
    setHoveredBin(null)
  }

  // Click fallback (mobile + simple click)
  const handleBinClick = useCallback((binId) => {
    if (dragging) return
    processSort(binId)
  }, [dragging, processSort])

  // Recycling animation
  useEffect(() => {
    if (phase !== 'recycling') return
    setRecycleProgress(0)
    setLoadingMsg(0)
    const duration = 4500
    const start = Date.now()
    const msgInterval = setInterval(() => {
      setLoadingMsg(m => (m + 1) % loadingMessages.length)
    }, 900)
    const tick = () => {
      const elapsed = Date.now() - start
      const p = Math.min(elapsed / duration, 1)
      setRecycleProgress(p)
      if (p < 1) requestAnimationFrame(tick)
      else { clearInterval(msgInterval); setTimeout(() => setPhase('result'), 500) }
    }
    requestAnimationFrame(tick)
    return () => clearInterval(msgInterval)
  }, [phase])

  const hasBanned = Object.values(results).some(binId => binId === 'banned')
  const rawScore = Object.values(results).reduce((sum, binId) => {
    const b = bins.find(x => x.id === binId)
    return sum + (b?.weight ?? 0)
  }, 0)
  const slopScore = hasBanned ? 70 : rawScore

  const diagnosis = diagnoses.find(d => slopScore >= d.min && slopScore < d.max)
    || diagnoses[diagnoses.length - 1]

  const restart = () => {
    setQueue([...trashItems])
    setResults({})
    setFeedback(null)
    setActiveBin(null)
    setExiting(false)
    setHoveredBin(null)
    setPhase('start')
    setRecycleProgress(0)
    setDragging(false)
  }

  const renderIcon = (item) => (
    <img
      src={`/icons/${item.icon}.png`}
      alt={item.name}
      className={`app-icon-img ${item.fill ? 'app-icon-img--fill' : ''}`}
    />
  )

  return (
    <div className="app">
      {/* ── Start ── */}
      {phase === 'start' && (
        <div className={`start-screen ${exiting ? 'start-screen--leaving' : ''}`}>
          <div className="start-scatter">
            {trashItems.map((item, i) => {
              const angle = (i / trashItems.length) * Math.PI * 2 - Math.PI / 2
              const radius = 170 + (i % 2) * 40
              return (
                <div
                  key={item.id}
                  className="scatter-icon"
                  style={{
                    '--icon-color': item.bg,
                    '--sx': `${Math.cos(angle) * radius}px`,
                    '--sy': `${Math.sin(angle) * radius}px`,
                    '--sr': `${(i % 2 === 0 ? -1 : 1) * (5 + i * 2)}deg`,
                    '--delay': `${i * 0.04}s`,
                  }}
                >
                  <img src={`/icons/${item.icon}.png`} alt={item.name} className={item.fill ? 'app-icon-img--fill' : ''} />
                </div>
              )
            })}
          </div>
          <div className="start-content">
            <h1 className="start-title">AI Slop Test</h1>
            <p className="start-zh">测测你的AI泔水浓度</p>
            <p className="start-desc">每天喝了多少AI泔水，心里没点数？</p>
            <button className="start-btn" onClick={() => {
              setExiting(true)
              setTimeout(() => { setExiting(false); setPhase('play') }, 600)
            }}>
              开始检测
            </button>
            <p className="start-note">{trashItems.length} 款AI · 6 个泔水桶 · 1 份诊断报告</p>
          </div>
        </div>
      )}

      {/* ── Play ── */}
      {phase === 'play' && (
        <>
          <header className="header">
            <p className="subtitle">
              {current
                ? `${trashItems.length - queue.length} / ${trashItems.length}`
                : '完成'}
            </p>
          </header>

          {/* App icons */}
          <div className="apps-row">
            {current && !exiting && (
              <p className="app-desc">{current.desc}</p>
            )}
            <div className="apps-icons">
              {queue.slice(0, 5).map((item, i) => (
                <div
                  key={item.id}
                  className={[
                    'app-item',
                    i === 0 ? (exiting ? 'app-item--exit' : 'app-item--active') : '',
                  ].join(' ')}
                  style={{ '--icon-color': item.bg, '--i': i, '--throw-x': `${throwDir}px` }}
                  draggable={i === 0 && !exiting}
                  onDragStart={i === 0 ? handleDragStart : undefined}
                  onDragEnd={handleDragEnd}
                >
                  <div className="app-item__face">{renderIcon(item)}</div>
                  <span className="app-item__name">{item.name}</span>
                </div>
              ))}
            </div>
            {queue.length > 5 && (
              <span className="apps-remaining">+{queue.length - 5}</span>
            )}
          </div>

          {/* Guide */}
          <div className="guide">
            <svg viewBox="0 0 60 80" className="guide__arrow">
              <path d="M30 5 L30 55" stroke="var(--text)" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" opacity="0.3" />
              <path d="M22 48 L30 60 L38 48" stroke="var(--text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.3" />
            </svg>
            <span className="guide__text">拖到泔水桶里</span>
          </div>

          {/* Feedback */}
          {feedback && <div className="toast">→ {feedback.zh}</div>}

          {/* Bins */}
          <div className="bins-row">
            {bins.map(bin => (
              <button
                key={bin.id}
                className={[
                  'bin',
                  activeBin === bin.id ? 'bin--active' : '',
                  feedback?.binId === bin.id ? 'bin--pop' : '',
                  hoveredBin === bin.id && dragging ? 'bin--drag-over' : '',
                ].join(' ')}
                onClick={() => handleBinClick(bin.id)}
                onDragOver={(e) => handleDragOver(e, bin.id)}
                onDrop={(e) => handleDrop(e, bin.id)}
                onDragLeave={handleDragLeave}
                onMouseEnter={() => !dragging && setHoveredBin(bin.id)}
                onMouseLeave={() => !dragging && setHoveredBin(null)}
                disabled={!current || exiting}
              >
                <div className="bin__container">
                  <BinSVG
                    color={bin.color}
                    accent={bin.accent}
                    icon={bin.icon}
                    active={(hoveredBin === bin.id) && current && !exiting}
                  />
                </div>
                <div className="bin__labels">
                  <span className="bin__name">{bin.label}</span>
                  <span className="bin__zh">{bin.zh}</span>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {/* ── Loading ── */}
      {phase === 'recycling' && (
        <div className="cook-screen">
          <div className="cook-scene">
            <svg viewBox="0 0 320 180" className="truck">
              <rect x="15" y="35" width="190" height="95" rx="6" fill="#4a4a4a" />
              <rect x="17" y="37" width="186" height="16" rx="3" fill="#5a5a5a" />
              <defs>
                <clipPath id="cargo-clip">
                  <rect x="20" y="55" width="180" height="70" rx="4" />
                </clipPath>
              </defs>
              <g clipPath="url(#cargo-clip)">
                {trashItems.slice(0, 8).map((app, i) => {
                  const col = i % 4
                  const row = Math.floor(i / 4)
                  const x = 35 + col * 44
                  const y = 68 + row * 36
                  return (
                    <g key={app.id} className={`trash-float trash-float--${(i % 6) + 1}`}>
                      <rect x={x - 14} y={y - 14} width="28" height="28" rx="6" fill={app.bg} />
                      <image href={`/icons/${app.icon}.png`} x={x - 14} y={y - 14} width="28" height="28" style={{ clipPath: 'inset(0 round 6px)' }} />
                    </g>
                  )
                })}
              </g>
              <rect x="205" y="50" width="75" height="80" rx="6" fill="#5a5a5a" />
              <rect x="215" y="58" width="55" height="32" rx="4" fill="#8ec5fc" />
              <circle cx="60" cy="140" r="16" fill="#333" />
              <circle cx="60" cy="140" r="7" fill="#666" />
              <circle cx="160" cy="140" r="16" fill="#333" />
              <circle cx="160" cy="140" r="7" fill="#666" />
              <circle cx="245" cy="140" r="14" fill="#333" />
              <circle cx="245" cy="140" r="6" fill="#666" />
              <rect x="282" y="108" width="10" height="5" rx="2" fill="#666" />
              <g className="exhaust">
                <circle cx="298" cy="110" r="4" fill="#bbb" opacity="0.4" className="exhaust-1" />
                <circle cx="306" cy="107" r="3" fill="#bbb" opacity="0.3" className="exhaust-2" />
              </g>
              <line x1="0" y1="156" x2="320" y2="156" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            </svg>
          </div>
          <p className="cook-text">{loadingMessages[loadingMsg]}</p>
          <div className="cook-bar">
            <div className="cook-bar__fill" style={{ width: `${recycleProgress * 100}%` }} />
          </div>
        </div>
      )}

      {/* ── Result ── */}
      {phase === 'result' && diagnosis && (
        <div className="result-screen">
          <p className="result-subtitle">你的泔水浓度为</p>
          <div className="result-meter">
            <div className="meter-hero">
              <span className="meter-value">{slopScore}</span>
              <span className="meter-level">{diagnosis.level}</span>
            </div>
            <div className="meter-bar">
              <div className="meter-bar__fill" style={{ width: `${Math.min(slopScore / 90 * 100, 100)}%` }} />
            </div>
          </div>
          <div className="result-hero">
            <h2 className="result-title">{diagnosis.zh}</h2>
          </div>

          <div className="result-desc">
            {diagnosis.zhDesc.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {/* Breakdown — buckets with icons on top */}
          <div className="result-breakdown">
            <div className="breakdown-buckets">
              {bins.map(bin => {
                const apps = trashItems.filter(t => results[t.id] === bin.id)
                if (apps.length === 0) return null
                return (
                  <div key={bin.id} className="breakdown-bucket-col">
                    {/* App icons stacked on top */}
                    <div className="breakdown-bucket__apps">
                      {apps.map(app => (
                        <div key={app.id} className="breakdown-app-icon" style={{ '--icon-color': app.bg }} title={app.name}>
                          {renderIcon(app)}
                        </div>
                      ))}
                    </div>
                    {/* Mini bucket */}
                    <div className="breakdown-mini-bucket" style={{ '--bucket-color': bin.color }}>
                      <BinSVG color={bin.color} accent={bin.accent} icon={bin.icon} active={false} />
                    </div>
                    <span className="breakdown-bucket__label">{bin.zh}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <button className="restart-btn" onClick={restart}>再测一次</button>
          <p className="result-footer">我们不生产泔水，我们只是泔水的搬运工。</p>
        </div>
      )}
    </div>
  )
}

export default App
