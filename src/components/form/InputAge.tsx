import './index.css'
import { useAction } from '../../context/FormContext'
import { FormTypes } from '../../reducer/FormReducer'
import { memo } from 'react'

type Props = {
  age: number
}

export const InputAge = memo(({ age }: Props) => {
  const dispatch = useAction()

  return (
    <div className="inputWrapper">
      <label
        className="input__label"
        htmlFor="age_field"
      >
        Age
      </label>
      <input
        id="age_field"
        type="number"
        name="age"
        className="input__value"
        value={age}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: FormTypes.UPDATE_FIELD,
            payload: {
              field: e.target.name,
              value: e.target.value
            }
          })
        }}
      />
    </div>
  )
})
