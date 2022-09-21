import React from "react";
import { Card } from "../stateless/Card";
import Section from "../stateless/section/Section";
import Text from "../stateless/Text";
import { FaQuestion, FaBook, FaCode, FaClock } from "react-icons/fa";
import "./about.css";

const About = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} style={{ display: "flex", justifyContent: "center" }}>
      <Section>
        <h2 className="align-self-center">ABOUT</h2>
        <div className="row text-center justify-content-center gap-4 my-4">
          <Card className="col-10 col-sm-10 col-md-4 col-xxl-2 pink-color">
            <Text>
              <h2>Curious mind</h2>
              <FaQuestion size={"56"} className="icon-fa icon-cyan" />
              <p>
                Wander through life wondering why things happen, and when
                something catches my attention I give everything to understand
                it.
              </p>
            </Text>
          </Card>
          <Card className="col-10 col-sm-10 col-md-4 col-xxl-2 cyan-color">
            <Text>
              <h2>A good book can change you</h2>
              <FaBook size={"56"} className="icon-fa icon-pink" />
              <p>
                Before going to bed, most of the time I read a little, it can be
                a page or two at least, it helps me to relax, my favorite type
                is philosophy and everything related to the universe.
              </p>
            </Text>
          </Card>
          <Card className="col-10 col-sm-10 col-md-4 col-xxl-2 pink-color">
            <Text>
              <h2>Continuous improvement</h2>
              <FaCode size={"56"} className="icon-fa icon-cyan" />
              <p>
                Always improve what has already been built, be it a small
                detail, I try to capture it.
              </p>
            </Text>
          </Card>
          <Card className="col-10 col-sm-10 col-md-4 col-xxl-2 cyan-color">
            <Text>
              <h2>Everything in its time</h2>
              <FaClock size={"56"} className="icon-fa icon-pink" />
              <p>
                Work better when I have planned the things that I am going to
                do, I like to organize things before starting, put good pillars
                before starting the work.
              </p>
            </Text>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default About;
