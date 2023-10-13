import styled from "styled-components";

export const headerContainer = styled.header`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0b0f1a;

  @media screen and (min-width: 600px) {
    padding-inline: 34px;
  }
`;

export const logoImg = styled.img`
  max-width: 40px;
`;

export const toggleButton = styled.div`
  max-width: 24px;
  justify-self: right;
  align-self: flex-end;
  cursor: pointer;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const nav = styled.nav`
  /* Absolute Nav */
  position: fixed;
  top: 0;
  right: ${({ $opened }) => ($opened ? "0" : "-400px")};
  height: 100%;
  width: 250px;
  backdrop-filter: blur(40px);
  /* End */

  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 24px 32px 32px;
  transition: right 300ms linear;

  a {
    text-decoration: none;
    border-bottom: 3px solid transparent;
  }

  a.active {
    border-bottom-color: ${(props) => props.theme.white};
  }

  a:hover {
    border-bottom-color: ${(props) => props.theme.white}80;
  }

  @media screen and (min-width: 600px) {
    position: relative;
    flex-direction: row;
    height: auto;
    width: auto;
    right: 0;
    padding: 0;
  }
`;

export const textLink = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  color: ${(props) => props.theme.main};
  text-transform: uppercase;
  font-size: 1.25rem;
  letter-spacing: 2.7px;
  padding: 5px 0;

  @media screen and (min-width: 600px) {
    font-size: 1rem;
  }
`;

export const spanTextLink = styled.span`
  font-weight: 700;
  margin-right: 12px;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;
