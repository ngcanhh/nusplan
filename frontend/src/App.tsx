import { useState } from 'react'
import './App.css'
import {
  modules,
  programmes,
  minors,
} from './data/nusCatalog'

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
) : activePage === 'progress' ? (
  <AcademicProgress />
) : activePage === 'gpa' ? (
  <GpaCalculator />
) : activePage === 'timetable' ? (
  <TimetablePage />
) : activePage === 'exams' ? (
  <ExamSchedule />
) : activePage === 'minor' ? (
  <MinorPlanner />
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
type GradeRow = {
  code: string
  name: string
  units: number
  grade: string
}

const gradePoints: Record<string, number> = {
  A: 5,
  'A-': 4.5,
  'B+': 4,
  B: 3.5,
  'B-': 3,
  'C+': 3,
  C: 2.5,
  'D+': 2,
  D: 1.5,
  F: 0,
}

const gradeDefaults: Record<string, string> = {
  CS2040S: 'A-',
  IS2103: 'B+',
  ST2334: 'A',
  GEA1000: 'B',
}

const initialGradeRows: GradeRow[] = [
  'CS2040S',
  'IS2103',
  'ST2334',
  'GEA1000',
]
  .map((code) => {
    const module = modules.find((item) => item.code === code)

    if (!module) {
      return null
    }

    return {
      code: module.code,
      name: module.title,
      units: module.units,
      grade: gradeDefaults[module.code] ?? 'B',
    }
  })
  .filter((row): row is GradeRow => row !== null)
type Exam = {
  code: string
  title: string
  date: string
  time: string
  venue: string
  duration: string
}

const examList: Exam[] = [
  {
    code: 'CS2040S',
    title: 'Data Structures and Algorithms',
    date: '14 Apr 2027',
    time: '09:00 – 11:00',
    venue: 'MPSH 1',
    duration: '2 hours',
  },
  {
    code: 'IS2103',
    title: 'Enterprise Systems Development',
    date: '20 Apr 2027',
    time: '13:00 – 15:00',
    venue: 'UTown Auditorium',
    duration: '2 hours',
  },
  {
    code: 'ST2334',
    title: 'Probability and Statistics',
    date: '26 Apr 2027',
    time: '09:00 – 11:00',
    venue: 'LT19',
    duration: '2 hours',
  },
]
type MinorRequirement = {
  code: string
  name: string
  units: number
  completed: boolean
}

const defaultMinor = minors[0]

const initialMinorRequirements: MinorRequirement[] =
  defaultMinor.requiredModules
    .map((code) => modules.find((module) => module.code === code))
    .filter(Boolean)
    .map((module) => ({
      code: module!.code,
      name: module!.title,
      units: module!.units,
      completed: ['CS1010S', 'CS1231S'].includes(module!.code),
    }))

function MinorPlanner() {
 const [selectedMinor, setSelectedMinor] = useState(
  defaultMinor.name,
)

  const [requirements, setRequirements] = useState(
    initialMinorRequirements,
  )

  const completedUnits = requirements
    .filter((requirement) => requirement.completed)
    .reduce((sum, requirement) => sum + requirement.units, 0)

  const totalUnits = requirements.reduce(
    (sum, requirement) => sum + requirement.units,
    0,
  )

  function toggleRequirement(code: string) {
    setRequirements((currentRequirements) =>
      currentRequirements.map((requirement) =>
        requirement.code === code
          ? { ...requirement, completed: !requirement.completed }
          : requirement,
      ),
    )
  }

  return (
    <>
      <section className="welcome-row">
        <div>
          <p className="eyebrow">ADDITIONAL AREA OF STUDY</p>
          <h1>Minor planner</h1>
          <p className="welcome-description">
            Track your minor requirements and see which modules remain.
          </p>
        </div>

        <button className="primary-button">
          Explore minors
          <span>→</span>
        </button>
      </section>

      <section className="panel minor-selector-panel">
        <div>
          <p className="eyebrow">SELECT YOUR MINOR</p>
          <h2>Academic pathway</h2>
        </div>

        <select
          value={selectedMinor}
          onChange={(event) => setSelectedMinor(event.target.value)}
        >
         {minors.map((minor) => (
  <option key={minor.id} value={minor.name}>
    {minor.name}
  </option>
))}
        </select>
      </section>

      <section className="stats-grid">
        <article className="stat-card accent-teal">
          <div className="stat-label">Minor progress</div>
          <div className="stat-value">
            {Math.round((completedUnits / totalUnits) * 100)}%
          </div>
          <div className="stat-note">
            {completedUnits} of {totalUnits} units completed
          </div>
        </article>

        <article className="stat-card accent-blue">
          <div className="stat-label">Completed units</div>
          <div className="stat-value">{completedUnits}</div>
          <div className="stat-note">Counted towards your minor</div>
        </article>

        <article className="stat-card accent-gold">
          <div className="stat-label">Units remaining</div>
          <div className="stat-value">{totalUnits - completedUnits}</div>
          <div className="stat-note">Required to complete this minor</div>
        </article>
      </section>

      <section className="panel minor-requirements-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">REQUIREMENT CHECKLIST</p>
            <h2>{selectedMinor}</h2>
          </div>

          <span className="module-count">
            {requirements.length} modules
          </span>
        </div>

        <div className="minor-requirements-list">
          {requirements.map((requirement) => (
            <label className="minor-requirement" key={requirement.code}>
              <input
                type="checkbox"
                checked={requirement.completed}
                onChange={() => toggleRequirement(requirement.code)}
              />

              <span className="minor-checkbox">
                {requirement.completed ? '✓' : ''}
              </span>

              <span className="minor-module-code">
                {requirement.code}
              </span>

              <span className="minor-module-name">
                {requirement.name}
              </span>

              <span className="minor-module-units">
                {requirement.units} units
              </span>

              <span
                className={
                  requirement.completed
                    ? 'minor-status completed'
                    : 'minor-status remaining'
                }
              >
                {requirement.completed ? 'Completed' : 'Remaining'}
              </span>
            </label>
          ))}
        </div>
      </section>
    </>
  )
}
function ExamSchedule() {
  return (
    <>
      <section className="welcome-row">
        <div>
          <p className="eyebrow">ASSESSMENT CALENDAR</p>
          <h1>Exam schedule</h1>
          <p className="welcome-description">
            Keep track of your upcoming examinations and venues.
          </p>
        </div>

        <button className="primary-button">
          Add exam
          <span>+</span>
        </button>
      </section>

      <section className="stats-grid">
        <article className="stat-card accent-blue">
          <div className="stat-label">Upcoming exams</div>
          <div className="stat-value">{examList.length}</div>
          <div className="stat-note">Semester 2 · AY 2026/27</div>
        </article>

        <article className="stat-card accent-gold">
          <div className="stat-label">Next exam</div>
          <div className="stat-value">12 <small>days</small></div>
          <div className="stat-note">CS2040S</div>
        </article>

        <article className="stat-card accent-teal">
          <div className="stat-label">Total exam hours</div>
          <div className="stat-value">6</div>
          <div className="stat-note">Across 3 examinations</div>
        </article>
      </section>

      <section className="panel exam-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">SEMESTER 2 · AY 2026/27</p>
            <h2>Upcoming examinations</h2>
          </div>

          <button className="text-button">Calendar view →</button>
        </div>

        <div className="exam-list">
          {examList.map((exam) => (
            <article className="exam-row" key={exam.code}>
              <div className="exam-date">
                <strong>{exam.date.split(' ')[0]}</strong>
                <span>{exam.date.split(' ').slice(1).join(' ')}</span>
              </div>

              <div className="exam-info">
                <strong>{exam.code}</strong>
                <span>{exam.title}</span>
              </div>

              <div className="exam-detail">
                <span>Time</span>
                <strong>{exam.time}</strong>
              </div>

              <div className="exam-detail">
                <span>Venue</span>
                <strong>{exam.venue}</strong>
              </div>

              <div className="exam-status">
                <span>Scheduled</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
const timetableDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
]

const timetableSlots = [
  '08:00',
  '10:00',
  '12:00',
  '14:00',
  '16:00',
]
type ClassSession = {
  code: string
  title: string
  semester: 'Semester 1' | 'Semester 2'
  day: string
  time: string
  room: string
  color: string
}

const classSessions: ClassSession[] = [
  {
    code: 'CS2040S',
    title: 'Data Structures and Algorithms',
    semester: 'Semester 2',
    day: 'Tuesday',
    time: '10:00',
    room: 'COM1-02-19',
    color: 'blue',
  },
  {
    code: 'IS2103',
    title: 'Enterprise Systems Development',
    semester: 'Semester 2',
    day: 'Monday',
    time: '14:00',
    room: 'COM2-01-03',
    color: 'gold',
  },
  {
    code: 'ST2334',
    title: 'Probability and Statistics',
    semester: 'Semester 2',
    day: 'Wednesday',
    time: '12:00',
    room: 'LT19',
    color: 'teal',
  },
  {
    code: 'GEA1000',
    title: 'Quantitative Reasoning with Data',
    semester: 'Semester 1',
    day: 'Thursday',
    time: '10:00',
    room: 'LT12',
    color: 'purple',
  },
  {
    code: 'IS2103',
    title: 'Tutorial Group 04',
    semester: 'Semester 2',
    day: 'Friday',
    time: '16:00',
    room: 'COM2-02-05',
    color: 'gold',
  },
]
function TimetablePage() {
  const [selectedSemester, setSelectedSemester] = useState<
  'Semester 1' | 'Semester 2'
>('Semester 2')

const visibleSessions = classSessions.filter((session) => {
  const module = modules.find(
    (item) => item.code === session.code,
  )

  return (
    session.semester === selectedSemester &&
    module?.offeredIn.includes(selectedSemester)
  )
})
  function findSession(day: string, time: string) {
  return visibleSessions.find(
    (session) => session.day === day && session.time === time,
  )
}

  return (
    <>
      <section className="welcome-row">
        <div>
          <p className="eyebrow">WEEKLY SCHEDULE</p>
          <h1>Timetable</h1>
          <p className="welcome-description">
            View your lectures, tutorials and labs in one place.
          </p>
        </div>

        <button className="primary-button">
          Add class
          <span>+</span>
        </button>
      </section>

      <section className="timetable-toolbar">
        <label className="semester-selector">
  <span>Semester</span>

  <select
    value={selectedSemester}
    onChange={(event) =>
      setSelectedSemester(
        event.target.value as 'Semester 1' | 'Semester 2',
      )
    }
  >
    <option value="Semester 1">Semester 1</option>
    <option value="Semester 2">Semester 2</option>
  </select>

  <small>AY 2026/27</small>
</label>

        <div className="timetable-actions">
          <button className="secondary-light-button">‹</button>
          <button className="today-button">Today</button>
          <button className="secondary-light-button">›</button>
        </div>
      </section>

      <section className="panel timetable-panel">
        <div className="calendar-grid">
          <div className="calendar-corner">Time</div>

          {timetableDays.map((day) => (
            <div className="calendar-day" key={day}>
              {day.slice(0, 3)}
            </div>
          ))}

          {timetableSlots.map((time) => (
            <div className="calendar-row" key={time}>
              <div className="time-label">{time}</div>

              {timetableDays.map((day) => {
                const session = findSession(day, time)

                return (
                  <div className="calendar-cell" key={`${day}-${time}`}>
                    {session && modules.some((module) => module.code === session.code) && (
  <div className={`class-card ${session.color}`}>
                        <strong>{session.code}</strong>
                        <span>{session.title}</span>
                        <small>{session.room}</small>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </section>

      <section className="timetable-summary">
        <div className="schedule-status">
          <span className="status-dot" />
          <div>
            <strong>No timetable clashes detected</strong>
            <span>5 classes scheduled this semester</span>
          </div>
        </div>

        <div className="schedule-legend">
          <span><i className="legend-dot blue" />Lecture</span>
          <span><i className="legend-dot gold" />Tutorial</span>
          <span><i className="legend-dot teal" />Laboratory</span>
        </div>
      </section>
    </>
  )
}
function GpaCalculator() {
  const [rows, setRows] = useState<GradeRow[]>(initialGradeRows)

  const totalUnits = rows.reduce((sum, row) => sum + row.units, 0)

  const totalPoints = rows.reduce(
    (sum, row) => sum + gradePoints[row.grade] * row.units,
    0,
  )

  const cap = totalUnits === 0 ? 0 : totalPoints / totalUnits

  function updateGrade(code: string, grade: string) {
    setRows((currentRows) =>
      currentRows.map((row) =>
        row.code === code ? { ...row, grade } : row,
      ),
    )
  }

  return (
    <>
      <section className="welcome-row">
        <div>
          <p className="eyebrow">ACADEMIC PERFORMANCE</p>
          <h1>GPA calculator</h1>
          <p className="welcome-description">
            Estimate your semester CAP from your module grades.
          </p>
        </div>

        <button className="primary-button">
          Add module
          <span>+</span>
        </button>
      </section>

      <section className="dashboard-grid">
        <article className="panel modules-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">SEMESTER 2 · AY 2026/27</p>
              <h2>Module grades</h2>
            </div>
            <span className="module-count">{rows.length} modules</span>
          </div>

          <div className="module-list">
            {rows.map((row) => (
              <div className="module-row" key={row.code}>
                <div className="module-code">{row.code}</div>

                <div className="module-name">
                  {row.name}
                  <small>{row.units} units</small>
                </div>

                <select
                  className="grade-select"
                  value={row.grade}
                  onChange={(event) =>
                    updateGrade(row.code, event.target.value)
                  }
                >
                  {Object.keys(gradePoints).map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </article>

        <article className="panel gpa-result-panel">
          <p className="eyebrow">CURRENT ESTIMATE</p>
          <h2>Semester CAP</h2>

          <div className="cap-value">{cap.toFixed(2)}</div>

          <div className="cap-scale">
            <span>0.00</span>
            <span>5.00</span>
          </div>

          <div className="progress-bar">
            <span style={{ width: `${(cap / 5) * 100}%` }} />
          </div>

          <p className="gpa-note">
            Based on {totalUnits} units across {rows.length} modules.
          </p>
        </article>
      </section>

      <section className="stats-grid">
        <article className="stat-card accent-blue">
          <div className="stat-label">Total units</div>
          <div className="stat-value">{totalUnits}</div>
          <div className="stat-note">This semester</div>
        </article>

        <article className="stat-card accent-gold">
          <div className="stat-label">Weighted points</div>
          <div className="stat-value">{totalPoints.toFixed(1)}</div>
          <div className="stat-note">Grade points × units</div>
        </article>

        <article className="stat-card accent-teal">
          <div className="stat-label">Current CAP</div>
          <div className="stat-value">{cap.toFixed(2)}</div>
          <div className="stat-note positive">Update grades to recalculate</div>
        </article>
      </section>
    </>
  )
}
function AcademicProgress() {
    const programme = programmes[0]

  const completedCodes = new Set([
    'CS1010S',
    'CS1231S',
    'GEA1000',
  ])

  const requiredModules = programme.requiredModules
    .map((code) => modules.find((module) => module.code === code))
    .filter(Boolean)

  const completedModules = requiredModules.filter((module) =>
    completedCodes.has(module!.code),
  )

  const completedUnits = completedModules.reduce(
    (sum, module) => sum + module!.units,
    0,
  )

  const requiredUnits = requiredModules.reduce(
    (sum, module) => sum + module!.units,
    0,
  )

  
  return (
    <>
      <section className="welcome-row">
        <div>
          <p className="eyebrow">DEGREE JOURNEY</p>
          <h1>Academic progress</h1>
          <p className="welcome-description">
            Track your graduation requirements and plan your remaining modules.
          </p>
        </div>

        <button className="primary-button">
          Update academic record
          <span>+</span>
        </button>
      </section>

      <section className="stats-grid">
        <article className="stat-card accent-blue">
         <div className="stat-label">Catalogue completion</div>

<div className="stat-value">
  {Math.round((completedUnits / requiredUnits) * 100)}%
</div>

<div className="stat-note">
  {completedUnits} of {requiredUnits} catalogue units completed
</div>
        </article>

        <article className="stat-card accent-gold">
          <div className="stat-label">Major requirements</div>
          <div className="stat-value">35%</div>
          <div className="stat-note">28 of 80 units completed</div>
        </article>

        <article className="stat-card accent-teal">
          <div className="stat-label">University requirements</div>
          <div className="stat-value">30%</div>
          <div className="stat-note">12 of 40 units completed</div>
        </article>

        <article className="stat-card accent-purple">
          <div className="stat-label">Units remaining</div>
          <div className="stat-value">112</div>
          <div className="stat-note">Across the remaining semesters</div>
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="panel progress-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">REQUIREMENT BREAKDOWN</p>
              <h2>Degree completion</h2>
            </div>
          </div>

          <div className="progress-summary">
            <div className="progress-line">
              <span>Overall degree</span>
              <strong>48 / 160 units</strong>
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
              <span>University requirements</span>
              <strong>12 / 40 units</strong>
            </div>
            <div className="progress-bar teal">
              <span style={{ width: '30%' }} />
            </div>

            <div className="progress-line">
              <span>Unrestricted electives</span>
              <strong>8 / 40 units</strong>
            </div>
            <div className="progress-bar">
              <span style={{ width: '20%' }} />
            </div>
          </div>
        </article>

        <article className="panel semester-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">PROGRAMME</p>
              <h2>Your academic profile</h2>
            </div>
          </div>

          <div className="semester-list">
            <div className="semester-row">
              <span className="semester-status current">N</span>
              <span className="semester-label">Primary major</span>
              <strong>{programme.name}</strong>
            </div>

            <div className="semester-row">
              <span className="semester-status upcoming">M</span>
              <span className="semester-label">Minor</span>
              <strong>Not selected</strong>
            </div>

            <div className="semester-row">
              <span className="semester-status completed">4</span>
              <span className="semester-label">Current semester</span>
              <strong>Semester 2</strong>
            </div>
          </div>
        </article>
      </section>

      <section className="panel modules-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">MODULE RECORD</p>
            <h2>Completed modules</h2>
          </div>
          <span className="module-count">12 modules</span>
        </div>

        <div className="module-list">
  {requiredModules.map((module) => (
    <ModuleRow
      key={module!.code}
      code={module!.code}
      name={module!.title}
      units={String(module!.units)}
    />
  ))}
</div>
      </section>
    </>
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