type dataState ={
    children: React.ReactNode
    data: {} | any[] | string | number | undefined
}
const DataState = (props: dataState) =>{
    const isDataAvailable = () =>{
        if(typeof props.data == "object"){
            if(Array.isArray(props.data)){
                if(props.data.length > 0){
                    return true
                }
            }
            if(Object.values(props.data).length > 0){
                return true
            }
            return false
            
        }else if(props.data){
            return true
        }

        return false
    }

    return(
        <>
           {isDataAvailable() && <>{props.children}</>}
           {!isDataAvailable() && <p>Data not available</p>}
        </>
    )
}
export default DataState