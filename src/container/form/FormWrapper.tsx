import './index.css'
import { Title } from '../../components/form'

type Props = {
  children: React.ReactNode
}

export function FormWrapper({ children }: Props) {
  return (
    <div className="formWrapper">
      <Title title="User form" />
      {children}
    </div>
  )
}
