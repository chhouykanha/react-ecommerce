import { useEffect, useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { IoChevronForward } from "react-icons/io5";
import { LiaShipSolid } from "react-icons/lia";
import { LuMinus } from "react-icons/lu";
import { Link, useParams } from "react-router-dom"
import LoadingIcon from "../components/LoadingIcon";

const Product = () => {
  const {id} = useParams();
  const [product, setProduct ] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [qty, setQty] = useState(1);

  const handleDecrement = () => {
      if(qty <= 1){
          return;
      }
      setQty((pre) => pre - 1);
  }


  const handleIncrement = () => {
    setQty((pre) => pre + 1);
  }

  useEffect(() => {
    const fetchSingleProduct = async () => {
        setIsLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const resutl = await response.json()
        setProduct(resutl)
        setIsLoading(false);
    }

    fetchSingleProduct()
  },[id])

  return (
    <>
      {isLoading && (
          <div className="max-w-[90%] lg:max-w-[70%] mx-auto my-10 grid place-items-center">
                <LoadingIcon />
          </div>
      )}
      {!isLoading && (
         <>
            <div className="bg-[#f8f9fc] w-full py-2 font-jost">
                 <div className="max-w-[90%] lg:max-w-[70%] mx-auto flex items-center space-x-1 text-sm">
                        <Link to='/'>Home</Link>
                        <span> 
                          <IoChevronForward />
                        </span>
                        <Link to='/products'>Product</Link>
                        <span> 
                          <IoChevronForward />
                        </span>
                        <span className="font-semibold">{product?.title}</span>
                 </div>
            </div>

            <div className="font-jost max-w-[90%] lg:max-w-[70%] mx-auto my-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="border border-slate-200 p-5 h-[500px]">
                      <img className="w-full h-full object-contain" src={product?.image} alt="" />
                      
                </div>
                <div>
                      <h4 className="uppercase text-gray-700">{product?.category}</h4>
                      <h1 className="text-3xl">{product?.title}</h1>
                      <h3 className="text-2xl font-semibold mt-2">{product?.price}$</h3>
                      <div className="mt-8 flex items-center space-x-4">
                            <div className="flex rounded-md justify-between space-x-4  border border-slate-200 px-4 py-2 w-32 items-center">
                                  <button onClick={handleDecrement}>
                                    <LuMinus />
                                  </button>
                                  <button>{qty}</button>
                                  <button onClick={handleIncrement}>
                                    <FiPlus />
                                  </button>
                            </div>

                            <button className="w-32 text-sm font-medium rounded-md bg-gray-600 text-white py-2 hover:bg-gray-500 transition-all duration-300">
                                Add to cart
                            </button>
                            <button className="w-32 text-sm font-medium rounded-md bg-yellow-600 text-white py-2 hover:bg-yellow-500 transition-all duration-300">
                                Buy Now
                            </button>
                      </div>

                      <div className="mt-6 p-4 text-sm rounded-md bg-gray-50 grid grid-cols-12 items-center space-x-2">
                            <p className="col-span-4">Secure checkout with</p>
                            <span className="col-span-8">
                                <img className="w-[80%] object-contain" src="/src/assets/images/payment.webp" alt="payment" />
                            </span>
                      </div>

                      <div className="mt-6 flex space-x-2 items-center text-gray-700">
                            <span className="text-2xl">
                                <CiDeliveryTruck />
                            </span>
                            <span>
                              Delivers in: 3-7 Working Days
                            </span>
                      </div>
                      <div className="mt-4 flex space-x-2 items-center text-gray-700">
                            <span className="text-2xl font-light">
                              <LiaShipSolid />
                            </span>
                            <span>
                              Free shipping over $300
                            </span>
                      </div>  

                      <hr className="h-[1px]  bg-gray-50 w-full my-4" />

                      <div>
                            <p className="text-gray-600">
                                {product?.description}
                            </p>
                      </div>
                </div>
            </div>  
         </>
      )}
    </>
  )
}

export default Product