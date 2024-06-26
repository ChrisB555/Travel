import { Link } from "react-router-dom";
import styled from "styled-components";
import { DARK_BLUE, ORANGE, WHITE_NEUTRAL,YELLOW,RED } from "../../constants/Colors";

export const MainContainer = styled.div`
  display: grid;
  height: 450px;
  grid-template-columns: 0fr 0fr 0fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1px;
  margin: 10px auto;

  @media screen and (max-width: 820px) {
    grid-gap: 1px;
    height: 100px;
  }
`;

export const MainHomeGalleryItem = styled.img`
  width: 220px;
  height: auto;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 820px) {
    width: 70px;
  }
`;

export const ButtonsContainer = styled.div`
  margin: 30px auto;
  position: relative;
`;

export const Buttons = styled.button`
  width: 200px;
  height: 40px;
  font-weight: 700;
  font-size: 20px;
  color: ${DARK_BLUE};
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    background: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
  }
  &:focus {
    background: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
  }
  @media screen and (max-width: 820px) {
    margin-top: 60px;
    width: 70%;
    height: 35px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  position: absolute;
  margin: 30px auto;

`;
export const Select = styled.select`
  width: 200px;
  height: 35px;
  border-radius: 8px;
  margin: 30px auto;
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
    margin-top: 20px;
    width: 90%;
    height: 35px;
  }
`;
export const SelectPlan = styled.select`
  width: 300px;
  height: 35px;
  margin: 10px;
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
    margin-top: 20px;
    width: 90%;
    height: 35px;
  }
`;

export const Option = styled.option`
  font-weight: 700;
  font-size: 20px;
`;

export const HomeBtn = styled(Link)`
  width: 300px;
  height: 40px;
  font-weight: 700;
  font-size: 20px;
  color: ${ORANGE};
  margin:  40px auto;
  cursor: pointer;
 
  &:hover {
    background: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
   
  }
  @media screen and (max-width: 820px) {
    margin-top: 20px;
    width: 70%;
   height: 30px;
  }
`;

export const LabelHead = styled.label`
  color: ${WHITE_NEUTRAL};
  font-weight: 700;
  font-size: 20px;
  height: auto;
  margin: 10px 0 10px 0;
`;

export const Loading = styled.div`
  color: ${YELLOW};
  align-self: center;
`;

export const Error = styled.div`
  color: ${RED};
  align-self: center;
`;