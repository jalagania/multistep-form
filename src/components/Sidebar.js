import SidebarStep from "./SidebarStep";

function Sidebar(props) {
  return (
    <div className="flex h-[568px] w-[274px] flex-col gap-12 rounded-2xl bg-[url('./images/bg-sidebar-desktop.svg')] bg-no-repeat p-12 tablet:w-[230px] phone:h-[172px] phone:w-auto phone:flex-row phone:items-start phone:justify-center phone:rounded-none phone:bg-transparent phone:bg-[url('./images/bg-sidebar-mobile.svg')] phone:bg-cover">
      <SidebarStep
        number="1"
        name="Your info"
        step="Step 1"
        stepSelected={props.showStepOne}
      />
      <SidebarStep
        number="2"
        name="Select plan"
        step="Step 2"
        stepSelected={props.showStepTwo}
      />
      <SidebarStep
        number="3"
        name="Add-ons"
        step="Step 3"
        stepSelected={props.showStepThree}
      />
      <SidebarStep
        number="4"
        name="Summary"
        step="Step 4"
        stepSelected={props.showStepFour}
      />
    </div>
  );
}

export default Sidebar;
