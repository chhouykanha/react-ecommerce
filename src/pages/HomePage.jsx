import { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import categories from "../data/categories";
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
    <main className="max-w-[90%] lg:max-w-[70%] mx-auto font-jost">
      <section className="mt-20">
        <div>
          <h2 className="text-3xl font-bold">Shop by Categories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-8">
          {categories.map((item) => (
            <CategoryCard key={item.id} data={item} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl text-center font-semibold">Best Sellers</h2>
        <p className="text-center text-lg mt-2 mb-5 text-gray-600">
          Explore our best seller products
        </p>
        {!isLoading && (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-8">
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
  );
};

export default HomePage;
