import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { initialState, reducer, ActionState, FormState } from '../reducer/FormReducer'

export const ActionContext = createContext<React.Dispatch<ActionState>>(() => null)
export const FormContext = createContext<FormState>(initialState)

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [form, dispatch] = useReducer(reducer, initialState)

  return (
    <ActionContext.Provider value={dispatch}>
      <FormContext.Provider value={form}>
        {children}
      </FormContext.Provider>
    </ActionContext.Provider>
  )
}

export const useForm = () => {
  const orders = useContext(FormContext)
  if (!orders) {
    throw new Error('useForm must be used within a FormProvider')
  }
  return orders
}

export const useAction = () => {
  const action = useContext(ActionContext)
  if (!action) {
    throw new Error('useAction must be used within a FormProvider')
  }
  return action
}
