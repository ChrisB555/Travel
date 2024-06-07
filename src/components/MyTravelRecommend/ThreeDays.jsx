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
        <TextRecommend> day one:</TextRecommend>
        <TextContainerRecommend>
          {period.threedays.dayone}
        </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend>
        <TextRecommend>day two:</TextRecommend>
        <TextContainerRecommend>
          {period.threedays.daytwo}
        </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend>
        <TextRecommend>day three:</TextRecommend>
        <TextContainerRecommend>
          {period.threedays.daythree}
        </TextContainerRecommend>
        </DataContainerRecommend>

      </MainContainerRecommend>
    </>
  );
}

export default ThreeDays;
