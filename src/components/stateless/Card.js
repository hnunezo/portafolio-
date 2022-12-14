import styled from "styled-components";

const Card = styled.div`
  background-size: 200% 100%;
  background-position: right bottom;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s ease-out;
  border-top: none;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.3);
  color: black;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: ease 0.7s;
  z-index: 2;
  padding: 1rem 2rem;

  &:hover {
    color: white;
    box-shadow: 1rem 2rem 2rem rgba(0, 0, 0, 0.6);
    background-position: left bottom;
  }
  .icon-cyan {
    color: black;
  }
  .icon-pink {
    color: black;
  }
  &:hover .icon-cyan {
    color: #04c2c9;
    transition: ease 0.7s;
  }
  &:hover .icon-pink {
    color: #e31b6d;
    transition: ease 0.7s;
  }
`;

export { Card };
