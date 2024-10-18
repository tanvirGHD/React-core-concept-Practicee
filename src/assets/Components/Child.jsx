
//props

export default function Child(props) {
  return (
    <div>
        <h2>Child</h2>
        <div style={{border: '2px solid blue'}}>
        <p>Name: {props.name}</p>
        <p>Age: {props.age} </p>
        </div>
    </div>
  )
}
