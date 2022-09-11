import React from "react";
import Section from "../stateless/Section";
import { Card7o } from "../stateless/Card";
import Text from "../stateless/Text";
import "./projects.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../stateless/Button";

const Projects = () => {
  return (
    <Section className="containerSec">
      <h2 className="align-self-center">PROJECTS</h2>
      <div className="row justify-content-center gap-5 my-4">
        <Card7o className="col-10 col-md-5 mycard pink-color2">
          <Text className="mx-4 text-center">
            <h2>WeebList</h2>
            <p>ASDASD</p>
            <a
              href="https://weeb-list.vercel.app/"
              target={"_blank"}
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button className="icon-pink">
                GO
                <AiOutlineArrowRight size={42} />
              </Button>
            </a>
          </Text>
          <img
            className="img-fluid img"
            src="./projects/Weeblist.png"
            alt="WeebList"
          />
        </Card7o>
        <Card7o className="col-10 col-md-5 mycard cyan-color2">
          <Text className="mx-4 text-center">
            <h2>WeebList</h2>
            <p>ASDASD</p>
            <Button className="icon-cyan">
              GO
              <AiOutlineArrowRight size={42} />
            </Button>
          </Text>
          <img
            className="img-fluid img"
            src="./projects/Weeblist.png"
            alt="WeebList"
          />
        </Card7o>
        <Card7o className="col-10 col-md-5 mycard  pink-color2">
          <Text className="mx-4 text-center">
            <h2>WeebList</h2>
            <p>ASDASD</p>
            <Button className="icon-pink">
              GO
              <AiOutlineArrowRight size={42} />
            </Button>
          </Text>
          <img
            className="img-fluid img"
            src="./projects/Weeblist.png"
            alt="WeebList"
          />
        </Card7o>
        <Card7o className="col-10 col-md-5 mycard cyan-color2">
          <Text className="mx-4 text-center">
            <h2>WeebList</h2>
            <p>ASDASD</p>
            <Button className="icon-cyan">
              GO
              <AiOutlineArrowRight size={42} />
            </Button>
          </Text>
          <img
            className="img-fluid img"
            src="./projects/Weeblist.png"
            alt="WeebList"
          />
        </Card7o>
      </div>
    </Section>
  );
};

export default Projects;
