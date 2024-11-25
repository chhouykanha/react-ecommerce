import { useEffect, useState } from "react";
import Slide02 from "../assets/images/slide_02.jpg";
import ProductCard from "../components/ProductCard";
import LoadingIcon from "../components/LoadingIcon";
import { Link } from "react-router-dom";
const HomePage = () => {
  const uri = "https://fakestoreapi.com/products?limit=8";
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchAllProducts = async () => {
      setIsLoading(true);
      const res = await fetch(uri);
      const result = await res.json();
      setProducts(result);
      setIsLoading(false);
    };

    fetchAllProducts();
  }, []);

  return (

    <>
     <div
        style={{ backgroundImage: `url(${Slide02})` }}
        className="min-h-screen font-jost flex items-center bg-no-repeat bg-center bg-cover  lg:bg-contain  bg-secondary"
      >
            <div className="flex flex-col gap-4 px-8 lg:px-40">
                    <h3 className="text-xl font-semibold">New Collection</h3>
                    <h1 className="text-6xl font-bold">
                    Luxury Without
                    <br />
                    Labels
                    </h1>
                    <p className="text-base">Explore new-in product and best sellers</p>
                    <button className="bg-primary font-semibold text-sm text-white px-10 py-3 rounded-lg w-fit">View Collection</button>
            </div>

      </div>
    
    <main className="max-w-[90%] lg:max-w-[70%] mx-auto font-jost">
 
      <section className="mt-20">
        <h2 className="text-3xl text-center font-semibold">Best Sellers</h2>
        <p className="text-center text-lg mt-2 mb-5 text-gray-600">
          Explore our best seller products
        </p>
        {!isLoading && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 mt-8">
              {products.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>

            <Link to="/products" >
              <button className="block mx-auto mt-10 px-10 font-semibold py-2 border border-primary rounded-md hover:bg-primary hover:text-white transition-all duration-300">
              Explore more

              </button>
            </Link>
          </>
        )}

        {isLoading && (
            <>
              <div className="w-full my-4 grid place-items-center h-[300px]">
                <LoadingIcon />
              </div>
            </>
        )}
      </section>
    </main>
    </>
  );
};

export default HomePage;
