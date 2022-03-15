import React, {useState} from "react";
import {Routes, Route} from 'react-router-dom'
import FirstComponent from "./component/FirstComponent";
import Home from "./component/HomeComponent";
import IntroRedux from "./component/IntroRedux";

function App() {
  const [count, setCount] = useState(0)
  return <div>
    <div>Header</div>
    <Routes>
      <Route path="/" element={<FirstComponent count={count} setCount={setCount} />} />
      <Route path="home" element={<Home count={count} setCount={setCount}/>} />
      <Route path="/redux" element={<IntroRedux />} />
    </Routes>
  </div>
}

export default App;

