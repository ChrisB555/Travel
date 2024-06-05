import {
  MainContainerRecommend,
  TextContainerRecommend,
  TextRecommend,
  DataContainerRecommend
} from "../MyTravelRecommend/MyTravelRecommend.style";

function ThreeDays({ period }) {
  return (
    <>
      <MainContainerRecommend>
        
        <DataContainerRecommend>
        <TextRecommend> day1:</TextRecommend>
        <TextContainerRecommend>
          {period.threedays.dayone}
        </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend>
        <TextRecommend>day2:</TextRecommend>
        <TextContainerRecommend>
          {period.threedays.daytwo}
        </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend>
        <TextRecommend>day3:</TextRecommend>
        <TextContainerRecommend>
          {period.threedays.daythree}
        </TextContainerRecommend>
        </DataContainerRecommend>

      </MainContainerRecommend>
    </>
  );
}

export default ThreeDays;
