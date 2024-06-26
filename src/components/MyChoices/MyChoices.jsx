import { useContext,useState } from "react";
import { removeChoice } from "../../Store/actions";
import { ChoiceContext } from "../../Store/context";
import { ButtonInfo, InfoSection, InfoUser } from "../Explore/Explore.style";
import { MainContainerChoice } from "../MyTravelCity/MyTravel.style";
import MyChoicesBox from "./MyChoicesBox";
import useLocalStorage from "../../hooks/useLocalStorage";


function MyChoices() {
  const { stateGlobalChoice, dispatchChoice } = useContext(ChoiceContext);

  const { localData } = useLocalStorage("user");
  
  
  const handleDelete = (index) => {
    dispatchChoice(removeChoice(index));
  };


  return (
    <>
    
      {localData === undefined && (
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
      <MainContainerChoice loc="MainContainerChoice">
        {stateGlobalChoice.choiceValue.map((e, index) => (
          <MyChoicesBox
            id={localData}
            key={index}
            index={index}
            country={e.country}
            city={e.city}
            region={e.region}
            period={e.period}
            buget={e.buget}
            data={e.data}
            handleDelete={() => handleDelete(index)}
          
          />
        ))}
      </MainContainerChoice>
    </>
  );
}

export default MyChoices;
