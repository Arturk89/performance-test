import React from 'react'
import { InputAge, InputLastName, InputName, Submit } from '../../components/form'
import './index.css'
import { useAction, useForm } from '../../context/FormContext'
import { FormTypes } from '../../reducer/FormReducer'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAction()

  return (
    <div className="formContent">
      <form onSubmit={(e) => {
        e.preventDefault()
        dispatch({type: FormTypes.ADD_USER})
      }}>
        {children}
      </form>
    </div>
  )
}

export function FormContent () {
  const { name, surname, age } = useForm()

  return (
    <Wrapper>
      <InputName name={name} />
      <InputLastName surname={surname} />
      <InputAge age={age} />
      <Submit />
    </Wrapper>
  )
}
