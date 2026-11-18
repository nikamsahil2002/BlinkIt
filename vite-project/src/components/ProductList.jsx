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
    'Cold Drinks & Juices': "dri"
};


const ProductList = ({type}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://dummyjson.com/products/search?q=${productCategory[type]}&limit=10`)
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
                <div className='
                    flex align-middle 
                    justify-start p-2 
                    gap-6 h-80 
                    overflow-x-auto 
                    [&::-webkit-scrollbar]:hidden
                    [scrollbar-width:none]
                    [&::scroll-button(left)]:content-["←"]
                    [&::scroll-button(right)]:content-["→"]
                    [&::scroll-button(*)]:w-10
                    [&::scroll-button(*)]:h-10
                    [&::scroll-button(*)]:shadow-lg
                    [&::scroll-button(*)]:border
                    [&::scroll-button(*)]:cursor-pointer'
                    
                >
                        {
                            products.map((item) => {
                                return (
                                    <div className='shadow-lg rounded-2xl object-cover shrink-0 w-60 h-70 p-4'>
                                        <img src={item.thumbnail} alt={item.title} />
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
