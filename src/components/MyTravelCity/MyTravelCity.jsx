import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
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
  FiltersTravel
} from "./MyTravel.style";

function MyTravelCity() {
  const { country, city } = useParams();
  const [clicked, setClicked] = useState(true);
  const [period, setPeriod] = useState("");
  const [buget, setBuget] = useState("");
  const [show, setShow] = useState(false);

  const url = country ? `http://localhost:3001/${country}/?city=${city}` : null;

  const { data, error, loading } = useFetchData(url, clicked, setClicked);
  const compactData = data ? data[0] : null;
  console.log(compactData);

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
  const reset = () => {
    setPeriod("Choose a period:");
    setBuget("Choose a buget:");
  };

  return (
    <>
      <PageContainerTravel>
        {loading && <div>Loading...</div>}
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
      </PageContainerTravel>
    </>
  );
}

export default MyTravelCity;
