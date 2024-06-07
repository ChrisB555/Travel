import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  DARK_BLUE,
  ORANGE,
  WHITE_NEUTRAL,
  YELLOW,
} from "../../constants/Colors";
import { TEXT_SIZE_MEDIUM, TEXT_SIZE_SMALL } from "../../constants/Dimensions";

export const Title = styled.h2`
  color: ${ORANGE};
  font-size: ${TEXT_SIZE_MEDIUM};
  margin:20px auto;
`;

export const ContainerTop = styled.div`
 
`;

export const ImageCity = styled.img`
  width: 60%;
  height: auto;
 
`;

export const ContainerDescriptionTop = styled.div`

  margin: 30px;
  color: ${ORANGE};
`;

export const Subtitle = styled.h2`
  font-size: ${TEXT_SIZE_MEDIUM};
  text-align: left;
  @media screen and (max-width: 820px) {
   font-size:18px;
   
  }
`;

export const CountrySubtitle = styled(Subtitle)`
  text-transform: capitalize;
`;

export const ContainerDescriptionBottom = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
 
`;

export const CityDescription = styled.h3`
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: ${TEXT_SIZE_SMALL};
  color: ${WHITE_NEUTRAL};
  text-align: justify;
  @media screen and (max-width: 820px) {
    margin-top: 40px;
    width: 80%;
   
  }
`;

export const SectionCityData = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 0 50px 0;
`;

export const SectionCityButtons = styled.section`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  @media screen and (max-width: 820px) {
    margin-top: 40px;
    width: 90%;
    flex-direction:column;
   
  }
`;

export const ButtonCity = styled(Link)`
  background: ${WHITE_NEUTRAL};
  color: ${DARK_BLUE};
  width: 300px;
  padding: 6px 12px;
  margin: 2px auto;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
   
  }
  @media screen and (max-width: 820px) {
    margin: 20px auto;
    width: 90%;
    height: 35px;
  }
`;

export const SectionLandmarkData = styled.section`
  /* display: grid; */
  display: flex;
  margin: 10px 0;
`;