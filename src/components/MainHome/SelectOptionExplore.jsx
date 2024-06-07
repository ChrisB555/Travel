import { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import {
  HomeBtn,
  Option,
  Select,
  SelectContainer,
  Loading,
  Error,
} from "./MainHome.style";
import GetOptionCities from "./GetOptionCities";

function SelectOptionExplore() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [clicked, setClicked] = useState(false);

  let url = null;

  if (selectedCountry && selectedCity) {
    url = `http://localhost:3001/${selectedCountry}?city=${selectedCity}`;
  } else if (selectedCountry) {
    url = `http://localhost:3001/${selectedCountry}`;
  } else null;

  const { data, error, loading } = useFetchData(url, clicked, setClicked);

  const handleDropdownChangeCountry = (e) => {
    setSelectedCountry(e.target.value);
    console.log("selectedCountry", e.target.value);
    setClicked(true);
  };

  const handleDropdownChangeCity = (e) => {
    setSelectedCity(e.target.value);
    console.log("selectedCity", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);
  };

  return (
    <>
      <SelectContainer>
         <form onSubmit={(e) => handleSubmit(e)}>
          <Select
            value={selectedCountry}
            onChange={handleDropdownChangeCountry}
          >
            <Option loc="Option" value="">
              Pick a country
            </Option>
            <Option loc="Option" value="italy">
              Italy
            </Option>
            <Option loc="Option" value="france">
              France
            </Option>
            <Option loc="Option" value="romania">
              Romania
            </Option>
            <Option loc="Option" value="spain">
              Spain
            </Option>
          </Select>

          <Select value={selectedCity} onChange={handleDropdownChangeCity}>
            <Option loc="Option" value="">
              Pick a city
            </Option>
            {data &&
              data.map((item, index) => {
                return (
                  item.city && <GetOptionCities key={index} value={item.city} />
                );
              })}
          </Select>
         
          {selectedCountry && selectedCity && (
            <HomeBtn
              data={data}
              to={`/explore/${selectedCountry}/${selectedCity}`}
            >
              Let's Begin To Travel!
            </HomeBtn>
          )}
        </form>
          </SelectContainer>
    
      {loading && <Loading>Loading... Waiting for landing...</Loading>}
      {error && (
        <Error>
          Error: {error.message} Our team is called from the coffe break and
          will take care of the problem!
        </Error>
      )}
      {data && console.log(data)}
    </>
  );
}

export default SelectOptionExplore;
