import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import ProductCard from "../components/ProductCard";
import LoadingIcon from "../components/LoadingIcon";

const ProductsPage = () => {
  const uri = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterProduct, setFilterProduct] = useState("_name_asc");
  
  const fetchAllProducts = async () => {
    setIsLoading(true);
    const res = await fetch(uri);
    const result = await res.json();
    setProducts(result);
    setIsLoading(false);
  };

  const fetchProductBy = async (sort) => {
    setIsLoading(true);
    const res = await fetch(`${uri}?sort=${sort}`);
    const result = await res.json();
    setProducts(result);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (searchText === ""){
      fetchAllProducts()
      return;
    }
    const filterBySearch = products.filter((item) => {
      if (item.title.toLowerCase().includes(searchText.toLowerCase())) {
        return item;
      }
    });
    setProducts(filterBySearch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  useEffect(() => {
        if(filterProduct === '_name_asc'){
            fetchProductBy('asc')
        }else if(filterProduct === '_name_desc'){
            fetchProductBy('desc')
        }
  },[filterProduct])

  return (
    <div className="max-w-[90%] lg:max-w-[70%] mx-auto my-4 font-jost">
      <div className="text-center py-10">
        <p className="text-3xl font-normal">ALL PRODUCTS</p>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <select onChange={(e) => setFilterProduct(e.target.value)} className="px-4 py-1.5 border cursor-pointer border-slate-200 rounded-md">
            <option value="_name_asc">Latest</option>
            <option value="_name_desc">Oldest</option>
          </select>
        </div>
        <div>
          <div className="relative w-56 flex text-gray-600">
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              className="w-56 px-4 py-1.5 border border-slate-200 rounded-md pr-10"
              placeholder="Search by title..."
            />
            <div className="absolute inset-y-0 right-0 w-5 h-5 my-auto mr-3">
              <CiSearch />
            </div>
          </div>
        </div>
      </div>

      {!isLoading && (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 mt-8">
            {products.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </div>
        </>
      )}

      {isLoading && (
        <>
          <div className="w-full my-4 grid place-items-center h-[300px]">
            <LoadingIcon />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsPage;
