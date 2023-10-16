import styled from "styled-components";

export const card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
  padding: 10px;
  max-width: 600px;

  @media screen and (min-width: 600px) {
    font-size: 17px;
  }
`;

export const cardTitle = styled.h2`
  font-size: 3em;
  text-align: center;
  font-family: ${(props) => props.theme.font.title};
  color: ${(props) => props.theme.color.white};
  text-transform: uppercase;
`;

export const cardDescription = styled.p`
  font-size: 1em;
  text-align: center;
  font-family: ${(props) => props.theme.font.text};
  color: ${(props) => props.theme.color.main};
  line-height: 25px;
`;

export const divider = styled.hr`
  border-top: 1px solid #383b4b;
  width: 100%;
  margin: 24px 0;
`;

export const cardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 36px;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const cardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

export const cardInfoTitle = styled.p`
  font-size: 0.85em;
  text-align: center;
  font-family: ${(props) => props.theme.font.subtitle};
  color: ${(props) => props.theme.color.main};
  text-transform: uppercase;
  letter-spacing: 2.36px;
`;

export const cardInfoText = styled.p`
  font-size: 1.75em;
  text-align: center;
  font-family: ${(props) => props.theme.font.title};
  color: ${(props) => props.theme.color.white};
  text-transform: uppercase;
`;
