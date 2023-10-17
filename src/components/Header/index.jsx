import React, { useState } from "react";
import * as S from "./styles";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import openIcon from "../../assets/icon-hamburger.svg";
import closeIcon from "../../assets/icon-close.svg";

const linksArr = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/destination",
    name: "Destination",
  },
  {
    url: "/crew",
    name: "Crew",
  },
  {
    url: "/technology",
    name: "Technology",
  },
];

export const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <S.headerContainer>
      <div>
        <Link to="/">
          <S.logoImg src={logo} alt="Space Tourism Logo" />
        </Link>
      </div>
      <div>
        <S.toggleButton onClick={toggleNav}>
          <img src={openIcon} alt="Open menu" />
        </S.toggleButton>
        <S.nav $opened={openNav}>
          <S.toggleButton onClick={toggleNav}>
            <img src={closeIcon} alt="Open menu" />
          </S.toggleButton>
          {linksArr.map((item, index) => (
            <NavLink to={item.url} key={index} onClick={toggleNav}>
              <S.textLink>
                <S.spanTextLink>0{index}</S.spanTextLink>
                {item.name}
              </S.textLink>
            </NavLink>
          ))}
        </S.nav>
      </div>
    </S.headerContainer>
  );
};
