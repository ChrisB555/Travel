import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import AccountForm from "./AccountForm";
import { removeAllChoice, addAllChoice } from "../../Store/actions";
import { ChoiceContext } from "../../Store/context";
import {
  ContactButton,
  ContactContainer,
  ContactText,
  ErrorP,
  AccountButtonsContainer,
  ButtonsText,
  ButtonsAccount,
} from "./Account.style";
import useToast from "../../Store/user/useToast";

const defaultObj = {
  Email: "",
};

const Account = () => {
  const navigate = useNavigate();

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isFound, setIsFound] = useState([]);
  const [show, setShow] = useState(false);
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  const { stateGlobalChoice, dispatchChoice } = useContext(ChoiceContext);

  const { localData, handleLocalData, resetLocalData } =
    useLocalStorage("user");

  const handleGetAccount = () => {
    setIsVisible1(!isVisible1);
    setIsVisible2(false);
    setError(false);
    setIsFound(true);
    !isVisible1 ? buttonRef1.current.focus() : buttonRef1.current.blur();
  };

  const handleNewAccount = () => {
    setIsVisible2(!isVisible2);
    setIsVisible1(false);
    setError(false);
    setIsFound(false);
    !isVisible2 ? buttonRef2.current.focus() : buttonRef2.current.blur();
  };

  const [inputObj, setInputObj] = useState(defaultObj);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/users`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const userData = await response.json();

        setUsers(userData);
        setLoading(false);
      } catch (error) {
        setError("Eroare 808");
        setLoading(false);
      }
    };

    fetchData();
  }, [inputObj]);

  console.log("users", users, "loading", loading, "error", error);

  const [errorInput, setErrorInput] = useState({
    Email: undefined,
  });

  const [isValid, setIsValid] = useState(true);
 

  const handleChange = (e, name) => {
    setError(false);
    const value = e.target.value;
    setInputObj({ ...inputObj, [name]: value });
    handleError(value, name);

    const foundUser = users.find((element) => element.Email === value);

    if (users && users.length > 0 && value !== "") {
      setIsFound(foundUser !== undefined);
    } else {
      setIsFound(false);
    }
  };
 

  const handleSubmit = async () => {
    const add = await fetch(`http://localhost:3001/users`, {
      method: "POST",
      body: JSON.stringify(inputObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await add.json();
    clearFields();
    return response[0].id;
  };

  const addNewId = async () => {
    dispatchChoice(removeAllChoice());
    resetLocalData();
    const id = await handleSubmit();
    handleLocalData("user", JSON.stringify(id));
    navigate(`/users/${id}`);
  };

  const getUserData = () => {
    const userData = users.find((element) => element.Email === inputObj.Email);
    setShow(!show);
    setShowA(true);
    handleLocalData("user", JSON.stringify(userData.id));
     dispatchChoice(removeAllChoice());
     
    if (userData || inputObj.Email !== "") {
      dispatchChoice(addAllChoice(userData.choices));  
      console.log(inputObj)   
    }else{
      setError("Insert an E-mail!");
    }

    if (userData.choices) {
      console.log("stateGlobalChoice", stateGlobalChoice.choiceValue);
    
    } else {
      setError("No selected travel choices yet!");
    }
   
  };

  const handleError = (value, name) => {
    const isEmailValid = (email) => {
      const formulaEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return formulaEmail.test(email);
    };

    if (!isEmailValid(value)) {
      setErrorInput({
        ...errorInput,
        [name]: "Invalid email format.",
      });
      setIsValid(false);
    } else if (value === "Email") {
      setErrorInput({ ...errorInput, [name]: "Error" });
    } else {
      setErrorInput({ ...errorInput, [name]: undefined });
      setIsValid(true);
    }
  };
  const logoutUser = () => {
    setIsVisible1(false);
    resetLocalData();
    dispatchChoice(removeAllChoice());
    clearFields();
    setShow(false);
    setShowA(false);
  };

  const clearFields = () => {
    setInputObj(defaultObj);
  };

  console.log(inputObj);

  return (
    <>
      <AccountButtonsContainer>
        <ButtonsAccount
          loc="Buttons"
          ref={buttonRef1}
          onClick={() => handleGetAccount()}
        >
          Login
        </ButtonsAccount>
        <ButtonsAccount ref={buttonRef1} to={`/Account`} onClick={logoutUser}>
          Logout
        </ButtonsAccount>
        <ButtonsText>If you don't have an account then create one!</ButtonsText>
        <ButtonsAccount
          loc="Buttons"
          ref={buttonRef2}
          onClick={() => handleNewAccount()}
        >
          Create new account
        </ButtonsAccount>
      </AccountButtonsContainer>

      {isVisible1 && (
        <AccountButtonsContainer>
          <ContactText>Enter e-mail to login : </ContactText>
          {Object.keys(inputObj).map((el, index) => (
            <AccountForm
              key={index}
              name={el}
              type={el}
              value={inputObj[el]}
              handleChange={handleChange}
              error={errorInput[el]}
            />
          ))}
          {isValid && isFound  && (
            <ContactButton
              onClick={() => {
                getUserData();
              }} 
            >
           Login
            </ContactButton>)
      }

       {isValid && isFound === true && show  &&
                useToast(
                  "Account",
                  ` You are Loged in! user : ${inputObj.Email}`,
                  "",
                  showA,
                  toggleShowA
                )}
            
          {(isFound === true && isValid && show  )? (
            <>
              <ContactButton to={`/home`}>Let's start Planning!</ContactButton>
              <ButtonsText>Or you can Log Out</ButtonsText>
              <ContactButton to={`/Account`} onClick={logoutUser}>
                Log Out
              </ContactButton>
            </>
          ) : !isFound && isVisible1 && <ErrorP>No such user found</ErrorP>}
            {isValid && !isFound && !show &&
                useToast(
                  "Account",
                  `You are Loged out!`,
                  "",
                  showA,
                  toggleShowA
                )} 
          {!isValid && <ErrorP>Not valid</ErrorP>}
          {!isFound && isVisible1 && <ErrorP>No such user found</ErrorP>}
        </AccountButtonsContainer>
      )} 
      {isVisible2 && (
        <AccountButtonsContainer>
          <ContactText>Enter e-mail to create account:</ContactText>
          {Object.keys(inputObj).map((el, index) => (
            <AccountForm
              key={index}
              name={el}
              type={el}
              value={inputObj[el]}
              handleChange={handleChange}
              error={errorInput[el]}
            />
          ))}
          {isValid && !isFound && (
            <ContactButton
              onClick={() => {
                addNewId();
              }}
            >
              Create account
            </ContactButton>
          )}
          {!isValid && <ErrorP>Not valid</ErrorP>}
          {isFound && isVisible2 && <ErrorP>Email already exists</ErrorP>}
        </AccountButtonsContainer>
      )}
    </>
  );
};

export default Account;
