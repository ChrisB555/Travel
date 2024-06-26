import {
  MainContainerRecommend,
  TextContainerRecommend,
  TextRecommend,
  DataContainerRecommend,
} from "../MyTravelRecommend/MyTravelRecommend.style";

function MediumBuget({ buget }) {
  return (
    <>
      <MainContainerRecommend>
        <TextRecommend>We can recommend you some hotels in your buget range:</TextRecommend>
        <DataContainerRecommend>
          <TextRecommend> Hotel:</TextRecommend>
          <TextContainerRecommend>
            {buget.mediumBuget.hotelone}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend>
          <TextRecommend>Hotel:</TextRecommend>
          <TextContainerRecommend>
            {buget.mediumBuget.hoteltwo}
          </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend>
          <TextRecommend>Hotel:</TextRecommend>
          <TextContainerRecommend>
            {buget.mediumBuget.hotelthree}
          </TextContainerRecommend>
        </DataContainerRecommend>
      </MainContainerRecommend>
    </>
  );
}

export default MediumBuget;
