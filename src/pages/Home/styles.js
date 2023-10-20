import styled from "styled-components";
import background from "./bg/earth.jpg";

export const homeContainer = styled.main`
  padding: 100px 24px 24px 24px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 90px);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const textWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 400px;
`;

export const subtitle = styled.p`
  font-family: ${(props) => props.theme.font.subtitle};
  color: ${(props) => props.theme.color.main};
  text-transform: uppercase;
  letter-spacing: 2.7px;
  font-size: 1.25rem;
  text-align: center;
`;

export const title = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.white};
  font-family: ${(props) => props.theme.font.title};
  text-align: center;
`;

export const text = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.color.main};
  font-family: ${(props) => props.theme.font.text};
  line-height: 25px;
  text-align: center;
`;

export const linkWrapper = styled.div`
  display: flex;
  justify-content: center;

  & > a {
    display: flex;
    background-color: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.background};
    width: 180px;
    height: 180px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-width: 25px;
    border-style: solid;
    border-color: ${(props) => props.theme.color.white};

    transition: 200ms;
  }

  & > a:hover {
    border-color: #363847;
    transition: 200ms linear;
  }

  @media screen and (min-width: 1024px) {
    & > a {
      width: 230px;
      height: 230px;
    }

    & > a:hover {
      border-width: 40px;
      border-color: #363847;
    }
  }
`;

export const linkText = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.color.background};
  text-align: center;
  text-transform: uppercase;
`;
