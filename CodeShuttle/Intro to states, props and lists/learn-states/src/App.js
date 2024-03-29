import './App.css';
import React,{useState} from 'react';
// import Counter from './components/counter';
// import Fruits from './components/Fruits';
// import Notes from './components/Notes';
// import Child1 from './components/Child1';
// import Child2 from './components/Child2';
//import Userforms from './forms and hooks/Userforms';
//import UseEffectHook from './forms and hooks/UseEffectHook';
// import Hooks from './forms and hooks/Hooks';
import NewsApp from './forms and hooks/NewsApp';

function App() {

  const [countInParent, setCountInParent] = useState(0);

	function updateCountInParent(count) {
		setCountInParent(count)
	}

	function uploadData() {
		console.log('I will start uploading the data now');
	}
  return (
    <div>
      {/* <Counter/> */}
      {/* <Fruits/> */}
      {/* <Notes/> */}
      {/* <p>Inside the parent: {countInParent}</p>
            <Child1 onCountUpdate={updateCountInParent}/>
            <Child2 countFromParent={countInParent} uploadData={uploadData}/> */}

            {/* lecture 19 components */}

            {/* <Userforms/> */}
            {/* <UseEffectHook/> */}
            {/* <Hooks/> */}
            <NewsApp/>

    </div>
  );
}

export default App;
