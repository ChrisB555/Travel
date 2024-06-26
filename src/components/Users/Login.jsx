
import { useParams } from "react-router-dom";
import useFetchUsers from "../../hooks/useFetchUsers";
import useLocalStorage from "../../hooks/useLocalStorage";
import {ContactContainer} from "../Contact/Contact.style";
import { ButtonInfo, InfoSection, InfoUser } from "../Explore/Explore.style";
import { Error, Loading } from "../MainHome/MainHome.style";
import { ButtonsAccount,ButtonsText } from "../Account/Account.style";

function Login (){
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
          <InfoSection loc="InfoSection">
            <ButtonsText loc="InfoUser"> E-mail: {user.Email}</ButtonsText>
            <ButtonsText loc="InfoUser"> ID: {user.id}</ButtonsText>
          </InfoSection>
          <InfoSection loc="InfoSection">
            <ButtonsText loc="InfoUser">
              Congratulations you have loged in. You may go explore!
            </ButtonsText>
            <ButtonsAccount loc="ButtonInfo" to={`/home`}>
              Lets go travel!
            </ButtonsAccount>
           
          </InfoSection>
        </>
      )}
    </ContactContainer>
        
        </>
    )
}
export default Login;