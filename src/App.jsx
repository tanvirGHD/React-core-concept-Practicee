
import reactLogo from './assets/react.svg'
import './App.css'
import Friends from './assets/Components/Friends'
import Events from './assets/Components/Events'
import Event from './assets/Components/Event'
import Parent from './assets/Components/Parent'
import Conditional from './assets/Conditional-Rendering'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h2>Practice React Core Concept</h2>
        <Friends></Friends>
        <Events></Events>
        <Event></Event>
        <Parent></Parent>
        <Conditional></Conditional>
      </div>
    </>
  )
}

export default App
