import ImageCard from './Components/Cards/ImageCard/ImageCard';
import Header from './Components/Header/Header';
import { Route, Routes, useLocation, Sw } from "react-router-dom";
import './App.css'
import TextCard from './Components/Cards/TextCard/TextCard';
import Home from './Components/Home/Home';
import SignIn from './Components/Auth/SignIn/SignIn';
import SignUp from './Components/Auth/SignUp/SignUp'

function App() {
  const currentPath = useLocation();
  return (
    <div className="App">

      {currentPath.pathname === "/" ||
        currentPath.pathname === "/signup" ? null : (
        <Header />
      )}
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>


        <Route exact path="/" element={<SignIn />}></Route>


        <Route exact path="/signup" element={<SignUp />}></Route>
      </Routes>

    </div>
  );
}

export default App;
