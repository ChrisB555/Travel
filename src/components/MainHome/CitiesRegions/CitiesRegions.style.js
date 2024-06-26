import styled from "styled-components";
import { DARK_BLUE, ORANGE, WHITE_NEUTRAL } from "../../../constants/Colors";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
 
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 400px;
  height:300px;
  margin: 0px ;
  border: 2px solid ${WHITE_NEUTRAL};
 border-radius:30px;
  -webkit-box-shadow: 5px 5px 15px 12px rgba(0,0,0,0.5); 
  box-shadow: 5px 5px 15px 12px rgba(0,0,0,0.5); 
 background-image:url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq3lZW-Rr2Q_aryeKcaEszDPw7E97SBKxUVw&s");
 object-fit: cover;
 background-repeat: no-repeat;
 background-size: 100% 100%;
  ${(props) =>
    props.isCity !== null && `opacity: ${props.isCity ? "1" : "0.5"};`};
     @media screen and (max-width: 820px) {
    text-align:center;
    width:80%;
    height:auto;
    margin:20px auto;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
 
`;

export const Text = styled.h4`
  margin: 20px auto;
  color: ${ORANGE};
  text-align:left;
  @media screen and (max-width: 820px) {
    text-align:center;
    margin:20px auto;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: none;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const ImgContainer = styled.img`
  width: 250px;
  height: 250px;
  border-radius:50%;
  border: 4px solid ${WHITE_NEUTRAL};
  @media screen and (max-width: 820px) {
   margin:10px auto;
   width:150px;
   height:150px;
  }
`;
export const TextContainer = styled.p`
  margin: 50px;
  font-size: 16px;
  color: ${WHITE_NEUTRAL};
  text-align: left;
  @media screen and (max-width: 820px) {
    text-align:center;
    margin:20px auto;
    border: 2px solid ${WHITE_NEUTRAL};
    padding:10px;
  }
`;

export const ButtonPlan = styled(Link)`
  width: 200px;
  height: 50px;
  font-weight: 700;
  font-size: 20px;
  background: ${WHITE_NEUTRAL};
  color: ${DARK_BLUE};
  margin: 50px auto;
  cursor: pointer;
  &:hover {
    background: ${DARK_BLUE};
    color: ${ORANGE};
    border: solid 2px white;
  }
  @media screen and (max-width: 820px) {
    margin-top: 20px;
    width: 70%;
    height: 25px;
  }
`;


export const SelectCity = styled.select`
  width: 75%;
  height: 40px;
  margin: 70px auto;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  transition: 0.3s ease;
  &:focus {
    background: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
  }
`;

export const SelectRegion = styled.select`
  width: 75%;
  height: 40px;
  margin: 70px auto;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  &:focus {
    background: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
  }
`;
