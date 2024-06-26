import styled from "styled-components";
import { DARK_BLUE, ORANGE, WHITE_NEUTRAL } from "../../constants/Colors";
import { Link } from "react-router-dom";

export const ContactContainer = styled.div`
  display: flex;
 width:60%;
  margin: 100px auto;
  padding: 64px;
  height: 100%;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: column;
  border: 2px solid ${DARK_BLUE};
  border-radius: 30px;
  -webkit-box-shadow: 1px 1px 46px 2px #000000;
  box-shadow: 1px 1px 46px 2px #000000;
`;

export const ContactText = styled.h4`
  color: ${WHITE_NEUTRAL};
`;

export const ContactLabel = styled.p`
  font-size: large;
  width: 80%;
  margin: 12px auto;
  color: ${WHITE_NEUTRAL};
  text-align: left;
`;
export const ContactInput = styled.input`
  width: 80%;
  height: 40px;
  margin: 5px auto;
  border-radius: 5px;
`;

export const ContactTextarea = styled.textarea`
  width: 80%;
  height: 100px;
  margin: 10px auto;
`;

export const ContactButton = styled.button`
  max-width: 200px;
  width: 100%;
  height: 30px;
  margin: 12px auto;
  border-radius: 10px;
  border: 1px solid #000;
  cursor: pointer;
  color: ${DARK_BLUE};
  text-decoration: none;
  &:hover {
    background: ${DARK_BLUE};
    color: ${ORANGE};
    border: 1px solid ${WHITE_NEUTRAL};
  }
`;

export const ErrorP = styled.p`
  color: ${ORANGE};
  width: 100%;
`;
