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
              <TextRecommend> day1:</TextRecommend>
              <TextContainerRecommend>
                {period.sevendays.dayone}
              </TextContainerRecommend>
              </DataContainerRecommend>
      
              <DataContainerRecommend>
              <TextRecommend>day2:</TextRecommend>
              <TextContainerRecommend>
                {period.sevendays.daytwo}
              </TextContainerRecommend>
              </DataContainerRecommend>
      
              <DataContainerRecommend>
              <TextRecommend>day3:</TextRecommend>
              <TextContainerRecommend>
                {period.sevendays.daythree}
              </TextContainerRecommend>
              </DataContainerRecommend>

              <DataContainerRecommend>
              <TextRecommend>day4:</TextRecommend>
              <TextContainerRecommend>
                {period.sevendays.dayfour}
              </TextContainerRecommend>
              </DataContainerRecommend>

              <DataContainerRecommend>
              <TextRecommend>day5:</TextRecommend>
              <TextContainerRecommend>
                {period.sevendays.dayfive}
              </TextContainerRecommend>
              </DataContainerRecommend>

              <DataContainerRecommend>
              <TextRecommend>day6:</TextRecommend>
              <TextContainerRecommend>
                {period.sevendays.daysix}
              </TextContainerRecommend>
              </DataContainerRecommend>

              <DataContainerRecommend>
              <TextRecommend>day7:</TextRecommend>
              <TextContainerRecommend>
                {period.sevendays.dayseven}
              </TextContainerRecommend>
              </DataContainerRecommend>
      
            </MainContainerRecommend>
          </>
        )

    };

    export default SevenDays;