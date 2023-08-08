import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    //cleanup work here
    function callTisOnUnmount() {

    }

    useEffect(() => {
        console.log(name, 'name updated');

        return callTisOnUnmount;
    }, [name]) //means when counter gets updates activate this function and its an array
    //[counter, name] is a dependency array

    useEffect(() => {
        console.log('first time mounter')
    },[]) //it runs only first time

    useEffect(() => {
        console.log(counter,' counter updated')
    },[counter])

    useEffect(() => {
        console.log('rendering happened')
    }) // it runs everytime


    return (
    <div>
      <p>{counter}</p>
      <input type="text" onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}

export default UseEffectHook
