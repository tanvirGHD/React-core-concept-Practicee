import { useState } from "react"


export default function Events() {

    const [event,setEvents] = useState(0);
    const [input ,setInput] = useState('')
    const [output ,setOutput] = useState('')

    const eventHandler = () => {
        const num = event + 1
        {event >= 10 ? alert('Max limited'): event}
        setEvents(num)
    }

    const inputHandler = (event) => {
        setInput(event.target.value);
    }
    const outputHandler = () => {
        setOutput(input)
    }


  return (
    <>
    <h2>Events Handling</h2>
    <hr />
    <p>Numbers: {event}</p>
    <button onClick={eventHandler}>Add Numbers</button>
    <br />
    <br />
    <br />
    <p>Add message:{output}</p>
    <input 
        type = 'text' 
        onChange = {inputHandler}>
        {/* value= '{input}' */}
    </input>
    <button onClick={outputHandler}>Input</button>
    </>
  )
}
