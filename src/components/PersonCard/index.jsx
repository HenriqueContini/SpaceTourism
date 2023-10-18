import React from "react";
import * as S from "./styles";

export const PersonCard = ({ person }) => {
  return (
    <S.card>
      <S.role>{person.role}</S.role>
      <S.name>{person.name}</S.name>
      <S.bio>{person.bio}</S.bio>
    </S.card>
  );
};
