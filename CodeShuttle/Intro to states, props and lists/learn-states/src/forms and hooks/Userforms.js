import React, { useRef, useState } from 'react'

function Userforms() {

    const [name, setName] = useState(''); //it rerenders when any change occurs
    const nameInputRef = useRef(null); // its also a hook
    const fruitRef = useRef(null);//useRef is a value that doesnt needs for rerendering

    function handleSubmit (event) {
        event.preventDefault(); //it prevents default behaviour of forms that is it refreshes page after submit
        // console.log('submit clicked');
        const nameInputValue = nameInputRef.current.value; //its react way to access the values
        const fruitValue = fruitRef.current.value;
        alert(nameInputValue + ' ' + fruitValue);
    }

    const [fruit, setFruit] = useState('');

    function handleChange (e) {
        console.log(e.target.value);
        setFruit(e.target.value);
    }
    // //onSubmit handler lets u submit forms by clicking enter

  return (
    <form onSubmit={handleSubmit} style={{padding:'20px', margin:'20px'}}> 
        <label htmlFor="name">Name</label>
        {/* <input type="text" onChange={(event) => setName(event.target.value)} /> */}
        <input type="text" id='nameInput' ref={nameInputRef}/>

        <select onChange={handleChange} ref={fruitRef}>
            <option value="grapefruit">GrapeFruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>

        <button onClick={handleSubmit}> Submit </button>
    </form>
  );
};

export default Userforms


