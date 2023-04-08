import { useEffect, useRef, useState } from 'react'
import { List } from './components/List'
import { Form } from './components/Form'
import { Sub } from './types'

interface AppState {
  subs: Sub[]
}

const INITIAL_STATE = [
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
]

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  )
}

export default App
