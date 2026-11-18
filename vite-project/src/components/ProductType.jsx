import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const ProductType = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setLoading(true);
    axios.get('https://dummyjson.com/products?limit=20')
      .then((response)=> {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
  return (
  <div>
      {loading ? <Spinner loading={loading}/>:
        <div className="grid gap-5 grid-rows-2 grid-cols-10  m-4">
          {products.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <img className=" border-gray-300 rounded-2xl bg-[#EDF4FF] w-[120px] h-[120px]" src={item.thumbnail}/>
              <p className="text-center">{item.category}</p>
            </div>
          ))}
        </div>
      }
  </div>
  );
};

export default ProductType;
