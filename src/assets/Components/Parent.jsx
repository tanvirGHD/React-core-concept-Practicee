
//props

import Child from "./Child"

export default function Parent() {

    const userName= 'tanvir';
    const age =21;

  return (
    <div>
        <h2>Parent</h2>
        <Child name={userName} age={age}></Child>
    </div>
  )
}
