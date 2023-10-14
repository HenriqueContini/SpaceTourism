import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <S.homeContainer>
      <S.textWrapper>
        <S.subtitle>So, you want to travel to</S.subtitle>
        <S.title>Space</S.title>
        <S.text>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </S.text>
      </S.textWrapper>
      <S.linkWrapper>
        <Link to="/destination">
          <S.linkText>Explore</S.linkText>
        </Link>
      </S.linkWrapper>
    </S.homeContainer>
  );
};
