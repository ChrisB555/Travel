import { useState} from "react";
import useFetchData from "../../hooks/useFetchData";
import useLocalStorage from "../../hooks/useLocalStorage";
import { HomeBtn, Option, SelectPlan, SelectContainer } from "./MainHome.style";
import useToast from "../../Store/user/useToast";


function SelectOptionPlan() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [clicked, setClicked] = useState(false);

  const url = selectedCountry
    ? `http://localhost:3001/${selectedCountry}`
    : null;

  const { data} = useFetchData(
    url,
    clicked,
    setClicked
  );

  const { localData} =
  useLocalStorage("user");

  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  
  const handleDropdownChangeCountry = (e) => {
    setSelectedCountry(e.target.value);
    setClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);
  };

  return (
    <>
      <SelectContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
       
        { localData !== null &&  (<SelectPlan
            value={selectedCountry}
            onChange={handleDropdownChangeCountry}
          >
            <Option value="">Pick a country</Option>
            <Option value="italy">Italy</Option>
            <Option value="france">France</Option>
            <Option value="romania">Romania</Option>
            <Option value="spain">Spain</Option>
          </SelectPlan>
        )}
           {localData === null &&
                useToast(
                  "Home",
                 "For a better experience you  should create an account or if you already have one, login!",
                  "",
                  showA,
                  toggleShowA
                )}
          {data &&(
            <HomeBtn
              type="submit"
              to={`/city-region/${selectedCountry}/${localData}`}
            >
              Let's Begin To Travel!
            </HomeBtn>
          )}
        </form>
      </SelectContainer>
    </>
  );
}

export default SelectOptionPlan;
