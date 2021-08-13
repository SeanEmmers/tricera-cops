import React from "react";
import RoomOneImage from "./room-one-images/RoomOneImage.jpeg";
import OrangeDoor from "./room-one-images/orange-door.png";
import Cop from "./room-one-images/triceCOP.png";
import Popup from "./PopUp";
import { useState } from "react";
import jarOutline from "./room-one-images/jarOutline.png";

class SpeechBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, I am Tricera-cop",
    };
  }

  updateContent = () => {
    this.setState({
      message:
        "We are locked in here, I need your help to escape and catch the killer!",
    });
  };

  render() {
    return (
      <div className="bubble">
        {this.state.message}
        <br />
        <button className="small-btn" onClick={this.updateContent}>
          Next...
        </button>
        <div className="pointer"></div>
      </div>
    );
  }
}

const Door = () => {
  const [buttonPopUp, setButtonPopup] = useState(false);

      return (
        <div>
          <img
            className="objectOutline"
            onClick={() => setButtonPopup(true)}
            src={OrangeDoor}
            alt="Door"
          />
          <div className="EndingText">
            <Popup trigger={buttonPopUp} setTrigger={setButtonPopup}>
              <button
                className="popup-btn"
                onClick={() => window.alert("You win!!")}
              >
                T-Rex is the killer?
              </button>
              <button
                className="popup-btn"
                onClick={() => window.alert("You lose!!")}
              >
                Asteroid is the killer?
              </button>
            </Popup>
          </div>
        </div>
      );
};

const DinoCop = () => {
  return (
    <div>
      <div className="parent">
        <img className="cop" src={Cop} alt="TriceraCop" />
      </div>
    </div>
  );
};

const LandingRoom = () => {
  return (
    <div className="LandingRoom">
      <div className="parent">
        <img className="backgroundImage" src={RoomOneImage} alt="TriceraCop" />
        <img className="objectOutline" id="OrangeLine" src={jarOutline} alt="Jar" />
        <Door />
        <DinoCop />
        <SpeechBubble />
      </div>
    </div>
  );
};

export default LandingRoom;
