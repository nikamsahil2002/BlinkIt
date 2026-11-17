import { useEffect, useState } from "react"
import Spinner from "./Spinner";
import axios from "axios";


const Links = () => {
    const [links, setLinks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    function getProducts(){
      Promise.all([
        axios.get('https://dummyjson.com/products?limit=18'),
        axios.get('https://dummyjson.com/recipes?limit=33')
      ])
      .then((response) => {
        const [productsResponse, cartResponse] = response;

        setLinks(productsResponse.data.products);
        setCategories(cartResponse.data.recipes);

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("API Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
    }

    useEffect(()=> {
      getProducts();
    }, []);

    return (
      <div>
        { loading ? (
          <Spinner loading={loading}/>
        ) : (
          <div className="grid grid-cols-[1fr_2fr] pb-10 pt-15 px-5">
            <div className="">
              <p className="font-bold text-xl py-4">Useful Links</p>
              <div className="grid grid-cols-3 grid-rows-6 gap-2">
                {links.map((item)=> {
                    return <p className="text-gray-500" >{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                })}
              </div>
            </div>

            <div className="">
              <p className="font-bold text-xl py-4 mb-5">Categories</p>
                <div className="grid grid-cols-3 grid-rows-11 gap-2">
                  {categories.map((item)=> {
                      return <p className="text-gray-500">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
                  })}
                </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default Links
