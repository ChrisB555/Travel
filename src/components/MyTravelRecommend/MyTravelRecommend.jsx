import {
  MainContainerRecommend,
  DataContainerRecommend,
} from "../MyTravelRecommend/MyTravelRecommend.style";
import ThreeDays from "./ThreeDays";
import FiveDays from "./FiveDays";
import SevenDays from "./SevenDays";
import LowBuget from "./LowBuget";
import MediumBuget from "./MediumBuget";
import HighBuget from "./HighBuget";

function MyTravelRecommend({ bugetTravel, periodTravel, data }) {
  console.log(data);

  const bugetData = data[0].buget;
  const periodData = data ? data[0].period : null;

  console.log(bugetData);
  console.log(periodData);

  const bugetTravelNoSpace = bugetTravel.replace(/ /g, "").toLowerCase();
  console.log(bugetTravelNoSpace);

  const periodTravelNoSpace = periodTravel.replace(/ /g, "").toLowerCase();
  console.log(periodTravelNoSpace);

  const keyBuget = Object.keys(bugetData);
  console.log(keyBuget);
  const keyPeriod = Object.keys(periodData);
  console.log(keyPeriod);

  const equalBugetLow =
    bugetTravelNoSpace == keyBuget[0].toLowerCase() ? true : false;
  console.log(equalBugetLow);
  const equalBugetMedium =
    bugetTravelNoSpace == keyBuget[1].toLowerCase() ? true : false;
  console.log(equalBugetMedium);
  const equalBugetHigh =
    bugetTravelNoSpace == keyBuget[2].toLowerCase() ? true : false;
  console.log(equalBugetHigh);

  const equalPeriodThree =
    periodTravelNoSpace == keyPeriod[0].toLowerCase() ? true : false;
  console.log(equalPeriodThree, keyPeriod[0]);
  const equalPeriodFive =
    periodTravelNoSpace == keyPeriod[1].toLowerCase() ? true : false;
  console.log(equalPeriodFive, keyPeriod[0]);
  const equalPeriodSeven =
    periodTravelNoSpace == keyPeriod[2].toLowerCase() ? true : false;
  console.log(equalPeriodSeven, keyPeriod[0]);

  return (
    <>
      <MainContainerRecommend>
        {data && (
          <>
            <DataContainerRecommend>
              {equalPeriodThree
                ? data.map((e, index) => (
                    <ThreeDays key={index}  {...e} />
                  ))
                : null}
              {equalPeriodFive
                ? data.map((e, index) => (
                    <FiveDays key={index}  {...e} />
                  ))
                : null}
              {equalPeriodSeven
                ? data.map((e, index) => (
                    <SevenDays key={index}  {...e} />
                  ))
                : null}
              {equalBugetLow
                ? data.map((e, index) => (
                    <LowBuget key={index}  {...e} />
                  ))
                : null}
              {equalBugetMedium
                ? data.map((e, index) => (
                    <MediumBuget key={index} {...e} />
                  ))
                : null}

              {equalBugetHigh
                ? data.map((e, index) => (
                    <HighBuget key={index}  {...e} />
                  ))
                : null}
            </DataContainerRecommend>
          </>
        )}
      </MainContainerRecommend>
    </>
  );
}

export default MyTravelRecommend;
