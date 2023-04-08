import { useEffect, useRef, useState } from 'react'
import { List } from './components/List'
import { Form } from './components/Form'
import { Sub } from './types'
import { getAllSubs } from './services/getAllSubs'

interface AppState {
  subs: Sub[]
  newSubsNumber: number
}

/* const INITIAL_STATE = [
  {
    nick: 'depalu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=depalu',
    description: 'Moderador',
  },
  {
    nick: 'sergio',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=sergio',
  },
] */

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    /* setSubs(INITIAL_STATE) */
    /* const fetchSubs = (): Promise<SubsResponseFromApi[]> => {
      return fetch('http://localhost:3001/subs')
          .then(res => res.json())
    } */

    getAllSubs()
      .then(setSubs)
      .catch(console.log)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
    setNewSubsNumber(n => n + 1)
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Subs</h1>
      <List subs={subs} />
      New subs: {newSubsNumber}
      <Form onNewSub={handleNewSub} />
    </div>
  )
}

export default App
