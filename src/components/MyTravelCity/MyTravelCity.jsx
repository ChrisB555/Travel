import { useState, useContext } from "react";
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
import { addChoice } from "../../Store/actions";
import Spinner from "react-bootstrap/Spinner";
import useToast from "../../Store/user/useToast";

function MyTravelCity() {
  const { country, city, id } = useParams();
  const [clicked, setClicked] = useState(true);
  const [period, setPeriod] = useState("");
  const [buget, setBuget] = useState("");
  const [show, setShow] = useState(false);

  const url = country ? `http://localhost:3001/${country}/?city=${city}` : null;

  const { data, error, loading } = useFetchData(url, clicked, setClicked);
  const compactData = data ? data[0] : null;

  const optionPeriod = ["three days", "five days", "seven days"];
  const optionBuget = ["Low buget", "Medium buget", "High buget"];

  const { localData } = useLocalStorage("user");

  const { users: user } = useFetchUsers("/" + localData);

  const [unique, setUnique] = useState(true);
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  const [onAdd, setOnAdd] = useState(false);


  const onOptionChangePeriod = (e) => {
    setPeriod(e.target.value);
    setClicked(true);
  };

  const onOptionChangeBuget = (e) => {
    setBuget(e.target.value);
    setClicked(true);
  };

  const { stateGlobalChoice, dispatchChoice } = useContext(ChoiceContext);

  const handleUpdateChoice = (updateDataChoice) => {
  
    fetch(`http://localhost:3001/users/${localData}`)
      .then((response) => response.json())
      .then((userData) => {
      
        const updatedChoices = userData.choices
          ? [...userData.choices, updateDataChoice]
          : [updateDataChoice];
     
        const updatedUserData = { ...userData, choices: updatedChoices };

        fetch(`http://localhost:3001/users/${localData}`, {
          method: "PUT",
          body: JSON.stringify(updatedUserData),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
      })
      .catch((error) => console.error("Error fetching user data:", error));
  };

  const handleAdd = (country, city, buget, period, data) => {
    const updateDataChoice = { country, city, buget, period, data };
    setOnAdd(true);

   
    const isDuplicate = stateGlobalChoice.choiceValue.some(
      (element) =>
        element.country === updateDataChoice.country &&
        element.city === updateDataChoice.city &&
        element.buget === updateDataChoice.buget &&
        element.period === updateDataChoice.period
    );
   
    if (isDuplicate) {
  
      setUnique(false);
      setShowA(true);
      clearFields();
    } else {
    
      setUnique(true);
      dispatchChoice(addChoice(updateDataChoice));
      clearFields();
      handleUpdateChoice(updateDataChoice);
    
    }
  };
  const handleClick = () => {
    setPeriod(period);
    setBuget(buget);
    setShow(!show);
  };

  const clearFields = () => {
    setShow(!show);
    setShowA(true);
  };


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

            <FiltersContainerTravel loc="FiltersContainerTravel">
              <FiltersTravel loc="FiltersTravel">
                <SelectTravel
                  loc="SelectTravel"
                  onChange={onOptionChangePeriod}
                >
                  <option>Choose a period:</option>
                  {optionPeriod.map((option, index) => {
                    return <option key={index}>{option}</option>;
                  })}
                </SelectTravel>

                <SelectTravel loc="SelectTravel" onChange={onOptionChangeBuget}>
                  <option>Choose a buget:</option>
                  {optionBuget.map((option, index) => {
                    return <option key={index}>{option}</option>;
                  })}
                </SelectTravel>
              </FiltersTravel>

              <FiltersTravel loc="FiltersTravel">
                {(period || buget) && (
                  <ButtonPlanTravel
                    loc="ButtonPlanTravel"
                    onClick={handleClick}
                  >
                    {!show ? "Search" : "Return"}
                  </ButtonPlanTravel>
                )}
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
        {data && (!data[0].buget || !data[0].period) && (
          <div>No data available for your selection!</div>
        )}
        {show ? (
          <ButtonChoice
            loc="ButtonChoice"
           
            onClick={() => {
              handleAdd(country, city, buget, period, data);
            }}
          >
            Save my Choice
          </ButtonChoice>
        ) : null}
         {!unique &&
                useToast(
                  "My Choices:",
                  `${city}, ${buget}, ${period} is already in My Choices!`,
                  "",
                  showA,
                  toggleShowA
                )}
              {unique &&
                onAdd &&
                useToast(
                  "My Choices:",
                  `Succes ! ${city}, ${buget}, ${period} was added to My Choices!`,
                  "",
                  showA,
                  toggleShowA
                )}
      </PageContainerTravel>
    </>
  );
}

export default MyTravelCity;
