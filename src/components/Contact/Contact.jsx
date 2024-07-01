import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactFormTextarea from "./ContactFormTextarea";
import {
  ContactContainer,
  ContactButton,
  ContactText,
  ErrorP,
} from "./Contact.style";
import useToast from "../../Store/user/useToast";

const defaultObj = {
  Name: "",
  SurName: "",
  Mobile: "",
  Email: "",
  Textarea: "",
};

const Contact = () => {
  const [inputObj, setInputObj] = useState(defaultObj);

  const [errorInput, setErrorInput] = useState({
    Name: undefined,
    Surname: undefined,
    Mobile: undefined,
    Email: undefined,
    Textarea: undefined,
  });

  const [isValid, setIsValid] = useState(true);

  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  const handleChange = (e, name) => {
    setInputObj({ ...inputObj, [name]: e.target.value });
    handleError(e.target.value, name);
    setShowA(false);
  };

  const clearFields = () => {
    setInputObj(defaultObj);
  };

  const handleSubmit = async () => {
    const add = await fetch(`http://localhost:3001/feedback`, {
      method: "POST",
      body: JSON.stringify(inputObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await add.json();
    setShowA(true);
    clearFields();
    return response[0].id;
  };

  const handleError = (value, name) => {
    switch (name) {
      case "Name":
        if (!value.trim() || value.length < 3) {
          setErrorInput({
            ...errorInput,
            [name]: "This field is required.",
          });
          setIsValid(false);
        } else if (value === "Name") {
          setErrorInput({ ...errorInput, [name]: "Error" });
          setIsValid(false);
        } else {
          setErrorInput({ ...errorInput, [name]: undefined });
          setIsValid(true);
        }
        break;
      case "SurName":
        if (!value.trim() || value.length < 3) {
          setErrorInput({
            ...errorInput,
            [name]: "This field is required.",
          });
          setIsValid(false);
        } else if (value === "SurName") {
          setErrorInput({ ...errorInput, [name]: "Error" });
        } else {
          setErrorInput({ ...errorInput, [name]: undefined });
          setIsValid(true);
        }
        break;
      case "Mobile":
        let valueArr = value.split(" ");
        valueArr.filter((e) => {
          if (!value.match("[0-9]{10}") || e[0] != "0" || e[1] != "7") {
            setErrorInput({
              ...errorInput,
              [name]: "Please enter a 10 digit number that starts with 07.",
            });
            setIsValid(false);
          } else if (value === "Mobile") {
            setErrorInput({ ...errorInput, [name]: "Error" });
          } else {
            setErrorInput({ ...errorInput, [name]: undefined });
            setIsValid(true);
          }
        });
        break;
      case "Email":
        const isEmailValid = (email) => {
          const formulaEmail =
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
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
        break;
      case "Textarea":
        if (!value.trim()) {
          setErrorInput({
            ...errorInput,
            [name]: "This field is required.",
          });
          setIsValid(false);
        } else if (value === "Textarea") {
          setErrorInput({ ...errorInput, [name]: "Error" });
        } else {
          setErrorInput({ ...errorInput, [name]: undefined });
          setIsValid(true);
        }
        break;
      default:
        break;
    }
  };

  return (
    <ContactContainer>
      <ContactText>We will apreciate your feedback:</ContactText>
      {Object.keys(inputObj).map((el, index) =>
        el === "Textarea" ? (
          <ContactFormTextarea
            key={index}
            name={el}
            type={el}
            value={inputObj[el]}
            handleChange={handleChange}
            error={errorInput[el]}
          />
        ) : (
          <ContactForm
            key={index}
            name={el}
            type={el}
            value={inputObj[el]}
            handleChange={handleChange}
            error={errorInput[el]}
          />
        )
      )}

      {isValid === true &&
        inputObj.Name !== "" &&
        inputObj.Name !== "" &&
        inputObj.SurName !== "" &&
        inputObj.Mobile !== "" &&
        inputObj.Email !== "" &&
        inputObj.Textarea !== "" && (
          <ContactButton
            onClick={() => {
              handleSubmit();
            }}
          >
            Send Feedback
          </ContactButton>
        )}
      {isValid === true &&
        useToast(
          "Contact",
          ` Yours feedback was sended !`,
          "",
          showA,
          toggleShowA
        )}
      {isValid === false && <ErrorP>Not valid</ErrorP>}
    </ContactContainer>
  );
};

export default Contact;
