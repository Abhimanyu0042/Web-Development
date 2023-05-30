import logo from './logo.svg';
import './App.css';
import BUTton1 from './components/btn';
import YOUcard from './components/youcard';

function App() {
  const homehead = {
    padding: '10px',
    paddingInline: '80px',
  }
  const youlayout = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }

  const videoLayout = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
    gap: '50px'

  }

  return (
    <div style={homehead}>
      <div style={youlayout}>
      <BUTton1/>
      <div style={videoLayout}>
      <YOUcard src="https://via.placeholder.com/300x200" alt="video" videotitle="CSS Variables | Toggle to the Dark Mode Using CSS Variables" views="1.7k views" time="2 days ago"/>
      <YOUcard src="https://via.placeholder.com/300x200" alt="video" videotitle="CSS Variables | Toggle to the Dark Mode Using CSS Variables" views="1.7k views" time="2 days ago"/>
      <YOUcard src="https://via.placeholder.com/300x200" alt="video" videotitle="CSS Variables | Toggle to the Dark Mode Using CSS Variables" views="1.7k views" time="2 days ago"/>
      <YOUcard src="https://via.placeholder.com/300x200" alt="video" videotitle="CSS Variables | Toggle to the Dark Mode Using CSS Variables" views="1.7k views" time="2 days ago"/>
      <YOUcard src="https://via.placeholder.com/300x200" alt="video" videotitle="CSS Variables | Toggle to the Dark Mode Using CSS Variables" views="1.7k views" time="2 days ago"/>
      <YOUcard src="https://via.placeholder.com/300x200" alt="video" videotitle="CSS Variables | Toggle to the Dark Mode Using CSS Variables" views="1.7k views" time="2 days ago"/>
      <YOUcard src="https://via.placeholder.com/300x200" alt="video" videotitle="CSS Variables | Toggle to the Dark Mode Using CSS Variables" views="1.7k views" time="2 days ago"/>
      <YOUcard src="https://via.placeholder.com/300x200" alt="video" videotitle="CSS Variables | Toggle to the Dark Mode Using CSS Variables" views="1.7k views" time="2 days ago"/>
      <YOUcard src="https://via.placeholder.com/300x200" alt="video" videotitle="CSS Variables | Toggle to the Dark Mode Using CSS Variables" views="1.7k views" time="2 days ago"/>
      <YOUcard src="https://via.placeholder.com/300x200" alt="video" videotitle="CSS Variables | Toggle to the Dark Mode Using CSS Variables" views="1.7k views" time="2 days ago"/>
      <YOUcard src="https://via.placeholder.com/300x200" alt="video" videotitle="CSS Variables | Toggle to the Dark Mode Using CSS Variables" views="1.7k views" time="2 days ago"/>

      
      </div>
      </div>

    </div>
  );
}

export default App;
