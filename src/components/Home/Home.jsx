import MainHome from "../MainHome/MainHome";
import MainButtons from '../MainHome/MainButtons';
import { HomeContainer } from "./Home.style";

function Home() {
  return (
    <HomeContainer>     
         <MainHome/>
         <MainButtons/>
        
    </HomeContainer>
    
  );
}

export default Home;