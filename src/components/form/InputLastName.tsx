import './index.css'
import { useAction, useForm } from '../../context/FormContext'
import { ChangeEvent, memo } from 'react'
import { ActionState, FormTypes } from '../../reducer/FormReducer'

type Props = {
  surname: string
}

export const InputLastName = memo(({ surname }: Props) => {
  const dispatch = useAction()

  return (
    <div className="inputWrapper">
      <label
        htmlFor="lastname_field"
        className="input__label"
      >
        Lastname
      </label>
      <input
        id="lastname_field"
        name="surname"
        className="input__value"
        value={surname}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: FormTypes.UPDATE_FIELD,
            payload: {
              field: e.target.name,
              value: e.target.value
            } }
          )}}
      />
    </div>
  )
})
