import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App(){
  return(
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />}/>
        <Route path={`/movie/:id`} element={<Detail />}/>
      </Routes>
    </Router>
  )
}

export default App;