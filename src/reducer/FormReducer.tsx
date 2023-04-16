import { User, fetchedUsers } from './data'

enum FormTypes {
  INIT_FORM = 'INIT_FORM',
  UPDATE_FIELD = 'UPDATE_FIELD',
  ADD_USER = 'ADD_USER',
  DELETE_USER = 'DELETE_USER',
  TOGGLE_USER = 'TOGGLE_USER'
}

interface FormState {
  name: string
  surname: string
  age: number
  users: User[]
}

type ActionState =
  | { type: FormTypes.INIT_FORM }
  | { type: FormTypes.UPDATE_FIELD, payload: { field: string, value: string } }
  | { type: FormTypes.ADD_USER }
  | { type: FormTypes.DELETE_USER, payload: string }
  | { type: FormTypes.TOGGLE_USER, payload: string }

const initialState: FormState = {
  name: '',
  surname: '',
  age: 0,
  users: fetchedUsers
}

const reducer = (state: FormState, action: ActionState) => {
  switch (action.type) {
    case FormTypes.INIT_FORM:
      return initialState
    case FormTypes.UPDATE_FIELD:
      return { ...state, [action.payload.field]: action.payload.value }
    case FormTypes.ADD_USER:
      return { ...state, users: createUser(state) }
    case FormTypes.DELETE_USER:
      return { ...state, users: state.users.filter(u => u.id !== action.payload)}
    case FormTypes.TOGGLE_USER:
      return { ...state, users: toggleUserActivity(state.users, action.payload)}
    default:
      return state
  }
}

function createUser (state: FormState) {
  return [
    {
      id: `_${state.users.length + 1}`,
      name: state.name,
      surname: state.surname,
      age: state.age,
      isActive: true
    },
    ...state.users
  ]
}

function toggleUserActivity (users: User[], payload: string) {
  return users
    .map(u => u.id === payload ? { ...u, isActive: !u.isActive } : u)
}

export {
  initialState,
  reducer,
  FormTypes
}

export type {
  FormState,
  ActionState
}

