import styled from "styled-components/macro";

export const MinimalPageContainer = styled.div``;

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
