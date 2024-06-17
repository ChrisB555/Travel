import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ChoiceContext } from "../../Store/context";
import { removeChoice } from "../../Store/actions";
import { MainContainerChoice } from "../MyTravelCity/MyTravel.style";
import { ButtonInfo, InfoSection, InfoUser } from "../Explore/Explore.style";
import MyChoicesBox from "./MyChoicesBox";

function MyChoices() {
  const { id } = useParams();
  const { stateGlobalChoice } = useContext(ChoiceContext);

  console.log("stateGlobalChoice.choiceValue", stateGlobalChoice);
  console.log("id", id);
  return (
    <>
      {id === undefined && (
        <InfoSection loc="InfoSection">
          <InfoUser>
            Please create an account first and then select "Help Me Plan" from
            Home screen!
          </InfoUser>
          <ButtonInfo loc="ButtonInfo" to={`/account`}>
            Take me to Account screen!
          </ButtonInfo>
        </InfoSection>
      )}

      <MainContainerChoice>
        {stateGlobalChoice.choiceValue.map((e, index) => (
          <MyChoicesBox
            key={index}
            index={index}
            id={id}
            country={e.country}
            city={e.city}
            region={e.region}
            period={e.period}
            buget={e.buget}
            data={e.data}
          />
        ))}
      </MainContainerChoice>
    </>
  );
}

export default MyChoices;
