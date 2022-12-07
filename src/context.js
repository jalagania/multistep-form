import React from "react";
import { useState } from "react";
import { addonsData } from "./addons-data";

export const AppContext = React.createContext();

function AppProvider(props) {
  const [showStepOne, setShowStepOne] = useState(true);
  const [showStepTwo, setShowStepTwo] = useState(false);
  const [showStepThree, setShowStepThree] = useState(false);
  const [showStepFour, setShowStepFour] = useState(false);
  const [showStepFive, setShowStepFive] = useState(false);

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  const [stepOneIsValid, setStepOneIsValid] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState("Arcade");
  const [monthly, setMonthly] = useState(true);
  const [addons, setAddons] = useState(addonsData);

  function handleButtonNext() {
    if (showStepOne) {
      if (stepOneIsValid) {
        setShowStepOne(false);
        setShowStepTwo(true);
      }
      if (!inputName) {
        setErrorName(true);
      } else {
        setErrorName(false);
      }
      if (!inputEmail) {
        setErrorEmail(true);
      } else {
        setErrorEmail(false);
      }
      if (!inputPhone) {
        setErrorPhone(true);
      } else {
        setErrorPhone(false);
      }
    }

    if (showStepTwo) {
      setShowStepTwo(false);
      setShowStepThree(true);
    }

    if (showStepThree) {
      setShowStepThree(false);
      setShowStepFour(true);
    }

    if (showStepFour) {
      setShowStepFour(false);
      setShowStepFive(true);
    }
  }

  function handleButtonBack() {
    if (showStepTwo) {
      setShowStepTwo(false);
      setShowStepOne(true);
    }
    if (showStepThree) {
      setShowStepThree(false);
      setShowStepTwo(true);
    }
    if (showStepFour) {
      setShowStepFour(false);
      setShowStepThree(true);
    }
  }

  return (
    <AppContext.Provider
      value={{
        showStepOne,
        showStepTwo,
        setShowStepTwo,
        showStepThree,
        showStepFour,
        setShowStepFour,
        showStepFive,
        inputName,
        setInputName,
        inputEmail,
        setInputEmail,
        inputPhone,
        setInputPhone,
        errorName,
        errorEmail,
        errorPhone,
        setStepOneIsValid,
        selectedPlan,
        setSelectedPlan,
        monthly,
        setMonthly,
        addons,
        setAddons,
        handleButtonBack,
        handleButtonNext,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
