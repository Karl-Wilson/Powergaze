import EnergyPlan from "@/src/web_app/main/energy_plan/view/energy_plan"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Energy Plan",
  };

  const Plan = () =>{
    return(
        <EnergyPlan/>
    )
}

export default Plan