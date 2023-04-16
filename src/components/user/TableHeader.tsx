const header = ['ID', 'Name', 'Lastname', 'Age', 'isActive', 'Action']

export const TableHeader = () => {
  return (
    <thead>
      <tr>
        {header.map(h => (
          <th key={h} align="left">{h}</th>
        ))}
      </tr>
    </thead>
  )
}
