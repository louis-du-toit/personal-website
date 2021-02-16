import React, { useState } from "react";
import styled from "styled-components";
import pepe from "./assets/pepe.jpg";
import one from "./assets/memes/01.png";
import two from "./assets/memes/02.png";
import three from "./assets/memes/03.png";
import four from "./assets/memes/04.png";
import five from "./assets/memes/05.png";
import six from "./assets/memes/06.png";
import seven from "./assets/memes/07.png";
import eight from "./assets/memes/08.png";
import nine from "./assets/memes/09.png";
import ten from "./assets/memes/10.png";
import eleven from "./assets/memes/11.png";
import twelve from "./assets/memes/12.png";
import thirteen from "./assets/memes/13.png";
import fourteen from "./assets/memes/14.png";
import fifteen from "./assets/memes/15.png";
import sixteen from "./assets/memes/16.png";
import seventeen from "./assets/memes/17.png";
import eighteen from "./assets/memes/18.png";
import ninteen from "./assets/memes/19.png";
import twenty from "./assets/memes/20.png";
import InDevelopment from "./InDevelopment";

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
  text-align: center;
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
  text-align: center;
`;

function App() {
  const [meme, setMeme] = useState("");
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  const memes = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    eighteen,
    ninteen,
    twenty,
  ];
  const memeTopTexts = [
    "When you really need to piss",
    "I can't wait for...",
    "Fuck Me!!!",
    "When your GF on her period",
    "When you get a boner in public",
    "Ohhhh shiiiitt....",
    "When you see a black person at the beach",
    "Seeing you neighbor getting changed in the window?",
    "Too full from eating dinner?",
    "Haven't Showered in weeks?",
    "Want to kill a homeless person",
    "Addicted to meth",
    "Want to meet the neighnours but...",
    "Switch on the TV",
    "Spicy food for dinner and then..",
    "When you can't think of memes",
    "When you see black kids",
    "When you're a sponge",
    "When you live in a pineapple",
    "When you're retarded",
    "Got a girlfriend",
    "Got any more of",
    "Tyrone Biggums",
    "2020",
    "Hows that coronavirus?",
    "Going on a date with Helen Keller",
    "Donald Trump slippin' in your sheets",
    "Is this?",
    "Would you rather get anal fisted or..",
    "You're 100% more confident when",
    "I'd rather eat your mums pussy than",
    "When you visit the catholic school",
    "Sunday church always begins with",
    "You're telling me that..",
    "When you're tits are bigger than hers",
    "Out here waiting for",
    "It's not size that matters it's",
  ];
  const memeBottomTexts = [
    "Make Curry",
    "ya cunt",
    "talk to Jacinda Ardern for 10 min",
    "shit yourself on command",
    "A raging erection",
    "you know what? I'm kinda down",
    "Instant prison sentence",
    "didn't see that coming",
    "lets not talk about it",
    "Meth?",
    "Cross the road",
    "Well, let's get lit",
    "Can we share?",
    "Run!!",
    "Shoot them",
    "but she's retarded",
    "But you don't have a pee pee",
    "But you're dead",
    "The Holacoust",
    "Death",
    "LMAO!!!!",
    "Lol bitch",
    "Just go at it",
    "Jam it in there",
    "I left the stove on",
    "I got a midget",
    "Ima get the fuck outa here!!!",
    "that aint right",
    "Dayyyyynnnnn",
    "Ima get my shotgun",
    "Let's order a pizza",
    "Take a shit",
    "Just die",
    "Don't give a fuuuuck",
    "Just do It! (Nike)",
    "Why not?",
    "YOLO",
    "Yeeeeah booiiiiii",
    "They are undreaged",
    "Kim Kardashian Fucking a Lemon",
    "Comeback Kardashian story",
  ];
  function generateMeme() {
    const memeIndex = Math.round(Math.random() * (memes.length - 1));
    setMeme(memes[memeIndex]);
    const topTextIndex = Math.round(Math.random() * (memeTopTexts.length - 1));
    setTopText(memeTopTexts[topTextIndex]);
    const bottomTextIndex = Math.round(
      Math.random() * (memeBottomTexts.length - 1)
    );
    setBottomText(memeBottomTexts[bottomTextIndex]);
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
        <TopText>{topText}</TopText>
        <BottomText>{bottomText}</BottomText>
      </MemeContainer>
      <InDevelopment />
    </StyledApp>
  );
}

export default App;
