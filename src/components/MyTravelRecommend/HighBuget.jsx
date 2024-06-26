import {
  MainContainerRecommend,
  TextContainerRecommend,
  TextRecommend,
  DataContainerRecommend,
} from "../MyTravelRecommend/MyTravelRecommend.style";

function HighBuget({ buget }) {
  return (
    <>
      <MainContainerRecommend>
        <TextRecommend>We can recommend you some hotels in your buget range:</TextRecommend>
        <DataContainerRecommend>
          <TextRecommend> Hotel:</TextRecommend>
          <TextContainerRecommend>
            {buget.highBuget.hotelone}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend>
          <TextRecommend>Hotel:</TextRecommend>
          <TextContainerRecommend>
            {buget.highBuget.hoteltwo}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend>
          <TextRecommend>Hotel:</TextRecommend>
          <TextContainerRecommend>
            {buget.highBuget.hotelthree}
          </TextContainerRecommend>
        </DataContainerRecommend>
      </MainContainerRecommend>
    </>
  );
}

export default HighBuget;
