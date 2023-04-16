import { User } from '../../reducer/data'
import { useAction } from '../../context/FormContext'
import { FormTypes } from '../../reducer/FormReducer'
import { memo } from 'react'
import './index.css'

type Props = {
  user: User
}
export const TableRow = memo(({ user }: Props) => {
  const dispatch = useAction()
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.age}</td>
      <td>{user.isActive ? 'Active' : 'unActive'}</td>
      <td>
        <button
          onClick={() => dispatch({ type: FormTypes.TOGGLE_USER, payload: user.id })}
        >
          toggle activity
        </button>
        <button
          className="actiion--delete"
          onClick={() => dispatch({ type: FormTypes.DELETE_USER, payload: user.id })}
        >
          delete
        </button>
      </td>
    </tr>
  )
})
