import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchUsers from "../../hooks/useFetchUsers";
import useLocalStorage from "../../hooks/useLocalStorage";
import { ChoiceContext } from "../../Store/context";
import {
  ButtonPlanTravel,
  MainContainerChoice,
} from "../MyTravelCity/MyTravel.style";
import { removeChoice } from "../../Store/actions";
import MyChoicesBox from "./MyChoicesBox";

function MyChoices() {
  const { id } = useParams();

  const { stateGlobalChoice, dispatchChoice } = useContext(ChoiceContext);


  const handleDelete = (index) => {
    dispatchChoice(removeChoice(index));
  };

  console.log(stateGlobalChoice.choiceValue );

  const { users: user, error, loading } = useFetchUsers("/" + id);
  const { isLocalDataEmpty, localData, handleLocalData, resetLocalData } =
  useLocalStorage("users");
  console.log(user);

 

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
            handleDelete={() => handleDelete(index)}
          />          
        ))}
      </MainContainerChoice>
    </>
  );
}

export default MyChoices;
