//import logo from './logo.svg';
import './App.css';
import Labs from "./labs/index";
import Assignment7 from "./labs/a7/index";
import Tuiter from "./tuiter";
import TuiterExplorePage from "./tuiter/explore-index";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index
            element={<Labs />} />
          <Route path="/a7"
            element={<Assignment7 />} />
          <Route path="/home"
            element={<Tuiter/>} />
            <Route path="/tuiter"
            element={<Tuiter/>} />
          <Route path="/explore"
            element={<TuiterExplorePage/>} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}
export default App;

//export default App;
