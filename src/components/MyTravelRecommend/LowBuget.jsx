import {
    MainContainerRecommend,
    TextContainerRecommend,
    TextRecommend,
    DataContainerRecommend
  } from "../MyTravelRecommend/MyTravelRecommend.style";

    function LowBuget ({buget}){

        return(
            <>
            <MainContainerRecommend>
        
        <DataContainerRecommend>
        <TextRecommend> Hotel:</TextRecommend>
        <TextContainerRecommend>
          {buget.lowBuget.hotelone}
        </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend>
        <TextRecommend>Hotel:</TextRecommend>
        <TextContainerRecommend>
        {buget.lowBuget.hoteltwo}
        </TextContainerRecommend>
        </DataContainerRecommend>

        <DataContainerRecommend>
        <TextRecommend>Hotel:</TextRecommend>
        <TextContainerRecommend>
        {buget.lowBuget.hotelthree}
        </TextContainerRecommend>
        </DataContainerRecommend>

      </MainContainerRecommend>
            </>
        )

    };

    export default LowBuget;