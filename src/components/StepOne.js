import { useEffect, useContext } from "react";
import { AppContext } from "../context";

function StepOne() {
  const ctx = useContext(AppContext);

  function handleNameChange(event) {
    if (
      /^[A-Za-z\s]*$/.test(event.target.value) &&
      event.target.value.length < 20
    ) {
      ctx.setInputName(event.target.value);
    }
  }

  function handleEmailChange(event) {
    if (event.target.value.length < 20) {
      ctx.setInputEmail(event.target.value);
    }
  }

  function handlePhoneChange(event) {
    if (/^[0-9]*$/.test(event.target.value) && event.target.value.length < 12) {
      ctx.setInputPhone(event.target.value);
    }
  }

  useEffect(() => {
    if (
      ctx.inputName !== "" &&
      ctx.inputEmail !== "" &&
      ctx.inputPhone !== ""
    ) {
      ctx.setStepOneIsValid(true);
    } else {
      ctx.setStepOneIsValid(false);
    }
  }, [ctx.inputName, ctx.inputEmail, ctx.inputPhone]);

  return (
    <form>
      <h1 className="mt-3 mb-4 text-5xl font-bold text-blueMarine">
        Personal info
      </h1>
      <p className="mb-12 text-grayCool">
        Please provide your name, email address, and phone number.
      </p>
      <div className="flex justify-between">
        <label className="text-blueMarine" htmlFor="name">
          Name
        </label>
        <p className={`${ctx.errorName ? "" : "invisible"} text-redStrawberry`}>
          This field is required
        </p>
      </div>
      <input
        className={`${
          ctx.errorPhone ? "border-redStrawberry" : ""
        } mt-2 mb-8 block w-full rounded-xl border border-solid border-grayCool px-6 py-4 font-medium tracking-tight focus:border-bluePurplish`}
        type="text"
        id="name"
        placeholder="e.g. Stephen King"
        value={ctx.inputName}
        onChange={handleNameChange}
      />
      <div className="flex justify-between">
        <label className="text-blueMarine" htmlFor="email">
          Email Address
        </label>
        <p
          className={`${ctx.errorEmail ? "" : "invisible"} text-redStrawberry`}
        >
          This field is required
        </p>
      </div>
      <input
        className={`${
          ctx.errorPhone ? "border-redStrawberry" : ""
        } mb-8 mt-2 block w-full rounded-xl border border-solid border-grayCool px-6 py-4 font-medium tracking-tight focus:border-bluePurplish`}
        type="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
        value={ctx.inputEmail}
        onChange={handleEmailChange}
      />
      <div className="flex justify-between">
        <label className="text-blueMarine" htmlFor="phone">
          Phone Number
        </label>
        <p
          className={`${ctx.errorPhone ? "" : "invisible"} text-redStrawberry`}
        >
          This field is required
        </p>
      </div>
      <input
        className={`${
          ctx.errorPhone ? "border-redStrawberry" : ""
        } mb-8 mt-2 block w-full rounded-xl border border-solid border-grayCool px-6 py-4 font-medium tracking-tight focus:border-bluePurplish`}
        type="tel"
        id="phone"
        placeholder="e.g. +1 234 567 890"
        value={ctx.inputPhone}
        onChange={handlePhoneChange}
      />
    </form>
  );
}

export default StepOne;
