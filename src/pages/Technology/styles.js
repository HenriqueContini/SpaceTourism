import styled from "styled-components";
import background from "./bg/background-technology.jpg";

export const technologyContainer = styled.main`
  padding: 50px 0 36px 0;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 90px);

  @media screen and (min-width: 1024px) {
    padding: 80px 0 80px 80px;
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
    margin-left: 36px;
    font-size: 1.5rem;
    text-align: left;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 0;
  }
`;

export const container = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  @media screen and (min-width: 600px) {
    padding: 50px 0;
    gap: 65px;
  }

  @media screen and (min-width: 1024px) {
    flex: 1;
    margin-top: 0;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }
`;

export const technologyImg = styled.img`
  width: 100%;
  max-width: 700px;

  @media screen and (min-width: 1024px) {
    max-width: 500px;
  }
`;

export const wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-inline: 36px;

  @media screen and (min-width: 1024px) {
    max-width: 500px;
    flex-direction: row;
    gap: 40px;
  }

  @media screen and (min-width: 1300px) {
    max-width: 650px;
    gap: 80px;
  }
`;

export const technologySelector = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 1024px) {
    flex-direction: column;
  }
`;

export const technologySelectorButton = styled.button`
  width: 45px;
  height: 45px;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid #777785;
  color: ${(props) => props.theme.color.white};
  font-family: ${(props) => props.theme.font.title};
  font-size: 1.15rem;
  cursor: pointer;
  font-weight: bold;

  transition: 300ms linear;

  &:hover {
    border-color: ${(props) => props.theme.color.white};
  }

  &.active {
    border-color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.background};
  }

  @media screen and (min-width: 600px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 1024px) {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }
`;
