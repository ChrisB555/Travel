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
              <TextRecommend> day1:</TextRecommend>
              <TextContainerRecommend>
                {period.fivedays.dayone}
              </TextContainerRecommend>
              </DataContainerRecommend>
      
              <DataContainerRecommend>
              <TextRecommend>day2:</TextRecommend>
              <TextContainerRecommend>
                {period.fivedays.daytwo}
              </TextContainerRecommend>
              </DataContainerRecommend>
      
              <DataContainerRecommend>
              <TextRecommend>day3:</TextRecommend>
              <TextContainerRecommend>
                {period.fivedays.daythree}
              </TextContainerRecommend>
              </DataContainerRecommend>

              <DataContainerRecommend>
              <TextRecommend>day4:</TextRecommend>
              <TextContainerRecommend>
                {period.fivedays.dayfour}
              </TextContainerRecommend>
              </DataContainerRecommend>

              <DataContainerRecommend>
              <TextRecommend>day5:</TextRecommend>
              <TextContainerRecommend>
                {period.fivedays.dayfive}
              </TextContainerRecommend>
              </DataContainerRecommend>
      
            </MainContainerRecommend>
          </>
        )

    };

    export default FiveDays;