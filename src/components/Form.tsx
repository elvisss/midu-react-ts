import { useNewSub } from '../hook/useNewSub'
import { Sub } from '../types'


interface FormProps {
  onNewSub: (newSub: Sub) => void
}

export const Form = ({ onNewSub }: FormProps) => {
  /* const [inputValues, setInputValues] =
    useState<FormState['inputValues']>(INITIAL_STATE) */

  const [ inputValues, dispatch ] = useNewSub()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewSub(inputValues)
    handleClear()
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    /* setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    }) */
		dispatch({
			type: 'change_value',
			payload: {
				inputName: name,
				inputValue: value
			}
		})
  }

  const handleClear = () => {
    /* setInputValues(INITIAL_STATE) */
		dispatch({
			type: 'clear',
		})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValues.nick}
          onChange={(e) => handleChange(e)}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          value={inputValues.subMonths}
          onChange={handleChange}
          type="number"
          name="subMonths"
          placeholder="subMonths"
        />
        <input
          value={inputValues.avatar}
          onChange={handleChange}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          value={inputValues.description}
          onChange={handleChange}
          name="description"
          placeholder="description"
        ></textarea>

        <button onClick={handleClear} type="button">
          Clear the form
        </button>
        <br />
        <button type="submit">Save new sub</button>
      </form>
    </div>
  )
}
