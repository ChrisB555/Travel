
import { useContext, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { itineraryLandmarkMinus } from "../../Store/itinerary/actions";
import { ItineraryContext } from "../../Store/itinerary/context";
import useFetchData from "../../hooks/useFetchData";
import { DeleteButton } from "../CityCard/CityCard.style";
import { ImgWrapper } from "../DestinationCard/DestinationCard.style";

function LandmarkCard({ name, index }) {

  const { stateGlobalItinerary, dispatchItinerary } =
    useContext(ItineraryContext);

  const itineraryLandmarkValueArray =
    stateGlobalItinerary.itineraryLandmarkValue;

  const [clicked, setClicked] = useState(true);
  const [show, setShow] = useState(0);

  const url = `http://localhost:3001/destinations?name=${name}`;

  const { data, error, loading } = useFetchData(url, clicked, setClicked);

  const handleDelete = (index) => {
    dispatchItinerary(itineraryLandmarkMinus(index));
    setShow(false);
  };

  const handleCloseShow = () => {
    setShow(!show);
  };
  return (
    <>
      <Modal show={show} onHide={handleCloseShow}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to DELETE "{name}" ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={() => handleDelete(index)}>
            YES
          </Button>
          <Button variant="secondary" onClick={handleCloseShow}>
            NO
          </Button>
        </Modal.Footer>
      </Modal>
      {data &&
        data?.map((card, index) => (
          <Card key={index} className="tangerine-bold">
            <ImgWrapper loc="ImgWrapper">
              <Card.Img
                variant="top"
                src={card.image}
                alt="Image of landmark"
              />
            </ImgWrapper>
            <Card.Body>
              <Card.Title>{card.name}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <DeleteButton
                loc="DeleteButton"
                onClick={() => handleCloseShow(index)}
              >
                Delete from Itinerary
              </DeleteButton>
            </Card.Body>
          </Card>
        ))}
    </>
  );
}
export default LandmarkCard;