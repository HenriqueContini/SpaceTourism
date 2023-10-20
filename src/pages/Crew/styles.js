import styled from "styled-components";
import background from "./bg/background-crew.jpg";

export const crewContainer = styled.main`
  padding: 50px 36px 36px 36px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 90px);

  @media screen and (min-width: 600px) {
    padding: 80px;
    padding-bottom: 0;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const title = styled.h1`
  font-size: 1.25rem;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.subtitle};
  text-align: center;
  color: ${(props) => props.theme.color.white};

  & > span {
    opacity: 0.4;
    font-weight: 700;
    margin-right: 16px;
  }

  @media screen and (min-width: 600px) {
    font-size: 1.5rem;
    text-align: left;
  }
`;

export const container = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  @media screen and (min-width: 600px) {
    flex-direction: column-reverse;
    padding: 50px 36px 0 36px;
    gap: 65px;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: minmax(250px, 500px) 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  }
`;

export const personImg = styled.img`
  max-height: min(500px, 70vw);
  height: 100%;
  border-bottom: 1px solid rgba(56, 59, 75, 1);

  @media screen and (min-width: 600px) {
    border-bottom: none;
  }

  @media screen and (min-width: 1024px) {
    max-height: min(550px, 70vw);
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }
`;

export const personSelector = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media screen and (min-width: 1024px) {
    justify-self: flex-start;
    align-self: flex-start;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;

export const personSelectorButton = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${(props) => props.theme.color.white}80;
  border-radius: 50%;
  cursor: pointer;

  transition: 300ms linear;

  &.active {
    background-color: ${(props) => props.theme.color.white};
  }

  &:hover {
    background-color: ${(props) => props.theme.color.main};
  }
`;
