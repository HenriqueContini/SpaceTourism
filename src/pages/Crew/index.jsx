import React, { useState } from "react";
import * as S from "./styles";
import data from "./data.json";
import { PersonCard } from "../../components/PersonCard";

export const Crew = () => {
  const [activePerson, setActivePerson] = useState(data[0]);

  return (
    <S.crewContainer>
      <S.title>
        <span>02</span>Meet your crew
      </S.title>

      <S.container>
        <S.personImg
          src={activePerson.image}
          placeholder={`Photo of ${activePerson.name}`}
        />
        <S.personSelector>
          {data.map((person, index) => (
            <S.personSelectorButton
              key={index}
              onClick={() => setActivePerson(data[index])}
              className={person.name === activePerson.name ? "active" : null}
            />
          ))}
        </S.personSelector>

        <PersonCard person={activePerson} />
      </S.container>
    </S.crewContainer>
  );
};
