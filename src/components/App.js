import React,{usestate} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "../Test";
import Home from "./Home";
import Image from "./Image";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Router>
        <Home/>
        {/* <Image /> */}
        <Routes >
          <Route exact path='/test' element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
