import Card from "react-bootstrap/Card";
import "./flipcard.css";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../stateless/Button";
import "./projects.css";

const FlipCard = ({ title, description, img, href, tasks }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="div-relative">
      <Card className="flip-card">
        <div
          className="flip-card-inner"
          style={flipped === true ? { transform: "rotateY(180deg)" } : null}
        >
          <div
            className="flip-card-front pink-color2"
            onClick={() => setFlipped(true)}
          >
            <Card.Img
              alt={`${img}.png`}
              src={require(`../../assets/img/${img}.png`)}
              className="img-card"
            />
            <div className="text-card">
              <Card.Title>
                <h4>{title}</h4>
              </Card.Title>
            </div>
          </div>
          <div
            className="flip-card-back cyan-color2"
            onClick={() => setFlipped(false)}
          >
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>{description}</p>
              <ul>
                {tasks.map((el, i) => (
                  <li key={i} className={"text-start"}>
                    {el}
                  </li>
                ))}
              </ul>
            </Card.Body>
            <a
              href={href}
              target={"_blank"}
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button className="icon-pink">
                GO
                <AiOutlineArrowRight size={42} />
              </Button>
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FlipCard;
