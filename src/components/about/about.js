import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Col, Row, Card, Img } from "react-bootstrap";
import "./about.css";
import camilla from "./aboutImages/camilla.jpg";
import Craig from "./aboutImages/Craig.jpg";
import Mas from "./aboutImages/Mas.jpg";
import Sean from "./aboutImages/Sean.jpg";
import JooMin from "./aboutImages/JooMin.jpg";
import Theo from "./aboutImages/Theo.jpg";
// import Poster from "./HomeImage/Home_Page.png";

const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <br />

            <Card className="cards">
              <Card.Img variant="top" src={camilla} />
              <Card.Body>
                <Card.Title>Camilla Lima</Card.Title>
                <Card.Text>"If the apocalypse comes beep me"</Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/camilla000"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <br />
            <br />
            <Card className="cards">
              <Card.Img variant="top" src={Craig} />
              <Card.Body>
                <Card.Title>Craig</Card.Title>
                <Card.Text>
                  “You’re only given one little spark of madness. you mustn’t
                  lose it.”
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/craigea92"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <br />
            <br />
            <Card className="cards">
              <Card.Img variant="top" src={JooMin} />
              <Card.Body>
                <Card.Title>JooMin (deceased) </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/camilla000"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <br />
            <br />
            <Card className="cards">
              <Card.Img variant="top" src={Mas} />
              <Card.Body>
                <Card.Title>Masako</Card.Title>
                <Card.Text>"What's a browser?"</Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/1ugia"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <br />
            <br />
            <Card className="cards">
              <Card.Img variant="top" src={Sean} />
              <Card.Body>
                <Card.Title>Sean</Card.Title>
                <Card.Text>Live.Love.Laugh.</Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/SeanEmmers"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <br />
            <br />
            <Card className="cards">
              <Card.Img variant="top" src={Theo} />
              <Card.Body>
                <Card.Title>Tarun (Theo Weisz)</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/TarunTheo13"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
