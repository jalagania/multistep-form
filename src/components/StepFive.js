import check from "../images/icon-thank-you.svg";

function StepFive() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-12 text-center phone:mt-20">
      <img src={check} alt="check" />
      <h1 className="text-5xl font-bold text-blueMarine">Thank you!</h1>
      <p className="text-grayCool">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default StepFive;
