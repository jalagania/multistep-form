import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";

function StepTwo(props) {
  return (
    <div>
      <h1 className="mt-3 mb-4 text-5xl font-bold text-blueMarine phone:text-4xl">
        Select your plan
      </h1>
      <p className="mb-12 text-grayCool phone:mb-4">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex gap-6 phone:flex-col phone:gap-4">
        <div
          className={`${
            props.selectedPlan === "Arcade"
              ? "border-bluePurplish bg-[#F8F9FE]"
              : "border-grayLight"
          } w-1/3 cursor-pointer rounded-2xl border border-solid p-8 hover:border-bluePurplish phone:flex phone:w-full phone:gap-6 phone:p-4`}
          onClick={() => props.setSelectedPlan("Arcade")}
        >
          <img src={arcade} alt="arcade" />
          <div>
            <p className="mt-16 mb-1 font-bold text-blueMarine phone:mt-0">
              Arcade
            </p>
            <p className="text-grayCool">
              {props.monthly ? "$9/mo" : "$90/yr"}
            </p>
            {!props.monthly && (
              <p className="mt-2 text-xl font-medium text-blueMarine">
                2 months free
              </p>
            )}
          </div>
        </div>
        <div
          className={`${
            props.selectedPlan === "Advanced"
              ? "border-bluePurplish bg-[#F8F9FE]"
              : "border-grayLight"
          } w-1/3 cursor-pointer rounded-2xl border border-solid p-8 hover:border-bluePurplish phone:flex phone:w-full phone:gap-6 phone:p-4`}
          onClick={() => props.setSelectedPlan("Advanced")}
        >
          <img src={advanced} alt="advanced" />
          <div>
            <p className="mt-16 mb-1 font-bold text-blueMarine phone:mt-0">
              Advanced
            </p>
            <p className="text-grayCool">
              {props.monthly ? "$12/mo" : "$120/yr"}
            </p>
            {!props.monthly && (
              <p className="mt-2 text-xl font-medium text-blueMarine">
                2 months free
              </p>
            )}
          </div>
        </div>
        <div
          className={`${
            props.selectedPlan === "Pro"
              ? "border-bluePurplish bg-[#F8F9FE]"
              : "border-grayLight"
          } w-1/3 cursor-pointer rounded-2xl border border-solid p-8 hover:border-bluePurplish phone:flex phone:w-full phone:gap-6 phone:p-4`}
          onClick={() => props.setSelectedPlan("Pro")}
        >
          <img src={pro} alt="pro" />
          <div>
            <p className="mt-16 mb-1 font-bold text-blueMarine phone:mt-0">
              Pro
            </p>
            <p className="text-grayCool">
              {props.monthly ? "$15/mo" : "$150/yr"}
            </p>
            {!props.monthly && (
              <p className="mt-2 text-xl font-medium text-blueMarine">
                2 months free
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-center gap-8 rounded-xl bg-[#F8F9FE] p-6 phone:mt-8 phone:p-4">
        <button
          className="font-bold text-grayCool"
          onClick={() => props.setMonthly(true)}
        >
          Monthly
        </button>
        <div className="h-8 w-16 rounded-full bg-blueMarine">
          <div
            className={`${
              props.monthly ? "ml-2" : "ml-[23px]"
            } mt-[4px] h-[12px] w-[12px] rounded-full bg-white`}
          ></div>
        </div>
        <button
          className="font-bold text-grayCool"
          onClick={() => props.setMonthly(false)}
        >
          Yearly
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
