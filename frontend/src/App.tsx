import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Predictions from "./components/Predictions";
import About from "./components/About";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Home" Component={Home} />
        <Route path="/Predictions" Component={Predictions} />
        <Route path="/About" Component={About} />
      </Routes>
    </>
  );
}

export default App;
