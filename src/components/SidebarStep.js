function SidebarStep(props) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`${
          props.stepSelected
            ? "bg-blueLight text-blueMarine"
            : "border border-white text-white "
        } flex h-12 w-12 items-center justify-center rounded-full`}
      >
        <p className="text-xl font-bold">{props.number}</p>
      </div>
      <div>
        <p className="text-lg font-bold uppercase tracking-wider text-grayLight phone:hidden">
          {props.step}
        </p>
        <p className="text-xl font-bold uppercase tracking-wider text-white phone:hidden">
          {props.name}
        </p>
      </div>
    </div>
  );
}

export default SidebarStep;
