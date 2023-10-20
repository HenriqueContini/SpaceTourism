import React, { useEffect, useState } from "react";
import * as S from "./styles";
import data from "./data.json";
import { TechnologyCard } from "../../components/TechnologyCard";

export const Technology = () => {
  const [activeTechnology, setActiveTechnology] = useState(data[0]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
    console.log(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  return (
    <S.technologyContainer>
      <S.title>
        <span>03</span>Space lauch 101
      </S.title>

      <S.container>
        <S.technologyImg
          src={
            windowWidth >= 1024
              ? activeTechnology.images.portrait
              : activeTechnology.images.landscape
          }
        />

        <S.wrapper>
          <S.technologySelector>
            {data.map((item, index) => (
              <S.technologySelectorButton
                key={index}
                className={
                  item.name === activeTechnology.name ? "active" : null
                }
                onClick={() => setActiveTechnology(data[index])}
              >
                {index + 1}
              </S.technologySelectorButton>
            ))}
          </S.technologySelector>

          <TechnologyCard technology={activeTechnology} />
        </S.wrapper>
      </S.container>
    </S.technologyContainer>
  );
};
