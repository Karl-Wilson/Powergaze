type dropdown = {
    data?: string[] | []
}
const Dropdown = (props: dropdown) =>{
    return(
        <div>
            {props.data?.map(item=>{
                return <p className="p-4">{item}</p>
            })}

        </div>
    )
}
export default Dropdown

export const UserDropdown = () =>{
    const click = () =>{

    }
    return(
        <div>
            <div onClick={click} className="p-2 cursor-pointer text-nowrap hover:text-btnColor">Sign Out</div>
        </div>
    )
}