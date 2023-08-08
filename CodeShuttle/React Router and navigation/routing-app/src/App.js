import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./Pages/About";
import Login from "./Pages/Login";
import Price from "./Pages/Price";
import NotFound from "./Pages/NotFound";
import Navigation from "./Components/Navigation";
import Profile from "./Pages/Profile";
import Projects from "./Pages/Projects";
import Free from "./Pages/Free";
import Premiuimprice from "./Pages/Premiuimprice";
import Freemium from "./Pages/Freemium";
import ForPremiumUser from "./Pages/ForPremiumUser";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/about" element={<About/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="*" element={<NotFound/>}/>
        <Route path="/user/:userId" element={<Profile/>}/>
        <Route path="/user/:userId/:projectId" element={<Projects/>}/>
        <Route path="/user/:userId/:projectId/settings" element={<About/>}/>
        
        <Route element={<ProtectedRoute/>}>
        <Route path="/prime" element={<ForPremiumUser/>}/>
        </Route>
        
        <Route path="/price" element={<Price/>}>
          <Route path="free" element={<Free/>}/>
          <Route path="premium" element={<Premiuimprice/>}/>
          <Route path="freemium" element={<Freemium/>}/>
        </Route>   


        {/* : is used to add attributes to link , also tell its a dynamic*/}
      </Routes>
    </div>
  );
}

export default App;
