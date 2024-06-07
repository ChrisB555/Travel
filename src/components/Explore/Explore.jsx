import { useState,useEffect } from "react";

import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import DestinationCard from "../DestinationCard/DestinationCard";
import { Error, Loading } from "../MainHome/MainHome.style";
import {
  ButtonCity,
  CityDescription,
  ContainerDescriptionBottom,
  ContainerDescriptionTop,
  ContainerTop,
  CountrySubtitle,
  ImageCity,
  SectionCityButtons,
  SectionCityData,
  Subtitle,
  Title,
  SectionLandmarkData,
} from "./Explore.style";

import useLocalStorage from "../../hooks/useLocalStorage";

const Explore = () => {
  const { country, city } = useParams();

  const [clicked, setClicked] = useState(true);

  const urlCity =
    country && city ? `http://localhost:3001/${country}?city=${city}` : null;

  const {
    data: dataCity,
    error: errorCity,
    loading: loadingCity,
  } = useFetchData(urlCity, clicked, setClicked);

  const urlDestination =
    country && city ? `http://localhost:3001/destinations?city=${city}` : null;

  const {
    data: dataDestination,
    error: errorDestination,
    loading: loadingDestination,
  } = useFetchData(urlDestination, clicked, setClicked);

  const compactDataCity = dataCity ? dataCity[0] : null;

  console.log("compactDataCity", compactDataCity);

  const { localData, handleLocalData, isLocalDataEmpty } =
  useLocalStorage("locatie");
console.log("localData", localData);

//FUNCTIA DE ADAUGARE LOCALSTORAGE

const addLocalStorage = (country, city) => {
  // console.log("value", typeof value, value);
  console.log("country", country, "city", city);

  const existingData = !isLocalDataEmpty ? localData : [];

  console.log("existingData raw", typeof existingData, existingData);
  console.log(
    "existingData to string",
    typeof JSON.stringify(existingData),
    JSON.stringify(existingData)
  );

  const newLocation = { country, city };

  console.log("newLocation", typeof newLocation, newLocation);

  const updatedData = [...existingData, newLocation];

  console.log("updatedData", typeof updatedData, updatedData);

  handleLocalData("locatie", updatedData);
};

  return (
    <>
      <SectionCityData >
        <Title>
          Feel free to explore our offers regarding your selection:
        </Title>
        {loadingCity && (
          <Loading loc="Loading">Loading... Waiting for landing...</Loading>
        )}
        {errorCity && (
          <Error loc="Error">
            Error: {errorCity.message} Our team is called from the coffe break
            and will take care of the problem!
          </Error>
        )}
        {dataCity && (
          <>
            <ContainerTop >
            
              <ContainerDescriptionTop >
                <Subtitle >
                  Country: {country}
                </Subtitle>
                <Subtitle >City: {city}</Subtitle>
              </ContainerDescriptionTop>
              <ImageCity  src={compactDataCity.image} />
            </ContainerTop>
            <ContainerDescriptionBottom >
              <CityDescription >
                Description: {compactDataCity.description}
              </CityDescription>
            </ContainerDescriptionBottom>
          </>
        )}
      </SectionCityData>
      <SectionLandmarkData loc="SectionLandmarkData">
      {loadingDestination && (
          <Loading loc="Loading">Loading... Waiting for landing...</Loading>
        )}
        {errorDestination && (
          <Error loc="Error">
            Error: {errorCity.message} Our team is called from the coffe break
            and will take care of the problem!
          </Error>
        )}
        {dataDestination &&
          dataDestination?.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
      </SectionLandmarkData>
      <SectionCityButtons>
        <ButtonCity  to={`/intinerary`}
         onClick={() => {
          addLocalStorage(country, city);
        }}
        >
          Save {city} to my intinerary!
        </ButtonCity>
        <ButtonCity>I want to book accommodation!</ButtonCity>
      </SectionCityButtons>
    </>
  );
};

export default Explore;