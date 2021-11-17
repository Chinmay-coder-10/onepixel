import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Test from "../Test";
import Navbar from "./Navbar";
import Demo from "../images/h.jpg"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes >
          <Route exact path='/test' element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
