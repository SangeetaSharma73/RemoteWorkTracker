import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from "react";
const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
