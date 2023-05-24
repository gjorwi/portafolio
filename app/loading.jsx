import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return( 
    <div className="w-full h-full flex justify-center items-center"> 
      <AiOutlineLoading3Quarters className={`loaderIcon text-6xl`} />
    </div>
  ) 
}