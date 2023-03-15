import React from "react";
import Home from "./pages/Home";
import {Routes , Route} from 'react-router-dom';
import ChatPage from "./pages/ChatPage";

import ('./App.css');

function App() {
  return (
    <div className="App"> 
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/chat" element={<ChatPage/>}/>
    </Routes>
    {/* <Home/>      */}
    </div>
  );
}

export default App;
