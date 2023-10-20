import styled from "styled-components";
import background from "./bg/stars.jpg";

export const destinationContainer = styled.main`
  padding: 50px 36px 36px 36px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 90px);

  @media screen and (min-width: 1024px) {
    padding: 80px;
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
  gap: 80px;

  @media screen and (min-width: 600px) {
    padding: 50px 36px;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
`;

export const planetImg = styled.img`
  width: 100%;
  max-width: 200px;

  @media screen and (min-width: 600px) {
    max-width: 300px;
  }

  @media screen and (min-width: 600px) {
    max-width: 420px;
  }
`;

export const wrapper = styled.div`
  max-width: 430px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const planetSelector = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px 15px;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (min-width: 600px) {
    gap: 36px;
  }
`;

export const planetSelectorButton = styled.button`
  color: ${(props) => props.theme.color.main};
  font-family: ${(props) => props.theme.font.subtitle};
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2.3px;
  cursor: pointer;
  background-color: transparent;
  padding-bottom: 10px;
  border: none;
  border-bottom: 3px solid transparent;
  transition: 300ms linear;

  &:hover {
    border-bottom-color: ${(props) => props.theme.color.white}80;
  }

  &.active {
    color: ${(props) => props.theme.color.white};
    border-bottom: 3px solid ${(props) => props.theme.color.white};
  }

  @media screen and (min-width: 600px) {
    font-size: 1.25rem;
  }
`;
