import { useState } from "react";
import { useParams } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import useFetchData from "../../hooks/useFetchData";
import useFetchUsers from "../../hooks/useFetchUsers";
import MyTravelRecommend from "../MyTravelRecommend/MyTravelRecommend";
import {
  Text,
  DataContainer,
} from "../MainHome/CitiesRegions/CitiesRegions.style";
import {
  PageContainerTravel,
  MainContainerTravel,
  FiltersContainerTravel,
  SelectTravel,
  ButtonPlanTravel,
  TextContainerTravel,
  ImgContainerTravel,
  FiltersTravel,
  ButtonChoice,
} from "./MyTravel.style";
import { ChoiceContext } from "../../Store/context";
import { useContext } from "react";
import { addChoice } from "../../Store/actions";
import Spinner from "react-bootstrap/Spinner";

function MyTravelCity() {
  const { country, city } = useParams();
  const { id } = useParams();
  const [clicked, setClicked] = useState(true);
  const [period, setPeriod] = useState("");
  const [buget, setBuget] = useState("");
  const [show, setShow] = useState(false);

  const url = country ? `http://localhost:3001/${country}/?city=${city}` : null;

  const { data, error, loading } = useFetchData(url, clicked, setClicked);
  const compactData = data ? data[0] : null;

  const optionPeriod = ["three days", "five days", "seven days"];
  const optionBuget = ["Low buget", "Medium buget", "High buget"];

  const onOptionChangePeriod = (e) => {
    setPeriod(e.target.value);
    setClicked(true);
  };

  const onOptionChangeBuget = (e) => {
    setBuget(e.target.value);
    setClicked(true);
  };

  const handleClick = () => {
    setPeriod(period);
    setBuget(buget);
    setShow(!show);
  };
  const { users: user } = useFetchUsers("/" + id);
  console.log("user",user);

  const handleUpdateChoice = () => {
    console.log("Text", stateGlobalChoice.choiceValue);
    fetch(`http://localhost:3001/users`, {
      method: "PUT",
      body: JSON.stringify(stateGlobalChoice),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const { stateGlobalChoice, dispatchChoice } = useContext(ChoiceContext);
 
  const handleAdd = (country, city, buget, period, data) => {
    const updateDataChoice = {country, city, buget, period, data}
    dispatchChoice(addChoice(updateDataChoice));
    handleUpdateChoice(updateDataChoice);
  };

 
  // const handleSubmit = async () => {
  //   console.log(inputObj);
  //   const add = await fetch(`http://localhost:3001/users`, {
  //     method: "POST",
  //     body: JSON.stringify(inputObj),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const response = await add.json();
  //   return response[0].id;
  // };

  //const { handleLocalData, resetLocalData, isLocalDataEmpty, localData } =
   // useLocalStorage("choices");

  // console.log("local",stateGlobalChoice);

  // const globalLocalStorage = stateGlobalChoice.choiceValue;

  // const addNewChoice = () => {
    
  //   const existingData = !isLocalDataEmpty ? localData : [];
  //   const updatedData = [...existingData, ...globalLocalStorage];
  //   handleLocalData("choices", updatedData);
    
  // };

  return (
    <>
      <PageContainerTravel>
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {error && <div>Error: {error.message}</div>}
        {data && (
          <>
            <MainContainerTravel>
              <Text>City: {compactData.city}</Text>
              <DataContainer>
                <ImgContainerTravel src={compactData.image} />
                <TextContainerTravel>
                  {compactData.description}
                </TextContainerTravel>
              </DataContainer>
            </MainContainerTravel>

            <FiltersContainerTravel>
              <FiltersTravel>
                <SelectTravel onChange={onOptionChangePeriod}>
                  <option>Choose a period:</option>
                  {optionPeriod.map((option, index) => {
                    return <option key={index}>{option}</option>;
                  })}
                </SelectTravel>

                <SelectTravel onChange={onOptionChangeBuget}>
                  <option>Choose a buget:</option>
                  {optionBuget.map((option, index) => {
                    return <option key={index}>{option}</option>;
                  })}
                </SelectTravel>
              </FiltersTravel>

              <FiltersTravel>
                <ButtonPlanTravel onClick={handleClick}>
                  {show ? "Return" : "Search"}
                </ButtonPlanTravel>
              </FiltersTravel>
              {show ? (
                <MyTravelRecommend
                  bugetTravel={buget}
                  periodTravel={period}
                  data={data}
                />
              ) : null}
            </FiltersContainerTravel>
          </>
        )}
        {show ? (
          <ButtonChoice
            to={`/my-choices/${id}`}
            onClick={() => {
              handleAdd(country, city, buget, period, data);
              /*  addNewChoice();*/
         
            }}
          >
            Save my Choice
          </ButtonChoice>
        ) : null}
      </PageContainerTravel>
    </>
  );
}

export default MyTravelCity;
