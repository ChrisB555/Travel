import { useContext } from "react";
import { ChoiceContext } from "../../Store/context";
import {
  ButtonPlanTravel,
  MainContainerChoice,
} from "../MyTravelCity/MyTravel.style";
import { removeChoice } from "../../Store/actions";
import MyChoicesBox from "./MyChoicesBox";

function MyChoices() {
  const { stateGlobalChoice, dispatchChoice } = useContext(ChoiceContext);

  const handleDelete = (country, city, buget, period,data) => {
    dispatchChoice(removeChoice(country, city, buget, period,data));
  };

  console.log(stateGlobalChoice.choiceValue );

  return (
    <>
      <MainContainerChoice>
        {stateGlobalChoice.choiceValue.map((e, index) => (
          <MyChoicesBox
            key={index}
            country={e.country}
            city={e.city}
            region={e.region}
            period={e.period}
            buget={e.buget}
            data={e.data}
            handleDelete={handleDelete}
          />          
        ))}
      </MainContainerChoice>
    </>
  );
}

export default MyChoices;
