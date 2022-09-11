import React from "react";
import { Card } from "../stateless/Card";
import Section from "../stateless/Section";
import Text from "../stateless/Text";

const About = ({ aboutRef }) => {
  return (
    <Section>
      <h2 className="align-self-center">ABOUT</h2>
      <div
        className="row text-center justify-content-center gap-4 my-4"
        ref={aboutRef}
      >
        <Card className="col-10 col-sm-10 col-md-4 col-xxl-2 pink-color">
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
        <Card className="col-10 col-sm-10 col-md-4 col-xxl-2 cyan-color">
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
        <Card className="col-10 col-sm-10 col-md-4 col-xxl-2 pink-color">
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
        <Card className="col-10 col-sm-10 col-md-4 col-xxl-2 cyan-color">
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
    </Section>
  );
};

export default About;
