import Logo from "@/src/common/components/core/logo"

const SidebarHeader = () =>{
    return(
        <div className="flex flex-row items-center justify-center w-full h-20 box-border p-3 border-b border-btnColor border-solid">
            <Logo logo="logo.png" class="w-36 h-auto"/>
        </div>
    )
}

export default SidebarHeader