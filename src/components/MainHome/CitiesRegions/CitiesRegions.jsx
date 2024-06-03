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

import MyTravel from "../../MyTravel/MyTravel";
import GetOptionCities from "../GetOptionCities";

function CitiesRegions() {
  const { country } = useParams();
  const [clicked, setClicked] = useState(true);
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");

  const url = country ? `http://localhost:3001/${country}` : null;

  const { data, error, loading } = useFetchData(url, clicked, setClicked);

  const compactData = data ? data[0] : null;

  const onOptionChangeCity = (e) => {
    setCity(e.target.value);
    setClicked(true);
  };

  const onOptionChangeRegion = (e) => {
    setRegion(e.target.value);
    setClicked(true);
  };

  const handleClickCity = () => {
 
    setCity(city);
  };

  const handleClickRegion = () => {
   
    setRegion(region);
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
            <FiltersContainer>
              {/*} ?(<SelectRegion disabled></SelectRegion>):(<SelectRegion></SelectRegion>)*/}
              <SelectCity onChange={onOptionChangeCity} value={city}>
                {onOptionChangeCity ? (
                  <SelectRegion disabled></SelectRegion>
                ) : (
                  <SelectRegion></SelectRegion>
                )}
                <option>Choose a city:</option>
                {data &&
                  data.map((e, index) => {
                    return (
                      e.city && (<GetOptionCities key={index} value={e.city} />) ||
                       (<MyTravel  key={index} description={e.description} ></MyTravel>)
                    );
                  })}
              </SelectCity>
              <ButtonPlan
                type="submit"
                data={data}
                to={`/my-travel/${country}/${city}`}
                onClick={ handleClickCity}
              >
                Search
              </ButtonPlan>
            </FiltersContainer>
            <FiltersContainer>
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
              <ButtonPlan
              type="submit"
              data={data}
              to={`/my-travel/${country}/${region}`}
              onClick={() => handleClickRegion()}
            >
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
