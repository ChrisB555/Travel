import {
    MainContainerRecommend,
    TextContainerRecommend,
    TextRecommend,
    DataContainerRecommend
  } from "../MyTravelRecommend/MyTravelRecommend.style";

    function FiveDays ({period}){

        return(
            <>
            <MainContainerRecommend>
              
              <DataContainerRecommend>
              <TextRecommend> day one:</TextRecommend>
              <TextContainerRecommend>
                {period.fivedays.dayone}
              </TextContainerRecommend>
              </DataContainerRecommend>
      
              <DataContainerRecommend>
              <TextRecommend>day two:</TextRecommend>
              <TextContainerRecommend>
                {period.fivedays.daytwo}
              </TextContainerRecommend>
              </DataContainerRecommend>
      
              <DataContainerRecommend>
              <TextRecommend>day three:</TextRecommend>
              <TextContainerRecommend>
                {period.fivedays.daythree}
              </TextContainerRecommend>
              </DataContainerRecommend>

              <DataContainerRecommend>
              <TextRecommend>day four:</TextRecommend>
              <TextContainerRecommend>
                {period.fivedays.dayfour}
              </TextContainerRecommend>
              </DataContainerRecommend>

              <DataContainerRecommend>
              <TextRecommend>day five:</TextRecommend>
              <TextContainerRecommend>
                {period.fivedays.dayfive}
              </TextContainerRecommend>
              </DataContainerRecommend>
      
            </MainContainerRecommend>
          </>
        )

    };

    export default FiveDays;