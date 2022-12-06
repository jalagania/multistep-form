import { useState } from "react";
import { addonsData } from "./addons-data";
import Sidebar from "./components/Sidebar";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";
import Attribution from "./components/Attribution";

function App() {
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
      if (inputName === "") {
        setErrorName(true);
      } else {
        setErrorName(false);
      }

      if (inputEmail === "") {
        setErrorEmail(true);
      } else {
        setErrorEmail(false);
      }

      if (inputPhone === "") {
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
    <div className="flex min-h-screen flex-col items-center justify-center phone:justify-start">
      <div className="flex gap-16 rounded-2xl bg-white p-6 phone:flex-col phone:gap-0 phone:bg-transparent phone:p-0">
        <Sidebar
          showStepOne={showStepOne}
          showStepTwo={showStepTwo}
          showStepThree={showStepThree}
          showStepFour={showStepFour}
        />
        <div className="w-[485px] p-8 tablet:w-[430px] phone:w-auto phone:p-4">
          <div
            className={`${
              showStepFive ? "hidden" : ""
            } h-[475px] phone:-mt-40 phone:h-auto phone:rounded-2xl phone:bg-white phone:p-8 phone:shadow-[0_8px_15px_rgba(0,0,0,0.2)]`}
          >
            {showStepOne && (
              <StepOne
                inputName={inputName}
                inputEmail={inputEmail}
                inputPhone={inputPhone}
                setInputName={setInputName}
                setInputEmail={setInputEmail}
                setInputPhone={setInputPhone}
                errorName={errorName}
                errorEmail={errorEmail}
                errorPhone={errorPhone}
                setStepOneIsValid={setStepOneIsValid}
              />
            )}
            {showStepTwo && (
              <StepTwo
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                monthly={monthly}
                setMonthly={setMonthly}
              />
            )}
            {showStepThree && (
              <StepThree
                monthly={monthly}
                addons={addons}
                setAddons={setAddons}
              />
            )}
            {showStepFour && (
              <StepFour
                selectedPlan={selectedPlan}
                monthly={monthly}
                addons={addons}
                setShowStepTwo={setShowStepTwo}
                setShowStepFour={setShowStepFour}
              />
            )}
          </div>
          {showStepFive && <StepFive />}
          <div
            className={`${
              showStepFive ? "hidden" : "flex"
            } items-center justify-between phone:absolute phone:left-0 phone:bottom-0 phone:w-full phone:bg-white phone:p-4`}
          >
            <button
              className={`${
                showStepOne ? "invisible" : ""
              } font-medium text-grayCool transition-none hover:text-blueMarine`}
              onClick={handleButtonBack}
            >
              Go Back
            </button>
            <button
              className={`rounded-xl py-4 px-8 font-medium text-white transition-none hover:opacity-80 ${
                showStepFour ? "bg-bluePurplish" : "bg-blueMarine"
              }`}
              onClick={handleButtonNext}
            >
              {showStepFour ? "Confirm" : "Next Step"}
            </button>
          </div>
        </div>
      </div>
      <Attribution />
    </div>
  );
}

export default App;
