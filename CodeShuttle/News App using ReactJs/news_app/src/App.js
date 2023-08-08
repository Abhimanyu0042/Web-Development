import './App.css';
import BannerAd from './components/BannerAd';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewsWeb from './components/NewsWeb';

function App() {
  return (
    <div className="App">
      <div className='body'>
        <Navbar></Navbar>
        <BannerAd></BannerAd>
        <NewsWeb></NewsWeb>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
