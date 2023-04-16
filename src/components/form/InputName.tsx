import './index.css'
import { useAction, useForm } from '../../context/FormContext'
import { FormTypes } from '../../reducer/FormReducer'
import { ChangeEvent, memo } from 'react'

type Props = {
  name: string
}

export const InputName = memo(({ name }: Props) => {
  const dispatch = useAction()

  return (
    <div className="inputWrapper">
      <label
        htmlFor="name_field"
        className="input__label"
      >
        Name
      </label>
      <input
        id="name_field"
        name="name"
        className="input__value"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: FormTypes.UPDATE_FIELD,
            payload: {
              field: e.target.name,
              value: e.target.value
            }})
        }}
      />
    </div>
  )
})
