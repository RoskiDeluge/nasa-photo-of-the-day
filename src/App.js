import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PhotoList from "./components/PhotoList";
import styled from "styled-components";

const AppTitle = styled.h1`
  display: flex;
  justify-content: center;
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
  display: flex;
  flex-direction: column;
`;

const MusicContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Spotify = styled.iframe`
  margin-bottom: 1rem;
  border: none;
`;

const Signature = styled.div`
  font-family: cooper-black-std, serif;
  color: lightblue;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

const RDlink = styled.span`
  margin-left: 0.5rem;
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppTitle>NASA Photo of The Day</AppTitle>
        <Route component={PhotoList} path="/" exact />
        <AppFooter>
          <MusicContainer>
            <Spotify
              src="https://open.spotify.com/embed/playlist/0OEuV3ldY4Xdo1sfZ0eK61"
              width="300"
              height="380"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></Spotify>
          </MusicContainer>
          <Signature>
            Made by
            <RDlink>
              <a href="https://rldelgado.com/">RD</a>
            </RDlink>
            {"  "}
            <span role="img" aria-label="Rocket Ship">
              🚀
            </span>
          </Signature>
        </AppFooter>
      </div>
    </BrowserRouter>
  );
}

export default App;
