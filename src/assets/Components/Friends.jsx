import './friend.css';
import { useState } from "react"
import Friend from "./Friend"

export default function Friends() {

    const [friends, setFriends] = useState(15);

    const handleCount = () =>{
        const newAdd = friends+1;
        setFriends(newAdd)
    }

    const handleRemove = () => {
      setFriends(friends-1);
    }


  return (
    <div>
        <h2>1. Friends Components Paice: {friends}</h2>
        <button className='btn' onClick={handleCount}>Friends Add</button>
        <button className='btn' onClick={handleRemove}>Friends Remove</button>
        <Friend></Friend>
    </div>
  )
}
