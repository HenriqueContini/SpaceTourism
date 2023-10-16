import * as S from "./styles";

export const DestinationCard = ({ planet }) => {
  return (
    <S.card>
      <S.cardTitle>{planet.name}</S.cardTitle>
      <S.cardDescription>{planet.description}</S.cardDescription>
      <S.divider />

      <S.cardInfoWrapper>
        <S.cardInfo>
          <S.cardInfoTitle>Avg. distance</S.cardInfoTitle>
          <S.cardInfoText>{planet.distance}</S.cardInfoText>
        </S.cardInfo>

        <S.cardInfo>
          <S.cardInfoTitle>Est. travel time</S.cardInfoTitle>
          <S.cardInfoText>{planet.travel}</S.cardInfoText>
        </S.cardInfo>
      </S.cardInfoWrapper>
    </S.card>
  );
};
