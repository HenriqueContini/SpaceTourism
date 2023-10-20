import { useState } from "react";
import * as S from "./styles";
import { DestinationCard } from "../../components/DestinationCard";
import data from "./data.json";

export const Destination = () => {
  const [activePlanet, setActivePlanet] = useState(data[0]);

  return (
    <S.destinationContainer>
      <S.title>
        <span>01</span>Pick your destination
      </S.title>

      <S.container>
        <S.planetImg
          src={activePlanet.image}
          placeholder={`Photo of ${activePlanet.name}`}
        />

        <S.wrapper>
          <S.planetSelector>
            {data.map((planet, index) => (
              <S.planetSelectorButton
                className={planet.name === activePlanet.name ? "active" : null}
                onClick={() => setActivePlanet(data[index])}
                type="button"
                key={index}
              >
                {planet.name}
              </S.planetSelectorButton>
            ))}
          </S.planetSelector>

          <DestinationCard planet={activePlanet} />
        </S.wrapper>
      </S.container>
    </S.destinationContainer>
  );
};
