import axios from 'axios';
import { useEffect, useState } from 'react'
import Spinner  from './Spinner'

let productCategory = {
    'Dairy, Bread & Eggs': "kitchen", 
    'Electronics': "phone",
    'Rolling paper & tobacco': "pa",
    'Snacks & Munchies': "snack",
    'Hookah': "c",
    'Mouth fresheners': "fresh",
    'Cold Drinks & Juices': "drink"
};


const ProductList = ({type}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://dummyjson.com/products/search?q=${productCategory[type]}&limit=5`)
        .then((response) => {
            setProducts(response.data.products);
            console.log("data", response.data.products, type)
            setLoading(false);
        })
        .catch((error)=> {
            setLoading(false);
            console.error("Error fetching products:", error);
        })
    }, []);
    return (
        <div>
            { loading ? <Spinner loading={loading}/> :
                <div className='flex align-middle justify-center gap-6 m-2'>
                {
                    products.map((item) => {
                        return (
                            <div className='shadow-lg rounded-2xl '>
                                <img src={item.thumbnail}></img>
                                <div className='text-center font-bold font-["Okra-Medium",_sans-serif]'>{item.title}</div>
                            </div>
                        )
                    })
                }
            </div>
        }
        </div>
    );
}

export default ProductList
