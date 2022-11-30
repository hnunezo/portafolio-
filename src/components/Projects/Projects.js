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
        <div className="d-flex flex-wrap justify-content-center gap-5">
          <FlipCard
            title={"Mathgram"}
            description={
              "A simple math-quiz app for exercises your logical skills."
            }
            img={"mathgram"}
            href="https://mathgram.vercel.app/"
            tasks={[
              "Solve math exercises for practice",
              "Evaluate yourself with percentages to pass each exam",
            ]}
          />
          <FlipCard
            title={"Pokemon App"}
            description={"Be the trainer you always wanted to be!"}
            img={"poke-app"}
            href="https://poke-app-eight-pi.vercel.app/"
            tasks={[
              "Catch wilds pokemon",
              "Form your team",
              "Fill the pokedex",
              "Save your pokemons on PC",
            ]}
          />
          <FlipCard
            title={"WeebList"}
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
            title={"NASA App"}
            description={"Discover the universe in a fun way!"}
            img={"nasaapp"}
            href="https://nasa-app-iota.vercel.app/"
            tasks={[
              "Discover incredible images of the universe, with the random function",
              "Daily image of the universe with the story behind",
              "Perform custom searches to deliver related images and find out how they were taken",
            ]}
          />
        </div>
      </Section>
    </div>
  );
};

export default Projects;
