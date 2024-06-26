import styled from "styled-components";
import {  DARK_BLUE, ORANGE, WHITE_NEUTRAL } from "../../constants/Colors";


export const MainContainerRecommend = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

`;

export const DataContainerRecommend = styled.div`
  display: flex;
  flex-direction: row;
  margin:10px auto;
  width:100%;
  background-color:${WHITE_NEUTRAL};
  border: 2px solid ${DARK_BLUE};
  border-radius: 30px;
  -webkit-box-shadow: 1px 1px 46px 2px #000000;
  box-shadow: 1px 1px 46px 2px #000000;
`;
export const ContainerRecommend = styled.div`
  display: flex;
  flex-direction: row;
  margin:10px auto;
  width:100%;
 

`;

export const TextContainerRecommend = styled.p`
  margin: 20px 0;
  padding:10px;
  font-size: 20px;
  color: ${DARK_BLUE};
  text-align: left;
  @media screen and (max-width: 820px) {
    text-align:left;
    margin: 0;
    font-size:16px;
  }
`;

export const TextRecommend = styled.p`
  margin: 20px 0;
  font-size: 22px;
  color: ${ORANGE};
  text-align: left;
  padding:10px;
  @media screen and (max-width: 820px) {
    text-align:left;
    margin: 0;
    font-size:18px;
  }
`;