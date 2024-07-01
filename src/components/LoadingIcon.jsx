import { AiOutlineLoading3Quarters } from "react-icons/ai"

const LoadingIcon = () => {
  return (
    <div className=" flex items-center space-x-3">
        <span className="animate-spin transition-all  text-3xl">
            <AiOutlineLoading3Quarters />
        </span>
        <span className="text-lg">Loading...</span>
    </div>
  )
}

export default LoadingIcon