import styled from "styled-components";
import {
  DARK_BLUE,
  MIDDLE_BLUE,
  ORANGE,
  WHITE_NEUTRAL,
} from "../../constants/Colors";
import { Link } from "react-router-dom";

export const PageContainerTravel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  margin-top: 50px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const MainContainerTravel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const MainContainerChoice = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const FiltersContainerTravel = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  margin: 40px auto;
  border: 2px solid ${WHITE_NEUTRAL};
  -webkit-box-shadow: 1px 1px 46px 2px #000000;
  box-shadow: 1px 1px 46px 2px #000000;
  background: rgba(6, 50, 66, 0.17);
  border-radius: 16px;

  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(6, 50, 66, 0.83);
`;
export const FiltersTravel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
  }
`;

export const SelectTravel = styled.select`
  width: 45%;
  height: 35px;
  margin: 90px auto;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  transition: 0.3s ease;
  &:focus {
    background: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
  }
  @media screen and (max-width: 820px) {
    margin-top: 30px;
    width: 70%;
    height: 35px;
  }
`;

export const ButtonPlanTravel = styled.button`
  width: 200px;
  height: 35px;
  font-weight: 700;
  font-size: 20px;
  background: ${WHITE_NEUTRAL};
  color: ${DARK_BLUE};
  margin: 30px auto;
  cursor: pointer;
  &:hover {
    background: ${DARK_BLUE};
    color: ${ORANGE};
    border: solid 2px white;
  }
  @media screen and (max-width: 820px) {
    margin-top: 20px;
    width: 50%;
    height: 30px;
    font-size: 16px;
  }
`;

export const ButtonChoice = styled(Link)`
  width: 200px;
  height: 35px;
  font-weight: 700;
  font-size: 20px;
  background: ${WHITE_NEUTRAL};
  color: ${DARK_BLUE};
  margin: 0px auto;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: ${DARK_BLUE};
    color: ${ORANGE};
    border: solid 2px white;
  }
  @media screen and (max-width: 820px) {
    margin-top: 20px;
    width: 50%;
    height: 30px;
    font-size: 16px;
  }
`;

export const DataContainerTravel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: none;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;
export const DataContainerChoice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: none;
  @media screen and (max-width: 820px) {
    margin: 0 auto;
  }
`;

export const ImgContainerTravel = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 4px solid ${WHITE_NEUTRAL};
  @media screen and (max-width: 820px) {
    margin: 10px auto;
    width: 150px;
    height: 150px;
  }
`;

export const TextContainerTravel = styled.p`
  margin: 50px 20px;
  font-size: 18px;
  color: ${WHITE_NEUTRAL};
  text-align: left;
  @media screen and (max-width: 820px) {
    text-align: center;
    margin: 0;
  }
`;

export const TextChoice = styled.p`
  margin: 10px;
  font-size: 22px;
  color: ${WHITE_NEUTRAL};
  text-align: left;

  @media screen and (max-width: 820px) {
    text-align: center;
    margin: 0 10px;
    font-size: 16px;
  }
`;

export const TextOrangeChoice = styled.p`
  margin: 10px;
  font-size: 22px;
  color: ${ORANGE};
  text-align: left;

  @media screen and (max-width: 820px) {
    text-align: left;
    margin: 0;
    font-size: 18px;
  }
`;
