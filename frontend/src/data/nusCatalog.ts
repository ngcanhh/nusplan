export type Semester = 'Semester 1' | 'Semester 2'

export type ModuleType =
  | 'Core'
  | 'University Requirement'
  | 'Elective'
  | 'Minor'

export type Module = {
  code: string
  title: string
  units: number
  type: ModuleType
  offeredIn: Semester[]
  prerequisites: string[]
}

export type Programme = {
  id: string
  name: string
  faculty: string
  totalUnits: number
  requiredModules: string[]
}

export type Minor = {
  id: string
  name: string
  hostFaculty: string
  requiredUnits: number
  requiredModules: string[]
}

export const modules: Module[] = [
  {
    code: 'CS1010S',
    title: 'Programming Methodology',
    units: 4,
    type: 'Core',
    offeredIn: ['Semester 1', 'Semester 2'],
    prerequisites: [],
  },
  {
    code: 'CS1231S',
    title: 'Discrete Structures',
    units: 4,
    type: 'Core',
    offeredIn: ['Semester 1'],
    prerequisites: [],
  },
  {
    code: 'CS2030S',
    title: 'Programming Methodology II',
    units: 4,
    type: 'Core',
    offeredIn: ['Semester 1', 'Semester 2'],
    prerequisites: ['CS1010S'],
  },
  {
    code: 'CS2040S',
    title: 'Data Structures and Algorithms',
    units: 4,
    type: 'Core',
    offeredIn: ['Semester 1', 'Semester 2'],
    prerequisites: ['CS1231S'],
  },
  {
    code: 'CS2100',
    title: 'Computer Organisation',
    units: 4,
    type: 'Core',
    offeredIn: ['Semester 2'],
    prerequisites: ['CS1010S'],
  },
  {
    code: 'IS2103',
    title: 'Enterprise Systems Development',
    units: 4,
    type: 'Core',
    offeredIn: ['Semester 2'],
    prerequisites: [],
  },
  {
    code: 'ST2334',
    title: 'Probability and Statistics',
    units: 4,
    type: 'Core',
    offeredIn: ['Semester 1', 'Semester 2'],
    prerequisites: [],
  },
  {
    code: 'GEA1000',
    title: 'Quantitative Reasoning with Data',
    units: 4,
    type: 'University Requirement',
    offeredIn: ['Semester 1', 'Semester 2'],
    prerequisites: [],
  },
]

export const programmes: Programme[] = [
  {
    id: 'business-analytics',
    name: 'Business Analytics',
    faculty: 'School of Computing',
    totalUnits: 160,
    requiredModules: [
      'CS1010S',
      'CS1231S',
      'CS2030S',
      'CS2040S',
      'IS2103',
      'ST2334',
      'GEA1000',
    ],
  },
]

export const minors: Minor[] = [
  {
    id: 'computer-science',
    name: 'Minor in Computer Science',
    hostFaculty: 'School of Computing',
    requiredUnits: 20,
    requiredModules: [
      'CS1010S',
      'CS1231S',
      'CS2030S',
      'CS2040S',
      'CS2100',
    ],
  },
]
export type ClassSession = {
  code: string
  title: string
  semester: Semester
  day: string
  time: string
  room: string
  color: string
}

export const classSessions: ClassSession[] = [
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