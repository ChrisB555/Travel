import {
  ChoiceDropdownContainer,
  LinkNavStyle,
  ChoiceDropdown,
} from "./Navbar.style";
import { useContext, useState } from "react";
import { ChoiceContext } from "../../Store/context";
import Badge from "react-bootstrap/Badge";
import ChoiceDropdownMenu from "./ChoiceDropdownMenu";

function NavLinks({ href, title }) {
  const { stateGlobalChoice } = useContext(ChoiceContext);
  const [hover, setHover] = useState(false);
  const hoverData = stateGlobalChoice.choiceValue;

  const onHover = () => {
    setHover(true);
  };

  const onHoverOver = () => {
    setHover(false);
  };

  return (
    <>
      <LinkNavStyle to={href}>{title ? title : "Link"} </LinkNavStyle>

      <LinkNavStyle to={href}>
        {title === "My Choices" ? (
          <Badge bg="success" style={{ marginLeft: "-30px" }}>
            {stateGlobalChoice.choiceValue.length > 0
              ? stateGlobalChoice.choiceValue.length
              : 0}{" "}
          </Badge>
        ) : null}{" "}
      </LinkNavStyle>
{/*
      <LinkNavStyle
        onMouseEnter={() => onHover()}
        onMouseLeave={() => onHoverOver()}
      >
       
          {title === "My Choices"
            ? hover &&
              hoverData.map((e, index) => (
                <ChoiceDropdownMenu
                  key={index}
                  country={e.country}
                  city={e.city}
                  region={e.region}
                  period={e.period}
                  buget={e.buget}
                />
              ))
            : null}{" "}
     
      </LinkNavStyle>*/}
    </>
  );
}

export default NavLinks;
