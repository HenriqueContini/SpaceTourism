import React from "react";
import * as S from "./styles";

export const TechnologyCard = ({ technology }) => {
  return (
    <S.card>
      <S.title>The terminology…</S.title>
      <S.name>{technology.name}</S.name>
      <S.description>{technology.description}</S.description>
    </S.card>
  );
};
