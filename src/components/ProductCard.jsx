/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const ProductCard = ({data}) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div key={data.id} className="space-y-4 group transition-all duration-300 overflow-hidden border border-gray-300 rounded-lg">
              <div className="p-2 w-full h-[160px] md:h-[260px] overflow-hidden relative bg-transparent">
                {/* eslint-disable-next-line react/prop-types */}
                <Link to={`/product/${data.id}`}>
                    <img
                    className="w-full p-5 h-full object-center bg-cover group-hover:scale-110 transition-all duration-300"
                    // eslint-disable-next-line react/prop-types
                    src={data.image}
                    alt=""
                    />
                </Link>
              </div>

              <div className="flex flex-col gap-1 p-2">
                {/* // eslint-disable-next-line react/prop-types */}
                <p className="line-clamp-1">{data.title}</p>
                <p>${data.price}</p>
              </div>
    </div>
  )
}

export default ProductCard