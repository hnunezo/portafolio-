import styled from "styled-components";

const Card7o = styled.div`
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
  padding: 1rem 2rem;
  &:hover {
    box-shadow: 1rem 2rem 2rem rgba(0, 0, 0, 0.6);
`;

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
  padding: 1rem 2rem;

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
    box-shadow: 1rem 2rem 2rem rgba(0, 0, 0, 0.6);

    &:before {
      transform: scaleY(1);
    }
  }
`;

export { Card, Card7o };
