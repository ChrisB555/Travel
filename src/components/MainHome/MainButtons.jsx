import { useState, useRef } from "react";
import { Buttons, ButtonsContainer } from "./MainHome.style";
import SelectOptionPlan from "./SelectOptionPlan";
import SelectOptionExplore from "./SelectOptionExplore";

function MainButtons() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);

  const handleClickExplore = () => {
    setIsVisible1(!isVisible1);
    setIsVisible2(false);
    !isVisible1 ? buttonRef1.current.focus() : buttonRef1.current.blur();
  };
  const handleClickPlan = () => {
    setIsVisible2(!isVisible2);
    setIsVisible1(false);
    !isVisible2 ? buttonRef2.current.focus() : buttonRef2.current.blur();
  };

  return (
    <>
      <ButtonsContainer>
        <Buttons onClick={() => handleClickExplore()} ref={buttonRef1}>
          I Want To Explore
        </Buttons>
        <Buttons onClick={() => handleClickPlan()} ref={buttonRef2}>
          Help me Plan
        </Buttons>
        {isVisible1 && <SelectOptionExplore />}
        {isVisible2 && <SelectOptionPlan />}
      </ButtonsContainer>
    </>
  );
}

export default MainButtons;
