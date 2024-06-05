import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import {
  SelectTravel,
  FiltersContainerTravel,
  ButtonPlanTravel
} from "../MyTravelCity/MyTravel.style";

function MyTravelRegion() {
  const { country, region } = useParams();
  const [clicked, setClicked] = useState(true);
  const [period, setPeriod] = useState("");
  const [buget, setBuget] = useState("");

  const url = country
    ? `http://localhost:3001/${country}/?region=${region}`: null;

  const { data, error, loading } = useFetchData(url, clicked, setClicked);

  console.log("mytravel", data, region, country);

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
  
      <FiltersContainerTravel>
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
        <ButtonPlanTravel
            
            
            >
              Search
            </ButtonPlanTravel>
      </FiltersContainerTravel>
      
    </>
  );
}

export default MyTravelRegion;
