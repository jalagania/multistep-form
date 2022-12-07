import { AppContext } from "./context";
import { useContext } from "react";
import Sidebar from "./components/Sidebar";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";
import Attribution from "./components/Attribution";

function App() {
  const ctx = useContext(AppContext);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center phone:justify-start">
      <div className="flex gap-16 rounded-2xl bg-white p-6 phone:flex-col phone:gap-0 phone:bg-transparent phone:p-0">
        <Sidebar />
        <div className="w-[485px] p-8 tablet:w-[430px] phone:w-auto phone:p-4">
          <div
            className={`${
              ctx.showStepFive ? "hidden" : ""
            } h-[475px] phone:-mt-40 phone:h-auto phone:rounded-2xl phone:bg-white phone:p-8 phone:shadow-[0_8px_15px_rgba(0,0,0,0.2)]`}
          >
            {ctx.showStepOne && <StepOne />}
            {ctx.showStepTwo && <StepTwo />}
            {ctx.showStepThree && <StepThree />}
            {ctx.showStepFour && <StepFour />}
          </div>
          {ctx.showStepFive && <StepFive />}
          <div
            className={`${
              ctx.showStepFive ? "hidden" : "flex"
            } items-center justify-between phone:absolute phone:left-0 phone:bottom-0 phone:w-full phone:bg-white phone:p-4`}
          >
            <button
              className={`${
                ctx.showStepOne ? "invisible" : ""
              } font-medium text-grayCool transition-none hover:text-blueMarine`}
              onClick={ctx.handleButtonBack}
            >
              Go Back
            </button>
            <button
              className={`rounded-xl py-4 px-8 font-medium text-white transition-none hover:opacity-80 ${
                ctx.showStepFour ? "bg-bluePurplish" : "bg-blueMarine"
              }`}
              onClick={ctx.handleButtonNext}
            >
              {ctx.showStepFour ? "Confirm" : "Next Step"}
            </button>
          </div>
        </div>
      </div>
      <Attribution />
    </div>
  );
}

export default App;
