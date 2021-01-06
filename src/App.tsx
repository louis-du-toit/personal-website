import React, { useState } from "react";
import styled from "styled-components";
import pepe from "./assets/pepe.jpg";
import one from "./assets/memes/01.png";
import two from "./assets/memes/02.png";
import three from "./assets/memes/03.png";
import four from "./assets/memes/04.png";

const pepemessage = "thanks for visiting ya dingus";

const StyledApp = styled.div`
  color: black;
  font-family: "Oswald", sans-serif;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
`;
const Pepe = styled.img`
  height: 100px;
`;
const Louis = styled.h2``;
const GenerateMeme = styled.button`
  font-family: "Oswald", sans-serif;
  background: green;
  color: white;
  width: 200px;
  margin-bottom: 20px;
  border: none;
  padding: 3px 9px 5px 9px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;
const MemeContainer = styled.div`
  position: relative;
  height: 600px;
  width: 600px;
`;
const MemeImage = styled.img`
  width: 100%;
  height: 100%;
`;
const TopText = styled.p`
  font-family: "Oswald", sans-serif;
  font-size: 60px;
  filter: drop-shadow(0 0 5px black);
  color: white;
  position: absolute;
  font-weight: 600;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BottomText = styled.p`
  font-family: "Oswald", sans-serif;
  font-size: 60px;
  filter: drop-shadow(0 0 5px black);
  color: white;
  position: absolute;
  font-weight: 600;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [meme, setMeme] = useState("");

  const memes = [one, two, three, four];
  function generateMeme() {
    const memeIndex = Math.round(Math.random() * 3);
    setMeme(memes[memeIndex]);
  }

  return (
    <StyledApp>
      <Header>
        <Pepe src={pepe} onClick={() => alert(pepemessage)} />
        <Louis>Meme Generation</Louis>
      </Header>
      <GenerateMeme onClick={() => generateMeme()}>
        holy fuck it's a meme, click me cunt
      </GenerateMeme>
      <MemeContainer>
        <MemeImage src={meme} />
        <TopText>Fuck</TopText>
        <BottomText>You</BottomText>
      </MemeContainer>
    </StyledApp>
  );
}

export default App;
