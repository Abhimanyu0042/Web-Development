import React, { useState } from 'react'

function Fruits() {
    const [fruit,setFruit] = useState('Apple');

    const[inputText,setInputText] = useState('');

    const updatefruit = () => {
        setFruit(inputText);
    }
    
    function updateInputText(event) {
        const curInputValue = event.target.value;
        setInputText(curInputValue);
    }

  return (

    <>
      <p>The value of Fruit is {fruit}</p>
      <input type='text' onChange={updateInputText}/>
      {/* <button onClick={() => setFruit('Papaya')}>Papaya</button>
      <button onClick={() => setFruit('Mango')}>Mango</button>
      <button onClick={() => setFruit('Banana')}>Banana</button> */}
      <button onClick={() => updatefruit()}>submit</button>


    </>
  )
}

export default Fruits
