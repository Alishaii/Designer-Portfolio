import styled from "styled-components/macro";

export const MinimalPageContainer = styled.div`
  padding-bottom: 130px;
`;

export const LocationAndDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4% 0 4%;
`;

export const PgeLocation = styled.p`
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 120%;
  color: #888888;

  span {
    color: #ffffff;
  }
`;

export const Date = styled.div`
  margin-left: auto;
  color: white;
`;

export const Description = styled.p`
  flex: 1 1 0;

  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 120%;
  color: #ffffff;
`;

export const FirstSection = styled.section`
  display: flex;
  gap: 160px;
  padding: 0 4% 0 4%;
`;

export const ImageContainer = styled.div`
  flex: 2.3 1 0;
`;

export const Image = styled.img``;

export const ImageWithPadding = styled.img`
  padding-left: 20%;
  padding-right: 20%;
`;

export const SecondSection = styled.div`
  display: flex;
`;

export const ThirdSection = styled.div`
  display: flex;
  gap: 80px;
  padding: 0 4% 0 4%;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 60px;
`;

export const HelveticaText = styled.p`
  padding-left: 23%;
  padding-right: 23%;

  color: #ffffff;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  text-transform: uppercase;
`;

export const SectionFour = styled.div`
  margin-right: 20%;
  display: flex;
  gap: 195px;
`;

export const SectionFourFirstImage = styled.div``;

export const SectionFourSecondImage = styled.div``;

export const SectionFive = styled.div`
  display: flex;
`;

export const SectionFiveFirstImage = styled.div`
  flex: 1 1 0;
`;

export const SectionFiveSecondImage = styled.div`
  flex: 1.4 1 0;
`;

export const SectionSix = styled.div`
  position: relative;
`;

export const SectionSixFirstImage = styled.img`
  padding-left: 20%;
`;

export const SectionSixSecondImage = styled.img`
  position: absolute;
  width: 40%;
  height: 564;
  left: 63px;
  bottom: -125px;
`;

export const SectionSeven = styled.div`
  display: flex;
  align-items: center;
`;

export const SectionSevenFirstImage = styled.div``;

export const SectionSevenSecondImage = styled.div`
  position: absolute;
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto;
  font-family: Helvetica;
  color: #ffffff;

  padding: 0 4% 0 4%;

  p:nth-child(4) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const FooterToken = styled.p`
  font-family: "Helvetica";
  font-style: italic;
  font-weight: 300;
  font-size: 18px;
  line-height: 110%;
`;

export const FooterPrimaryText = styled.p`
  font-style: normal;
  font-size: 18px;
  font-weight: 400;
  line-height: 110%;
`;
