import React from "react";
import {Routes, Route} from 'react-router-dom'
import FirstComponent from "./component/FirstComponent";
import Home from "./component/HomeComponent";

function App() {
  return <div>
    <div>Header</div>
    <Routes>
      <Route path="/" element={<FirstComponent />} />
      <Route path="home/*" element={<Home />} />
    </Routes>
  </div>
}

export default App;

