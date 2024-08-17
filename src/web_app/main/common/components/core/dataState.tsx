type dataState ={
    children: React.ReactNode
    data: any
}
export const isDataAvailable = (data: any) =>{
    try{
        if(typeof data == "object"){
            if(data == null){
                return false
            }
            if(Array.isArray(data)){
                if(data.length > 0){
                    return true
                }
            }
            if(Object.values(data).length > 0){
                
                return true
            }
            return false
            
        }else if(data){
            return true
        }
    
        return false
    }catch(error){
        throw error
    }
}

const DataState = (props: dataState) =>{
       return(
        <>
           {isDataAvailable(props.data) && <>{props.children}</>}
           {!isDataAvailable(props.data) && <p>Data not available</p>}
        </>
    )
}
export default DataState