import { useContext } from "react";
import { Card } from "react-bootstrap";
import { itineraryLandmarkPlus } from "../../Store/itinerary/actions";
import { ItineraryContext } from "../../Store/itinerary/context";
import {
  ButtonLandmark,
  ImgWrapper,
} from "../DestinationCard/DestinationCard.style";
import useLocalStorage from "../../hooks/useLocalStorage";

function DestinationCard({
  name,
  country,
  city,
  image,
  description,
  popularity,
  notify,
}) {
  const { stateGlobalItinerary, dispatchItinerary } =
    useContext(ItineraryContext);

  const itineraryLandmarkValueArray =
    stateGlobalItinerary.itineraryLandmarkValue || [];

  const { localData } = useLocalStorage("user");

  const handleUpdateItinerary = (updateData) => {
    fetch(`http://localhost:3001/users/${localData}`)
      .then((response) => response.json())
      .then((userData) => {
   
        const newData = userData.itinerarylandmark
          ? [...userData.itinerarylandmark, updateData]
          : [updateData];
      
        const updatedUserData = { ...userData, itinerarylandmark: newData };

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

  const checkDuplicate = (arr, obj) =>
    arr.some(
      (element) =>
        element.country === obj.country &&
        element.city === obj.city &&
        element.name === obj.name
    );

  const handleAddItineraryLandmark = (country, city, name, event) => {

    const addObject = { country, city, name };

    if (checkDuplicate(itineraryLandmarkValueArray, addObject)) {
      notify(false, name, "my-landmark-toast");
      event.preventDefault();
    } else {
      dispatchItinerary(itineraryLandmarkPlus({ country, city, name }));
      handleUpdateItinerary(addObject);
      notify(true, name, "my-landmark-toast");
    }
  };
  return (
    <Card className="tangerine-bold">
      <ImgWrapper loc="ImgWrapper">
        <Card.Img variant="top" src={image} alt="Image of landmark" />
      </ImgWrapper>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Location: {city}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <ButtonLandmark
          loc="ButtonLandmark"
          onClick={(event) => {
            handleAddItineraryLandmark(country, city, name, event);
          }}
        >
          Save this landmark to My Itinerary!
        </ButtonLandmark>
      </Card.Body>
    </Card>
  );
}
export default DestinationCard;