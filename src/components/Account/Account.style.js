import styled from "styled-components";
import { DARK_BLUE, ORANGE, WHITE_NEUTRAL } from "../../constants/Colors";
import { Link } from "react-router-dom";

export const ContactContainer = styled.div`
  display: flex;
  margin: 30px 0;
  padding: 64px;
  height: 100%;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const AccountButtonsContainer = styled.div`
  margin: 80px auto;
  display:flex;
  flex-direction:column;
  height: auto;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  width:40%;
  border: 2px solid ${DARK_BLUE};
  border-radius: 30px;
  -webkit-box-shadow: 1px 1px 46px 2px #000000;
  box-shadow: 1px 1px 46px 2px #000000;
  @media screen and (max-width: 820px) {
    margin-top: 60px;
    width: 90%;
   
  }
`;
export const ButtonsText = styled.p`
  color: ${WHITE_NEUTRAL};
  text-align:center;
  @media screen and (max-width: 820px) {
  font-size:14px;
  }
`;

export const ButtonsAccount = styled.button`
  width: 200px;
  height: 40px;
  font-weight: 700;
  font-size: 20px;
  color: ${DARK_BLUE};
  margin: 30px auto;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: ${DARK_BLUE};
    color: ${ORANGE};
    border: solid 2px white;
  }
  &:focus {
    background: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
    border: solid 2px white;
  }
  @media screen and (max-width: 820px) {
    margin-top: 60px;
    width: 50%;
    height: 25px;
    font-size:14px;
  }
`;
export const ContactText = styled.h4`
  color: ${WHITE_NEUTRAL};
  margin:40px;
  @media screen and (max-width: 820px) {
  font-size:18px;
  }
`;

export const ContactInput = styled.input`
  width: 70%;
  height: 40px;
  margin: 5px auto;
  border-radius: 5px;
  @media screen and (max-width: 820px) {
  font-size:14px;
  }
`;

export const ContactTextarea = styled.textarea`
  width: 50%;
  height: 100px;
  margin: 10px auto;
`;

export const ContactButton = styled(Link)`
  max-width: 200px;
  width: 100%;
  height: 30px;
  margin: 25px auto;
  border-radius: 10px;
  border: 1px solid #000;
  cursor: pointer;
  color: ${WHITE_NEUTRAL};
  text-decoration: none;
  &:hover {
    background: ${DARK_BLUE};
    color: ${ORANGE};
    border: 1px solid ${WHITE_NEUTRAL};
  }
  @media screen and (max-width: 820px) {
  font-size:14px;
  }
`;

export const ErrorP = styled.p`
  color: ${ORANGE};
  width: 100%;
`;


