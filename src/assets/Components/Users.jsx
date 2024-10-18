import { useEffect, useState } from "react"
import User from "./User"
export default function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    },[])

  return (
    <div>
        <h2>Total Users: {users.length}</h2>
    {
        users.map(data => <User props ={data}> </User>) 
        
    }
    </div>
  )
}

