export type User = {
  id: string
  name: string
  surname: string
  age: number
  isActive: boolean
}

export const fetchedUsers: User[] = [
  {
    id: '_1',
    name: 'Artur',
    surname: 'Kempny',
    age: 33,
    isActive: true
  },
  {
    id: '_2',
    name: 'Andrzej',
    surname: 'Tymczasowy',
    age: 31,
    isActive: true
  }
]
