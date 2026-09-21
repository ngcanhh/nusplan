import { useState } from 'react'
import './App.css'

type Page =
  | 'home'
  | 'progress'
  | 'gpa'
  | 'timetable'
  | 'exams'
  | 'minor'

const navItems: { id: Page; label: string; icon: string }[] = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'progress', label: 'Academic Progress', icon: '◒' },
  { id: 'gpa', label: 'GPA Calculator', icon: '✦' },
  { id: 'timetable', label: 'Timetable', icon: '▦' },
  { id: 'exams', label: 'Exam Schedule', icon: '▤' },
  { id: 'minor', label: 'Minor Planner', icon: '◇' },
]

const pageTitles: Record<Page, string> = {
  home: 'Home',
  progress: 'Academic Progress',
  gpa: 'GPA Calculator',
  timetable: 'Timetable',
  exams: 'Exam Schedule',
  minor: 'Minor Planner',
}

function App() {
  const [activePage, setActivePage] = useState<Page>('home')

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">N</div>
          <div>
            <div className="brand-name">nusplan</div>
            <div className="brand-caption">Academic planner</div>
          </div>
        </div>

        <div className="sidebar-section-label">Workspace</div>

        <nav className="navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activePage === item.id ? 'active' : ''}`}
              onClick={() => setActivePage(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="academic-year">
            <span className="status-dot" />
            <div>
              <strong>AY 2026/27</strong>
              <span>School of Computing</span>
            </div>
          </div>

          <button className="profile-button">
            <span className="profile-avatar">N</span>
            <span>My profile</span>
            <span className="profile-arrow">›</span>
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb">
            <span>nusplan</span>
            <span className="breadcrumb-divider">/</span>
            <strong>{pageTitles[activePage]}</strong>
          </div>

          <div className="topbar-actions">
            <button className="topbar-button">?</button>
            <button className="topbar-button">☼</button>
            <button className="notification-button">
              ♧
              <span className="notification-dot" />
            </button>
          </div>
        </header>

        <section className="page-content">
          {activePage === 'home' ? (
            <Dashboard onNavigate={setActivePage} />
          ) : (
            <PlaceholderPage title={pageTitles[activePage]} />
          )}
        </section>
      </main>
    </div>
  )
}

function Dashboard({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <>
      <section className="welcome-row">
        <div>
          <p className="eyebrow">YOUR ACADEMIC COMPANION</p>
          <h1>Good afternoon, Ngan Anh.</h1>
          <p className="welcome-description">
            Keep your degree plan clear, realistic and on track.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => onNavigate('progress')}
        >
          View academic progress
          <span>→</span>
        </button>
      </section>

      <section className="stats-grid">
        <article className="stat-card accent-blue">
          <div className="stat-label">Current CAP</div>
          <div className="stat-value">4.20</div>
          <div className="stat-note positive">↑ 0.18 this semester</div>
        </article>

        <article className="stat-card accent-gold">
          <div className="stat-label">Units completed</div>
          <div className="stat-value">48 <small>/ 160</small></div>
          <div className="stat-note">30% of graduation requirements</div>
        </article>

        <article className="stat-card accent-teal">
          <div className="stat-label">Current semester</div>
          <div className="stat-value">4</div>
          <div className="stat-note">Semester 2, AY 2026/27</div>
        </article>

        <article className="stat-card accent-purple">
          <div className="stat-label">Next exam</div>
          <div className="stat-value">12 <small>days</small></div>
          <div className="stat-note">CS2040S · 14 Apr 2027</div>
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="panel progress-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">DEGREE JOURNEY</p>
              <h2>Academic progress</h2>
            </div>
            <button
              className="text-button"
              onClick={() => onNavigate('progress')}
            >
              Details →
            </button>
          </div>

          <div className="progress-overview">
            <div className="progress-ring">
              <div className="progress-ring-inner">
                <strong>30%</strong>
                <span>completed</span>
              </div>
            </div>

            <div className="progress-summary">
              <div className="progress-line">
                <span>University requirements</span>
                <strong>12 / 40 units</strong>
              </div>
              <div className="progress-bar">
                <span style={{ width: '30%' }} />
              </div>

              <div className="progress-line">
                <span>Major requirements</span>
                <strong>28 / 80 units</strong>
              </div>
              <div className="progress-bar gold">
                <span style={{ width: '35%' }} />
              </div>

              <div className="progress-line">
                <span>Unrestricted electives</span>
                <strong>8 / 40 units</strong>
              </div>
              <div className="progress-bar teal">
                <span style={{ width: '20%' }} />
              </div>
            </div>
          </div>
        </article>

        <article className="panel semester-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">YOUR PLAN</p>
              <h2>Semester overview</h2>
            </div>
            <button
              className="text-button"
              onClick={() => onNavigate('timetable')}
            >
              Open plan →
            </button>
          </div>

          <div className="semester-list">
            <SemesterRow label="Year 1 · Semester 1" units="20 units" status="completed" />
            <SemesterRow label="Year 1 · Semester 2" units="20 units" status="current" />
            <SemesterRow label="Year 2 · Semester 1" units="20 units" status="upcoming" />
            <SemesterRow label="Year 2 · Semester 2" units="20 units" status="upcoming" />
          </div>
        </article>
      </section>

      <section className="lower-grid">
        <article className="panel modules-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">SEMESTER 2 · AY 2026/27</p>
              <h2>Registered modules</h2>
            </div>
            <span className="module-count">5 modules</span>
          </div>

          <div className="module-list">
            <ModuleRow code="CS2040S" name="Data Structures and Algorithms" units="4" />
            <ModuleRow code="IS2103" name="Enterprise Systems Server-side Development" units="4" />
            <ModuleRow code="ST2334" name="Probability and Statistics" units="4" />
            <ModuleRow code="GEA1000" name="Quantitative Reasoning with Data" units="4" />
          </div>
        </article>

        <article className="panel focus-panel">
          <p className="eyebrow">UP NEXT</p>
          <h2>Stay ahead of your semester</h2>
          <p>
            Add your modules and class sections to detect timetable clashes
            before course registration.
          </p>
          <button
            className="secondary-button"
            onClick={() => onNavigate('timetable')}
          >
            Build my timetable →
          </button>
        </article>
      </section>
    </>
  )
}

function SemesterRow({
  label,
  units,
  status,
}: {
  label: string
  units: string
  status: 'completed' | 'current' | 'upcoming'
}) {
  return (
    <div className="semester-row">
      <span className={`semester-status ${status}`}>
        {status === 'completed' ? '✓' : status === 'current' ? '●' : '○'}
      </span>
      <span className="semester-label">{label}</span>
      <span className="semester-units">{units}</span>
    </div>
  )
}

function ModuleRow({
  code,
  name,
  units,
}: {
  code: string
  name: string
  units: string
}) {
  return (
    <div className="module-row">
      <div className="module-code">{code}</div>
      <div className="module-name">{name}</div>
      <div className="module-units">{units} U</div>
    </div>
  )
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="placeholder-page">
      <p className="eyebrow">NUSPLAN WORKSPACE</p>
      <h1>{title}</h1>
      <p>This section is ready to be built in the next development step.</p>
    </div>
  )
}

export default App