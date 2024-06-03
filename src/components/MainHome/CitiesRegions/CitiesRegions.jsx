import { useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
import { useParams } from "react-router-dom";
import {
  PageContainer,
  FiltersContainer,
  MainContainer,
  ImgContainer,
  TextContainer,
  DataContainer,
  ButtonPlan,
  Text,
  SelectCity,
  SelectRegion,
} from "./CitiesRegions.style";

import GetOptionCities from "../GetOptionCities";

function CitiesRegions() {
  const { country } = useParams();
  const [clicked, setClicked] = useState(true);
  const [isCity, setIsCity] = useState(null);
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");

  const url = country ? `http://localhost:3001/${country}` : null;

  const { data, error, loading } = useFetchData(url, clicked, setClicked);

  const compactData = data ? data[0] : null;

  const onOptionChangeCity = (e) => {
    setCity(e.target.value);
  };

  const onOptionChangeRegion = (e) => {
    setRegion(e.target.value);
  };
  const changeCityRegion = (city) => {
    if (city === "city") {
      setIsCity(true);
    } else {
      setIsCity(false);
    }
  };

  return (
    <>
      <PageContainer>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && (
          <>
            <MainContainer>
              <Text>Country: {compactData.name}</Text>
              <DataContainer>
                <ImgContainer src={compactData.image} />
                <TextContainer>{compactData.description}</TextContainer>
              </DataContainer>
            </MainContainer>
            <DataContainer>
              <FiltersContainer
                isCity={isCity}
                onClick={() => changeCityRegion("city")}
              >
                <SelectCity onChange={onOptionChangeCity} value={city}>
                  <option>Choose a city:</option>
                  {data &&
                    data.map((e, index) => {
                      return (
                        e.city && <GetOptionCities key={index} value={e.city} />
                      );
                    })}
                </SelectCity>
                <ButtonPlan to={`/my-travel/${country}/${city}`}>
                  Search
                </ButtonPlan>
              </FiltersContainer>
              <FiltersContainer
                isCity={!isCity}
                onClick={() => changeCityRegion("region")}
              >
                <SelectRegion onChange={onOptionChangeRegion} value={region}>
                  <option>Choose a region:</option>
                  {data &&
                    data.map((e, index) => {
                      return (
                        e.region && (
                          <GetOptionCities key={index} value={e.region} />
                        )
                      );
                    })}
                </SelectRegion>
                <ButtonPlan to={`/my-travel/${country}/${region}`}>
                  Search
                </ButtonPlan>
              </FiltersContainer>
            </DataContainer>
          </>
        )}
      </PageContainer>
      {console.log(country, city, region)}
      {data && console.log(data)}
    </>
  );
}

export default CitiesRegions;
