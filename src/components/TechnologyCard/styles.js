import styled from "styled-components";

export const card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 16px;

  @media screen and (min-width: 600px) {
    font-size: 18px;
  }
`;

export const title = styled.h2`
  font-size: 1em;
  color: ${(props) => props.theme.color.main};
  font-family: ${(props) => props.theme.font.subtitle};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2.36px;

  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

export const name = styled.h3`
  font-size: 1.75em;
  color: ${(props) => props.theme.color.white};
  font-family: ${(props) => props.theme.font.title};
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

export const description = styled.p`
  font-size: 1em;
  color: ${(props) => props.theme.color.main};
  font-family: ${(props) => props.theme.font.text};
  text-align: center;
  line-height: 25px;

  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;
