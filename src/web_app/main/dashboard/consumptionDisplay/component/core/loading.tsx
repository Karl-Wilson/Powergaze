import DashboardCard from "@/src/web_app/main/common/components/core/card"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"


const LayoutLoading = () =>{
    return(
        <>
        <Skeleton/>
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-2 lg:gap-x-6 mt-6">
           <Skeleton containerClassName=" col-start-1 col-span-4 md:col-start-1 md:col-span-4 h-[179px]" borderRadius={13} className="h-full"/> 
           <Skeleton containerClassName="col-start-1 col-span-4 md:col-start-5 md:col-span-4 h-[179px]" borderRadius={13} className="h-full"/> 
           <Skeleton containerClassName="col-start-1 col-span-4 md:col-start-9 md:col-span-4 h-[179px]" borderRadius={13} className="h-full"/> 
        </div>
        
        </>
        
    )
}
export default LayoutLoading