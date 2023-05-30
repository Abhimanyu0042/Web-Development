import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Avatar from './components/avatar';
import BUtton from './components/button';

function App() {
  const gridBox = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)'
}
//this is a basic component
return(<div style={gridBox}>
    <Card image="https://via.placeholder.com/200" name="Abhimanyu Kashyap" email="kashu@gmail.com"/>
    <Card image="https://via.placeholder.com/200" name="Rajvir Sharma" email="raju@gmail.com"/>
    <Card image="https://via.placeholder.com/200" name="Priya Pathankar" email="priyu@gmail.com"/>
    <BUtton typr="Call"/>
    <Avatar image="https://via.placeholder.com/200" name="Random" />
    </div>);
}

export default App;
