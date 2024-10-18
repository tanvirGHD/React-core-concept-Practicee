import { useState } from "react";


export default function Rendering2() {
    const [input, setInput] = useState('')
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const inputHandler = (event) => {
        const even = event.target.value;
        setInput(even);

    
        even.length > 5 ? setIsButtonDisabled(false) : setIsButtonDisabled(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", input);
    };

    return (
        
        <form onSubmit={handleSubmit}>
            <hr></hr>
            <input 
                type="text" 
                value={input} 
                onChange={inputHandler} 
                placeholder="Enter at least 6 characters"
            />
            <button type="submit" disabled={isButtonDisabled}>
                Submit
            </button>
        </form>
    );
};


