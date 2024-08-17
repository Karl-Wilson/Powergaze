import ApplianceView from "@/src/web_app/main/appliance/view/appliance"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Appliance",
  };
const Appliance = () =>{
    return(
        <ApplianceView/>
    )
}

export default Appliance