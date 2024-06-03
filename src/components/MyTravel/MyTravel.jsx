import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import {
  Select,
  FiltersContainer,
  ButtonPlan,Text
} from "../MainHome/CitiesRegions/CitiesRegions.style";

function MyTravel({description}) {
  const { country, city } = useParams();
  const [clicked, setClicked] = useState(true);
  const [period, setPeriod] = useState("");
  const [buget, setBuget] = useState("");

  const url = country
    ? `http://localhost:3001/${country}/?city=${city}`: null;

  const { data, error, loading } = useFetchData(url, clicked, setClicked);

  console.log("mytravel", data, city, country);

  const optionPeriod = ["3 days", "5 days", "7 days"];
  const optionBuget = ["Low buget", "Medium buget", "High buget"];

  const onOptionChangePeriod = (e) => {
    setPeriod(e.target.value);
    setClicked(true);
  };

  const onOptionChangeBuget = (e) => {
    setBuget(e.target.value);
    setClicked(true);
  };

  return (
   
    <>
     {loading && <div>Loading...</div>}
     {error && <div>Error: {error.message}</div>}
    <Text>Description:{description}</Text>
      <FiltersContainer>
        <Select onChange={onOptionChangePeriod}>
          <option>Choose a period:</option>
          {optionPeriod.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </Select>

        <Select onChange={onOptionChangeBuget}>
          <option>Choose a buget:</option>
          {optionBuget.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </Select>
        <ButtonPlan
              type="submit"
            
            >
              Search
            </ButtonPlan>
      </FiltersContainer>
      
    </>
  );
}

export default MyTravel;
