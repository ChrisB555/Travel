import { Option } from "./MainHome.style";

function GetOptionCities({ value }) {

  return (
    <Option loc="Option" value={value}>
      {value}
    </Option>
  );
}

export default GetOptionCities;