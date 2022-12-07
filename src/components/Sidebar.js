import { useContext } from "react";
import { AppContext } from "../context";
import SidebarStep from "./SidebarStep";

function Sidebar() {
  const ctx = useContext(AppContext);

  return (
    <div className="flex h-[568px] w-[274px] flex-col gap-12 rounded-2xl bg-[url('./images/bg-sidebar-desktop.svg')] bg-no-repeat p-12 tablet:w-[230px] phone:h-[172px] phone:w-auto phone:flex-row phone:items-start phone:justify-center phone:rounded-none phone:bg-transparent phone:bg-[url('./images/bg-sidebar-mobile.svg')] phone:bg-cover">
      <SidebarStep
        number="1"
        name="Your info"
        step="Step 1"
        stepSelected={ctx.showStepOne}
      />
      <SidebarStep
        number="2"
        name="Select plan"
        step="Step 2"
        stepSelected={ctx.showStepTwo}
      />
      <SidebarStep
        number="3"
        name="Add-ons"
        step="Step 3"
        stepSelected={ctx.showStepThree}
      />
      <SidebarStep
        number="4"
        name="Summary"
        step="Step 4"
        stepSelected={ctx.showStepFour}
      />
    </div>
  );
}

export default Sidebar;
