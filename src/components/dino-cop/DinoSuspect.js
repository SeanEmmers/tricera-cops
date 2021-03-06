import React from "react";
import { useState } from 'react';
import DinoImg from "./dino-images/triceCOP.png";
import "./Dino.css";
import Popup from "../popup/PopUp";
import SpeechBubbleReuse from "../speech-bubble/SpeechBubbleReuse";

const DinoSuspect = (props) => {
  const [showPopup, setButtonPopup] = useState(false);
  const [speechBubble, setSpeechbubble] = useState(false);

  const clickHandler = () => {
    setButtonPopup(true);
    props.showSuspects(false);
    props.showDoor(true);
    props.showKey(true);
    setSpeechbubble(true);
  }

  const bubbleText = () => {
    return(
      "Argghhh! I can't believe you caught me! RAAWWWWRRR"
    )
  }

  return (
    <div>
      <img className="cop-suspect" src={DinoImg} alt="Dino-cop" onClick = {() => clickHandler()} />
      <Popup show={showPopup} setShow={setButtonPopup}>
        <div>
          <p>Congratulations! You solved the case and exposed the real killer. You are presented with the key to the city for your dedication to justice.</p>
          <p className="gameinstruction" >When you are ready, click on the door to finish the game.</p>
        </div>
      </Popup>
      <SpeechBubbleReuse display={speechBubble} showBubble={setSpeechbubble} words={bubbleText}>
      </SpeechBubbleReuse>
    </div>
  );
};

export default DinoSuspect;