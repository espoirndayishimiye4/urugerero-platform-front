
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignIn from './Components/signin/signin'
import Home from './landing-page/home';
import AboutUs from './Components/About Us/aboutus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
