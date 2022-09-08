import React from "react";
import Section from "../stateless/Section";
import { Card7o } from "../stateless/Card";
import Text from "../stateless/Text";
import "./projects.css";
const Projects = () => {
  return (
    <Section className="containerSec">
      <h2 className="align-self-center">PROJECTS</h2>
      <div className="row justify-content-center gap-4 my-4">
        <Card7o className="col-10 col-md-5 mycard">
          <Text className="mx-4 text-center">
            <h2>WeebList</h2>
            <p>ASDASD</p>
            <button className="align-self-center">hola</button>
          </Text>
          <img
            className="img-fluid img"
            src="./projects/Weeblist.png"
            alt="WeebList"
          />
        </Card7o>
        <Card7o className="col-10 col-md-5 mycard">
          <Text className="mx-4 text-center">
            <h2>WeebList</h2>
            <p>ASDASD</p>
            <button className="align-self-center">hola</button>
          </Text>
          <img
            className="img-fluid img"
            src="./projects/Weeblist.png"
            alt="WeebList"
          />
        </Card7o>
        <Card7o className="col-10 col-md-5 mycard">
          <Text className="mx-4 text-center">
            <h2>WeebList</h2>
            <p>ASDASD</p>
            <button className="align-self-center">hola</button>
          </Text>
          <img
            className="img-fluid img"
            src="./projects/Weeblist.png"
            alt="WeebList"
          />
        </Card7o>
        <Card7o className="col-10 col-md-5 mycard">
          <Text className="mx-4 text-center">
            <h2>WeebList</h2>
            <p>ASDASD</p>
            <button className="align-self-center">hola</button>
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
