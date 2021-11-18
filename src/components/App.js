import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "../Test";
import Navbar from "./Navbar";

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
