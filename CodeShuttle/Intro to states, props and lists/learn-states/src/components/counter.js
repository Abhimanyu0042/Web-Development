import React, { useState } from 'react'

function Counter() {
    let [count, setCount] = useState(0); //state variable allows rerendering
    //useState basically creates an array where at 0 index is variable and at 1 index is the variable which needs to be updated
    //const can also be used against let as it creates function everytime
    function updateCount(){
      count = count + 1;
        setCount(count);//setCount used to update the variable
        console.log(count);
    }
  return (
    <>  
      <p>The value of count is {count}</p>
      <button onClick={updateCount}>Increment</button>
    </>
  );
}

export default Counter

//click, onClick
