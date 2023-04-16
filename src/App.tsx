import { FormWrapper, FormContent } from './container/form'
import { Users } from './container/users'
import { FormProvider } from './context/FormContext'
import './app.css'

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="appWrapper">
      {children}
    </div>
  )
}

function App() {
  return (
    <AppWrapper>
      <FormProvider>
        <FormWrapper>
          <FormContent />
        </FormWrapper>
        <Users />
      </FormProvider>
    </AppWrapper>
  )
}

export default App
