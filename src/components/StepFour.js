import { plansData } from "../plans-data";

function StepFour(props) {
  let planPrice,
    totalPrice = 0;

  plansData.forEach((plan) => {
    if (plan.name === props.selectedPlan) {
      planPrice = props.monthly ? plan.price.monthly : plan.price.yearly;
    }
  });

  totalPrice += planPrice;

  function handleChangeButton() {
    props.setShowStepFour(false);
    props.setShowStepTwo(true);
  }

  return (
    <div>
      <h1 className="bg-lue mt-3 mb-4 text-5xl font-bold text-blueMarine phone:text-4xl">
        Finishing up
      </h1>
      <p className="mb-12 text-grayCool">
        Double-check everything looks OK before confirming.
      </p>
      <div className="rounded-2xl bg-[#F8F9FE] p-8">
        <div className="flex items-center justify-between border-b border-b-grayLight pb-8">
          <div>
            <p className="font-bold text-blueMarine">{`${props.selectedPlan} (${
              props.monthly ? "Monthly" : "Yearly"
            })`}</p>
            <button
              className="text-grayCool underline hover:text-bluePurplish"
              onClick={handleChangeButton}
            >
              Change
            </button>
          </div>
          <p className="font-bold text-blueMarine">
            ${planPrice + (props.monthly ? "/mo" : "/yr")}
          </p>
        </div>
        {props.addons.map((addon, index) => {
          if (addon.selected) {
            const addonPrice = props.monthly
              ? addon.price.monthly
              : addon.price.yearly;
            totalPrice += addonPrice;
            return (
              <div key={index} className="mt-8 flex justify-between">
                <p className="text-grayCool">{addon.name}</p>
                <p className="font-medium text-blueMarine">
                  $
                  {props.monthly
                    ? addon.price.monthly + "/mo"
                    : addon.price.yearly + "/yr"}
                </p>
              </div>
            );
          }
          return [];
        })}
      </div>
      <div className="flex items-center justify-between p-8">
        <p className="text-grayCool">{`Total (per ${
          props.monthly ? "month" : "year"
        })`}</p>
        <p className="text-4xl font-bold text-bluePurplish">
          +${totalPrice + (props.monthly ? "/mo" : "/yr")}
        </p>
      </div>
    </div>
  );
}

export default StepFour;
