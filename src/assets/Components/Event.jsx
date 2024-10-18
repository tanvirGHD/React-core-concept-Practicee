import { useState } from "react"

export default function Event() {

    const [input, setInput]= useState('');
    const [output, setOutput]= useState('');

    const inputHandler = (event) => {
        const even = event.target.value
        
        setInput(even);
    }

    const outputHandler = () => {
        setOutput(input)
    }



  return (
    <>
    <hr></hr>
    <h2>Event & Count</h2>
    {/* Shate shate dekhabe */}
    <h4>My Text: {input}</h4> 
    {/* button a click korle dekhabe */}
    <h4>My Text: {output}</h4>
    <input onChange={inputHandler} type="text"placeholder="Something..."></input>
    <button onClick={outputHandler}>Add Text</button>
    </>
  )
}
