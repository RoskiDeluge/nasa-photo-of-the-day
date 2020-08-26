import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PhotoList from "./components/PhotoList";
import "./App.css";
import styled from "styled-components";

const AppTitle = styled.h1`
  margin-left: 10%;
  font-family: "Arial", sans-serif;
  font-size: 3.5rem;
  color: yellow;
`;

const AppFooter = styled.p`
  margin-left: 10%;
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppTitle>NASA Photo of The Day</AppTitle>
        <Route component={PhotoList} path="/" exact />
        {/* <PhotoList /> */}
        <AppFooter>
          Made by RD{" "}
          <span role="img" aria-label="Rocket Ship">
            🚀
          </span>
        </AppFooter>
      </div>
    </BrowserRouter>
  );
}

export default App;
