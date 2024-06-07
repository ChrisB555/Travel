import {
    MainContainerRecommend,
    TextContainerRecommend,
    TextRecommend,
    DataContainerRecommend
  } from "../MyTravelRecommend/MyTravelRecommend.style";

    function SevenDays ({period}){

        return(
            <>
            <MainContainerRecommend>
              
              <DataContainerRecommend>
              <TextRecommend> day one:</TextRecommend>
              <TextContainerRecommend>
                {period.sevendays.dayone}
              </TextContainerRecommend>
              </DataContainerRecommend>
      
              <DataContainerRecommend>
              <TextRecommend>day two:</TextRecommend>
              <TextContainerRecommend>
                {period.sevendays.daytwo}
              </TextContainerRecommend>
              </DataContainerRecommend>
      
              <DataContainerRecommend>
              <TextRecommend>day three:</TextRecommend>
              <TextContainerRecommend>
                {period.sevendays.daythree}
              </TextContainerRecommend>
              </DataContainerRecommend>

              <DataContainerRecommend>
              <TextRecommend>day four:</TextRecommend>
              <TextContainerRecommend>
                {period.sevendays.dayfour}
              </TextContainerRecommend>
              </DataContainerRecommend>

              <DataContainerRecommend>
              <TextRecommend>day five:</TextRecommend>
              <TextContainerRecommend>
                {period.sevendays.dayfive}
              </TextContainerRecommend>
              </DataContainerRecommend>

              <DataContainerRecommend>
              <TextRecommend>day six:</TextRecommend>
              <TextContainerRecommend>
                {period.sevendays.daysix}
              </TextContainerRecommend>
              </DataContainerRecommend>

              <DataContainerRecommend>
              <TextRecommend>day seven:</TextRecommend>
              <TextContainerRecommend>
                {period.sevendays.dayseven}
              </TextContainerRecommend>
              </DataContainerRecommend>
      
            </MainContainerRecommend>
          </>
        )

    };

    export default SevenDays;