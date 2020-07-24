import React from "react";
import PhotoList from "./components/PhotoList";
import "./App.css";
import styled from "styled-components";

const AppTitle = styled.h1`
  margin-left: 10%;
  font-family: 'Impact', sans-serif;
  font-size: 3.5rem;
  color: yellow;
`

const AppFooter = styled.p`
  margin-left: 10%;
`

function App() {
  return (
    <div className="App">
      <AppTitle>
        NASA Photo of The Day
      </AppTitle>
      <PhotoList />
      <AppFooter>Made by RD <span role="img" aria-label="Rocket Ship">🚀</span></AppFooter>
    </div>
  );
}

export default App;
