import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'

export const Table = () => {
  return (
    <div>
      <table className="usersTable">
        <TableHeader />
        <TableBody />
      </table>
    </div>
  )
}
