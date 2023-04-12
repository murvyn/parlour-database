import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/sign-in/sign-in.component";
import Navigation from "./components/navbar/navbar.component";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/home" element={<Navigation/>} />

      </Routes>
    </>
  );
}

export default App;
