import { useForm } from '../../context/FormContext'
import { TableRow } from './TableRow'

export const TableBody = () => {
  const { users } = useForm()
  return (
    <tbody>
      {users.map(u => <TableRow key={u.id} user={u} />)}
    </tbody>
  )
}
