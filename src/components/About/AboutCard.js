import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Ganesh Murala </span>
            from <span className="purple"> Gannavaram, India.</span>
            <br />
            I am currently a student at KL University.
            <br />
            I am pursuing B.Tech - Computer Science and Engineering (Honors through experiential learning).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Open Source Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sai Ganesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
