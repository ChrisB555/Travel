import styled from "styled-components";
import { DARK_BLUE, ORANGE, WHITE_NEUTRAL } from "../../constants/Colors";


export const MainContainerRecommend = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
`;

export const DataContainerRecommend = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid ${WHITE_NEUTRAL};
`;

export const TextContainerRecommend = styled.p`
  margin: 20px 0;
  font-size: 20px;
  color: ${WHITE_NEUTRAL};
  text-align: left;
`;

export const TextRecommend = styled.p`
  margin: 20px ;
  font-size: 22px;
  color: ${ORANGE};
  text-align: left;
`;