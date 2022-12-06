import { useEffect } from "react";

function StepOne(props) {
  function handleNameChange(event) {
    if (
      /^[A-Za-z\s]*$/.test(event.target.value) &&
      event.target.value.length < 20
    ) {
      props.setInputName(event.target.value);
    }
  }

  function handleEmailChange(event) {
    if (event.target.value.length < 20) {
      props.setInputEmail(event.target.value);
    }
  }

  function handlePhoneChange(event) {
    if (/^[0-9]*$/.test(event.target.value) && event.target.value.length < 12) {
      props.setInputPhone(event.target.value);
    }
  }

  useEffect(() => {
    if (
      props.inputName !== "" &&
      props.inputEmail !== "" &&
      props.inputPhone !== ""
    ) {
      props.setStepOneIsValid(true);
    } else {
      props.setStepOneIsValid(false);
    }
  }, [props.inputName, props.inputEmail, props.inputPhone]);

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
        <p
          className={`${props.errorName ? "" : "invisible"} text-redStrawberry`}
        >
          This field is required
        </p>
      </div>
      <input
        className={`${
          props.errorPhone ? "border-redStrawberry" : ""
        } mt-2 mb-8 block w-full rounded-xl border border-solid border-grayCool px-6 py-4 font-medium tracking-tight focus:border-bluePurplish`}
        type="text"
        id="name"
        placeholder="e.g. Stephen King"
        value={props.inputName}
        onChange={handleNameChange}
      />
      <div className="flex justify-between">
        <label className="text-blueMarine" htmlFor="email">
          Email Address
        </label>
        <p
          className={`${
            props.errorEmail ? "" : "invisible"
          } text-redStrawberry`}
        >
          This field is required
        </p>
      </div>
      <input
        className={`${
          props.errorPhone ? "border-redStrawberry" : ""
        } mb-8 mt-2 block w-full rounded-xl border border-solid border-grayCool px-6 py-4 font-medium tracking-tight focus:border-bluePurplish`}
        type="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
        value={props.inputEmail}
        onChange={handleEmailChange}
      />
      <div className="flex justify-between">
        <label className="text-blueMarine" htmlFor="phone">
          Phone Number
        </label>
        <p
          className={`${
            props.errorPhone ? "" : "invisible"
          } text-redStrawberry`}
        >
          This field is required
        </p>
      </div>
      <input
        className={`${
          props.errorPhone ? "border-redStrawberry" : ""
        } mb-8 mt-2 block w-full rounded-xl border border-solid border-grayCool px-6 py-4 font-medium tracking-tight focus:border-bluePurplish`}
        type="tel"
        id="phone"
        placeholder="e.g. +1 234 567 890"
        value={props.inputPhone}
        onChange={handlePhoneChange}
      />
    </form>
  );
}

export default StepOne;
