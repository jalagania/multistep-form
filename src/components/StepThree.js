import { useContext } from "react";
import { AppContext } from "../context";
import check from "../images/icon-checkmark.svg";

function StepThree() {
  const ctx = useContext(AppContext);

  return (
    <div>
      <h1 className="mt-3 mb-4 text-5xl font-bold text-blueMarine phone:text-4xl">
        Pick add-ons
      </h1>
      <p className="mb-12 text-grayCool">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col gap-6">
        {ctx.addons.map((addon, index) => {
          return (
            <div
              key={index}
              className={`${
                addon.selected
                  ? "border-bluePurplish bg-[#F8F9FE]"
                  : "border-grayLight"
              } flex cursor-pointer items-center gap-8 rounded-2xl border border-solid border-grayLight px-8 py-6 hover:border-bluePurplish`}
              onClick={() =>
                ctx.setAddons((prevState) => {
                  return [
                    ...prevState.slice(0, index),
                    {
                      ...prevState[index],
                      selected: !prevState[index].selected,
                    },
                    ...prevState.slice(index + 1),
                  ];
                })
              }
            >
              <div>
                <div
                  className={`${
                    addon.selected
                      ? "bg-bluePurplish"
                      : "border border-grayLight"
                  } flex h-8 w-8 items-center justify-center rounded-lg`}
                >
                  {addon.selected && <img src={check} alt="checkmark" />}
                </div>
              </div>
              <div>
                <p className="text-[18px] font-medium text-blueMarine phone:text-[16px]">
                  {addon.name}
                </p>
                <p className="text-grayCool">{addon.text}</p>
              </div>
              <p className="ml-auto font-medium text-bluePurplish">
                {`$${
                  ctx.monthly
                    ? addon.price.monthly + "/mo"
                    : addon.price.yearly + "/yr"
                }`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StepThree;
