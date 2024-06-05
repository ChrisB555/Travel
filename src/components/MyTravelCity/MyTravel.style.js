import styled from "styled-components";
import { DARK_BLUE, ORANGE, WHITE_NEUTRAL } from "../../constants/Colors";


export const PageContainerTravel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 2px solid ${WHITE_NEUTRAL};
`;


export const MainContainerTravel = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;

export const FiltersContainerTravel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  margin: 0px 40px 0 0;

 
`;

export const SelectTravel = styled.select`
  width: 65%;
  height: 35px;
  border-radius: 8px;
  margin: 60px auto;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
`;

export const ButtonPlanTravel = styled.button`
  width: 200px;
  height: 40px;
  font-weight: 700;
  font-size: 20px;
  background: ${WHITE_NEUTRAL};
  color: ${DARK_BLUE};
  margin: 50px auto;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
  }
  @media screen and (max-width: 820px) {
    margin-top: 20px;
    width: 70%;
    height: 25p;
  }
`;

export const DataContainerTravel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: none;
`;

export const TextContainerTravel = styled.p`
  margin: 50px;
  font-size: 16px;
  color: ${WHITE_NEUTRAL};
  text-align: left;
`;