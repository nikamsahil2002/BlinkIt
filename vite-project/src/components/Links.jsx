import { useEffect, useState } from "react"
import Spinner from "./Spinner";
import axios from "axios";


const Links = () => {
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        setLoading(true);
        axios.get('https://dummyjson.com/products?limit=18')
        .then((response)=> {
            setLinks(response.data.products);
            console.log("response.data.products");
            setLoading(false);
        })
        .catch((error) => {
            // setError(error.message);
            setLoading(false);
            console.error("Error fetching users:", error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    return (
      <div>
        {loading ? (
          <Spinner loading={loading}/>
        ) : (
          <div className="grid grid-cols-[1fr_2fr] pb-10 pt-15 px-7">
            <div className="">
              <p className="font-bold text-lg">Useful Links</p>
              <div className="grid grid-cols-3 grid-rows-6 gap-2">
                {links.map((item)=> {
                    return <p>{item.category}</p>
                })}
              </div>
            </div>

            <div className="">
              <p className="font-bold text-lg">Categories</p>
            </div>
          </div>
        )}
      </div>
    );
}

export default Links
