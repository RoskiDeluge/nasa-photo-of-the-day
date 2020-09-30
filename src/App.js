import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PhotoList from "./components/PhotoList";
import styled from "styled-components";

const AppTitle = styled.h1`
  margin-left: 10%;
  font-family: cooper-black-std, serif;
  font-style: italic;
  color: yellow;
  @media (min-width: 720px) {
    font-size: 3.5rem;
  }
  ,
  @media (min-width: 320px) {
    font-size: 1rem;
  }
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
        <AppFooter>
          <div>
            <iframe
              width="80%"
              height="170"
              scrolling="no"
              frameborder="no"
              src="https://blend.io/embed/55237d950ff338471f004faa"
            ></iframe>
            <iframe
              src="https://open.spotify.com/embed/playlist/0OEuV3ldY4Xdo1sfZ0eK61"
              width="300"
              height="380"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
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
