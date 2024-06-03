import styled from "styled-components";
import { DARK_BLUE, ORANGE, WHITE_NEUTRAL } from "../../../constants/Colors";

export const PageContainer = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        border:2px solid ${WHITE_NEUTRAL};
`;

export const FiltersContainer = styled.div`

        display:flex;
        flex-direction:column;
        justify-content:center;
        width:90%;
        margin:50px auto;
        border:2px solid ${WHITE_NEUTRAL};
`;

export const MainContainer =  styled.div`

display:flex;
flex-direction:column;
width:90%;
margin:0 auto;

`;

export const Text = styled.h4`
    margin:20px auto;
    color:${ORANGE};

`;

export const DataContainer =  styled.div`

display:flex;
flex-direction:row;
justify-content:space-between;
border:none;
`;
export const ImgContainer = styled.img`

    width:200px;
    height:200px;

`;
export const TextContainer = styled.p`

   margin: 50px ;
   font-size:16px;
   color:${WHITE_NEUTRAL};
   text-align:left;
`;

export const ButtonPlan = styled.button`

  width: 200px;
  height: 40px;
  font-weight: 700;
  font-size: 20px;
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
    height: 25p
  } 
`;
export const Select = styled.select`
  width: 45%;
  height: 35px;
  border-radius: 8px;
  margin: 60px auto;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  
`;

export const SelectCity = styled.select`
  width: 45%;
  height: 35px;
  border-radius: 8px;
  margin: 70px auto;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  transition: 0.3s ease;
`;

export const SelectRegion = styled.select`
  width: 45%;
  height: 35px;
  border-radius: 8px;
  margin: 70px auto;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  
`;




