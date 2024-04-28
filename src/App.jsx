/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// import "./App.scss";
import AppLayout from "./components/applayout/AppLayout";
import About from "./components/about/About";
import Album from "./components/album/Album";
import Home from "./components/home/Home";
import Game from "./components/game/Game";
import Message from "./components/message/Message";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="album" element={<Album />} />
          <Route path="about" element={<About />} />
          <Route path="message" element={<Message />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
