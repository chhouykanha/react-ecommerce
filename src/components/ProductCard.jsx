/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const ProductCard = ({data}) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div key={data.id} className="space-y-4 group hover:scale-105 transition-all duration-300">
              <div className="w-full h-[200px] lg:h-[300px] bg-gray-50 overflow-hidden relative bg-transparent">
                {/* eslint-disable-next-line react/prop-types */}
                <Link to={`/product/${data.id}`}>
                    <img
                    className="w-full p-5 h-full object-center bg-cover group-hover:scale-110 transition-all duration-300"
                    // eslint-disable-next-line react/prop-types
                    src={data.image}
                    alt=""
                    />
                </Link>
                <button
                  type="button"
                  className="absolute -bottom-10 group-hover:bottom-0 transition-all duration-200 left-0 w-full py-2 bg-primary text-white hover:bg-yellow-700"
                >
                  Add to cart
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {/* // eslint-disable-next-line react/prop-types */}
                <p className="line-clamp-1">{data.title}</p>
                <p>${data.price}</p>
              </div>
    </div>
  )
}

export default ProductCard