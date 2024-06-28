
import { useParams } from "react-router-dom";
import useFetchUsers from "../../hooks/useFetchUsers";
import useLocalStorage from "../../hooks/useLocalStorage";
import {ContactContainer} from "../Contact/Contact.style";
import {  InfoSection,ButtonInfo } from "../Explore/Explore.style";
import { Error, Loading } from "../MainHome/MainHome.style";
import { ButtonsAccountCreate,ButtonsText } from "../Account/Account.style";

function Users (){
    const { id } = useParams(); 
    const { users: user, error, loading } = useFetchUsers(`/${id}`);
    const { resetLocalData } = useLocalStorage("user");
    const isObjectEmpty = (user) => {
      return JSON.stringify(user) === "{}";
    };
    console.log("id", id, "user", user, "error", error, "loading", loading);
    return(
        <>
        <ContactContainer>
      {loading && !error && <Loading loc="Loading">Loading...</Loading>}
      {error && (
        <Error loc="Error">Error on getting data, Server is down :( </Error>
      )}
      {!loading && !error && (isObjectEmpty(user) || id === undefined) && (
        <Error loc="Error">
          Our team is called from the coffee break and will take care of the
          problem!
        </Error>
      )}
      {user && !isObjectEmpty(user) && (
        <>
          <InfoSection >
            <ButtonsText > E-mail: {user.Email}</ButtonsText>
            <ButtonsText> ID: {user.id}</ButtonsText>
          </InfoSection>
          <InfoSection >
            <ButtonsText >
              Congratulations you have a new account. You may go explore!
            </ButtonsText>
            <ButtonInfo  to={`/home`}>
              Lets go travel!
            </ButtonInfo>
          
          </InfoSection>
        </>
      )}
    </ContactContainer>
        
        </>
    )
}
export default Users;