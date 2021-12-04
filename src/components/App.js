import React, { usestate } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "../Test";
import Home from "./Home";
import SkeletonComp from "./SkeletonComp";
import Skeleton from "./SkeletonComp";

function App() {
  return (
    <>
      <Router>
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path='/test' element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
