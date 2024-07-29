import SettingsBackground from "../components/core/settingsBackground"
import { CostInput, EnergyInput } from "../components/core/settingsInput"
import FormLayout from "../components/layout/formLayout"
import { formLayout } from "../components/layout/formLayout"
const Settings = (props: formLayout) =>{
    return(
        <SettingsBackground>
            <FormLayout  title={props.title} data={props.data} submit={props.submit} submitLabel={props.submitLabel} closeBtn={props.closeBtn}/>
        </SettingsBackground>
    )
}
export default Settings