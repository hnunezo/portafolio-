import React from "react";
import Section from "../stateless/section/Section";
import "./projects.css";
import FlipCard from "./FlipCard";

const Projects = ({ projectsRef }) => {
  return (
    <div
      ref={projectsRef}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Section>
        <h2 className="align-self-center">PROJECTS</h2>
        <div className="d-flex flex-wrap justify-content-center">
          <FlipCard
            title={"Anime Searcher"}
            description={
              "A complete browser for anime series, manga, characters and voice actors. from the anime industry, you can bookmark it and order it for rank in a top."
            }
            img={"weeblist"}
            href="https://weeb-list.vercel.app/"
            tasks={[
              "Anime series searching",
              "Manga series searching",
              "Japanese characters searching",
              "Japanese voice actors searching",
              "Favorites list",
              "Draggable favorites order",
            ]}
          />
          <FlipCard
            title={"Math Quiz"}
            description={"ASDASD"}
            img={"weeblist"}
            href="https://weeb-list.vercel.app/"
            tasks={[
              "Anime series searching",
              "Manga series searching",
              "Japanese characters searching",
              "Japanese voice actors searching",
              "Favorites list",
              "Draggable favorites order",
            ]}
          />
          <FlipCard
            title={"Pokemon App"}
            description={"ASDASD"}
            img={"weeblist"}
            href="https://weeb-list.vercel.app/"
            tasks={[
              "Anime series searching",
              "Manga series searching",
              "Japanese characters searching",
              "Japanese voice actors searching",
              "Favorites list",
              "Draggable favorites order",
            ]}
          />
          <FlipCard
            title={"NASA App"}
            description={"ASDASD"}
            img={"weeblist"}
            href="https://weeb-list.vercel.app/"
            tasks={[
              "Anime series searching",
              "Manga series searching",
              "Japanese characters searching",
              "Japanese voice actors searching",
              "Favorites list",
              "Draggable favorites order",
            ]}
          />
        </div>
      </Section>
    </div>
  );
};

export default Projects;
