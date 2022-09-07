import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  position: relative;
  border-top: none;
  border-left: solid 5px #71ff3d;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.3);
  color: black;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: ease 1s;
  z-index: 2;

  &:before {
    position: absolute;
    left: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    bottom: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: #fa9316;
    transform-origin: 0 bottom 0;
    transform: scaleY(0);
    transition: 0.3s ease-out;
  }

  &:hover {
    color: white;
    &:before {
      transform: scaleY(1);
    }
  }
`;

const Text = styled.div`
  position: relative;
  line-height: 1.333;
  transition: 0s ease-out;
`;

const About = ({ aboutRef }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <h2>ABOUT</h2>
      <div
        className="row text-center justify-content-center gap-4 my-4"
        ref={aboutRef}
      >
        <Card className="col-12 col-md-2">
          <Text>
            <h2>Where does it come from?</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words.
            </p>
          </Text>
        </Card>
        <Card className="col-12 col-md-2">
          <Text>
            <h2>Where does it come from?</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words.
            </p>
          </Text>
        </Card>
        <Card className="col-12 col-md-2">
          <Text>
            <h2>Where does it come from?</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words.
            </p>
          </Text>
        </Card>
        <Card className="col-12 col-md-2">
          <Text>
            <h2>Where does it come from?</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words.
            </p>
          </Text>
        </Card>
      </div>
    </div>
  );
};

export default About;
