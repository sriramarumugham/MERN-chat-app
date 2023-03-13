import React from "react";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import ('./App.css');

function App() {
  return (
    <div className="App"> 
    <Home/>     
    </div>
  );
}

export default App;
