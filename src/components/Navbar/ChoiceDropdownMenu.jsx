import { ChoiceDropdown, ChoiceMenuContainer } from "./Navbar.style";

function ChoiceDropdownMenu({ country, city, period, region, buget }) {
  return (
    <>
      <ChoiceDropdown>
        <ChoiceMenuContainer>{country}</ChoiceMenuContainer>
        {city && <ChoiceMenuContainer>{city}</ChoiceMenuContainer>}
        {region && <ChoiceMenuContainer>{region}</ChoiceMenuContainer>}
        {period && <ChoiceMenuContainer>{period}</ChoiceMenuContainer>}
        {buget && <ChoiceMenuContainer>{buget}</ChoiceMenuContainer>}
      </ChoiceDropdown>
    </>
  );
}
export default ChoiceDropdownMenu;
