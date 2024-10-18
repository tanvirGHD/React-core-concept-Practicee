import './Users.css'

export default function User({props}) {
    const {id,username,email} = props;
    
  return (
    <div className='btn'>
    <p>Id: {id}</p>
    <p>Name: {username}</p>
    <p>Email: {email}</p>
    </div>
  )
}
