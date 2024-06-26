import {
  ChoiceDropdownContainer,
  LinkNavStyle,
  ChoiceDropdown,
 
} from "./Navbar.style";
import { useContext, useState } from "react";
import { ChoiceContext } from "../../Store/context";
import { ItineraryContext } from "../../Store/itinerary/context";
import Badge from "react-bootstrap/Badge";
import useLocalStorage from "../../hooks/useLocalStorage";


function NavLinks({ href, title }) {
  const { stateGlobalChoice } = useContext(ChoiceContext);
  const { stateGlobalItinerary } = useContext(ItineraryContext);

  const style={
    marginLeft:"0px",
  }

  return (
    <>
      <LinkNavStyle to={href}>{title ? title : "Link"} </LinkNavStyle>

      <LinkNavStyle to={href}>
        {title === "My Choices" ? (
          <Badge bg="success" style={style} >
            {stateGlobalChoice.choiceValue?.length > 0
              ? stateGlobalChoice.choiceValue?.length
              : 0}{" "}
          </Badge>
        ) : null}{" "}
      </LinkNavStyle>
    
    
      <LinkNavStyle to={href}>
        {title === "Itinerary" ? (
          <Badge  bg="success" style={{ marginLeft: "-10px" }} >
            {stateGlobalItinerary.itineraryValue?.length +
              stateGlobalItinerary.itineraryLandmarkValue?.length >
            0
              ? stateGlobalItinerary.itineraryValue?.length +
                stateGlobalItinerary.itineraryLandmarkValue?.length
              : 0}{" "}
          </Badge>
        ) : null}{" "}
      </LinkNavStyle>
    
    </>
  );
}

export default NavLinks;
