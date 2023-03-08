import React from "react";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import ('./App.css');

function App() {
  const [date, setDate] = useState([]);
  // const BASE_URL = "http://localhost:5000";
  const BASE_URL = "";

  const fetchChats = async () => {
    let chats = await axios.get( BASE_URL +"/api/chat");
    console.log(chats)
    setDate(chats.data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div className="App"> 
    <Home/>     
    </div>
  );
}

export default App;
