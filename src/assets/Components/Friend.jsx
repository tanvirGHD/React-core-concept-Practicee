import './friend.css';
import {useState } from "react"
import Users from './Users';
export default function Friend() {
    const [friend, setFriend] = useState(12);

    const handleCount = () => {
        setFriend(friend+1)
    }
    const handleRemove = () => {
        setFriend(friend-1)
    }

  return (
    <>
        <h2>2. Friend Components Paice: {friend}</h2>
        <button className='btn' onClick={handleCount}>Friend Add</button>
        <button className='btn' onClick={handleRemove}>Friend Remove</button>
        <Users></Users>

    </>
  )
}
