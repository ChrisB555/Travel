import { useContext, useState } from "react";
import { ChoiceContext } from "../../Store/context";
import { removeChoice } from "../../Store/actions";
import { Button, Modal } from "react-bootstrap";
import {
  TextChoice,
  MainContainerChoice,
  DataContainerChoice,
  TextOrangeChoice,
  ButtonPlanTravel,
  PageContainerTravel,
} from "../MyTravelCity/MyTravel.style";
import ThreeDays from "../MyTravelRecommend/ThreeDays";
import FiveDays from "../MyTravelRecommend/FiveDays";
import SevenDays from "../MyTravelRecommend/SevenDays";
import LowBuget from "../MyTravelRecommend/LowBuget";
import MediumBuget from "../MyTravelRecommend/MediumBuget";
import HighBuget from "../MyTravelRecommend/HighBuget";

function MyChoicesBox({ country, city, region, buget, period, data, index }) {


  const [show, setShow] = useState(false);
  const {  dispatchChoice } = useContext(ChoiceContext);
  
 

  const bugetTravelNoSpace = buget.replace(/ /g, "").toLowerCase();
  const periodTravelNoSpace = period.replace(/ /g, "").toLowerCase();

  const keyBuget = Object.keys(data[0].buget);
  const keyPeriod = Object.keys(data[0].period);

  const equalBugetLow =
    bugetTravelNoSpace == keyBuget[0].toLowerCase() ? true : false;
  const equalBugetMedium =
    bugetTravelNoSpace == keyBuget[1].toLowerCase() ? true : false;
  const equalBugetHigh =
    bugetTravelNoSpace == keyBuget[2].toLowerCase() ? true : false;

  const equalPeriodThree =
    periodTravelNoSpace == keyPeriod[0].toLowerCase() ? true : false;
  const equalPeriodFive =
    periodTravelNoSpace == keyPeriod[1].toLowerCase() ? true : false;
  const equalPeriodSeven =
    periodTravelNoSpace == keyPeriod[2].toLowerCase() ? true : false;

  const handleDelete = (index) => {
    dispatchChoice(removeChoice(index));
    setShow(false);
  };

  const handleCloseShow = () => {
    setShow(!show);
  };
  return (
    <>
      <>
        <Modal show={show} >
          <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {city ? (
              <p>Are you sure you want to DELETE "{city}" </p>
            ) : (
              <p>Are you sure you want to DELETE "{region}" </p>
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={() => handleDelete(index)}>
              YES
            </Button>
            <Button variant="secondary" onClick={() => handleCloseShow()}>
              NO
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <PageContainerTravel>
        <DataContainerChoice>
          <TextOrangeChoice> Country:</TextOrangeChoice>
          <TextChoice>{country}</TextChoice>
        </DataContainerChoice>

        {city ? (
          <DataContainerChoice>
            <TextOrangeChoice> City:</TextOrangeChoice>
            <TextChoice>{city}</TextChoice>
          </DataContainerChoice>
        ) : (
          <DataContainerChoice>
            <TextOrangeChoice> Region:</TextOrangeChoice>
            <TextChoice>{region}</TextChoice>
          </DataContainerChoice>
        )}

        {period ? (
          <MainContainerChoice>
            <DataContainerChoice>
              <TextOrangeChoice> Period:</TextOrangeChoice>
              <TextChoice>{period} </TextChoice>
            </DataContainerChoice>
            {equalPeriodThree
              ? data.map((e, index) => <ThreeDays key={index} {...e} />)
              : null}
            {equalPeriodFive
              ? data.map((e, index) => <FiveDays key={index} {...e} />)
              : null}
            {equalPeriodSeven
              ? data.map((e, index) => <SevenDays key={index} {...e} />)
              : null}
          </MainContainerChoice>
        ) : null}

        {buget ? (
          <MainContainerChoice>
            <DataContainerChoice>
              <TextOrangeChoice> Buget:</TextOrangeChoice>
              <TextChoice>{buget}</TextChoice>
            </DataContainerChoice>
            {equalBugetLow
              ? data.map((e, index) => <LowBuget key={index} {...e} />)
              : null}
            {equalBugetMedium
              ? data.map((e, index) => <MediumBuget key={index} {...e} />)
              : null}

            {equalBugetHigh
              ? data.map((e, index) => <HighBuget key={index} {...e} />)
              : null}
          </MainContainerChoice>
        ) : null}

        <ButtonPlanTravel onClick={() => handleCloseShow(index)}>
          Delete my choice
        </ButtonPlanTravel>
      </PageContainerTravel>
    </>
  );
}

export default MyChoicesBox;
