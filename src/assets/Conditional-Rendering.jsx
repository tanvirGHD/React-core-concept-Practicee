import { useState } from "react"
import Rendering2 from "./Conditional-Rendering2";


export default function Conditional() {

    const [user, setUser] = useState([]);

    

    const displayHandler = () => {
        const user = "login"
        const loginOut = user === "login" ? "Welcome.. login done" : "Please Login"
        setUser(loginOut)
    }



  return (
    <div>
        <hr />
        <h2>Conditional-Rendering</h2>
        <p>My Website: {user}</p>
        <button onClick={displayHandler}>Login</button>
        <button>Logout</button>
        <Rendering2></Rendering2>
    </div>
    
  )
  
}
