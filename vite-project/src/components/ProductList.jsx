import axios from 'axios';
import { useEffect, useState } from 'react'
import Spinner  from './Spinner'
import clockImage from '../assets/15-mins.avif'

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
                // slide button done with the css pseudo elements and positioning is done with 
                // anchor positioning in css, used translate property for overlap 
                <div className='
                    flex align-middle 
                    justify-start p-2 
                    gap-6
                    overflow-x-auto 
                    scroll-smooth
                    snap-x snap-mandatory
                    [anchor-name:--product-slider]
                    [anchor-scope:--product-slider]
                    [&::-webkit-scrollbar]:hiddens
                    [scrollbar-width:none]
                    [&::scroll-button(left)]:content-["←"]
                    [&::scroll-button(right)]:content-["→"]
                    [&::scroll-button(*)]:w-10
                    [&::scroll-button(*)]:h-10
                    [&::scroll-button(*)]:rounded-full
                    [&::scroll-button(*)]:shadow-lg
                    [&::scroll-button(*)]:border
                    [&::scroll-button(*)]:cursor-pointer
                    [&::scroll-button(left)]:content-["←"]
                    [&::scroll-button(*)]:[position:absolute]
                    [&::scroll-button(*)]:[position-anchor:--product-slider]
                    [&::scroll-button(*)]:[align-self:anchor-center]
                    [&::scroll-button(left)]:[left:calc(anchor(left)_+_2px)]
                    [&::scroll-button(right)]:[right:calc(anchor(right)_+_2px)]'
                >
                        {
                            products.map((item) => {
                                return (
                                    <div className='shadow-sm border-[0.5px] border-gray-200 rounded-lg object-cover shrink-0 w-50 p-4 snap-start flex flex-col'>
                                        <img className="p-2" src={item.thumbnail} alt={item.title} />
                                        <div className='flex flex-col flex-1 justify-between'>
                                            <div className="flex w-fit items-center gap-1 bg-gray-100 rounded-sm mb-2 px-[2px]">
                                                <img src={clockImage} alt="Logo" width="13" height="10"/>
                                                <p className='text-center text-[10px] font-medium font-sans'>17 MINS</p>
                                            </div>
                                            <div className='text-left font-medium  font-["Okra-Medium",_sans-serif] text-[15px] pb-4'>{item.title} </div>
                                            <div className='text-left text-gray-400 text-[15px] pb-2'>1 pc </div>
                                            <div className='flex justify-between align-middle m position-bottom'> 
                                                <div className='text-left font-medium text-[15px]'>₹{Math.round(item.price)}</div>
                                                <button className='bg-[rgb(247,255,249)] font-medium text-[15px] border-[1px] py-2 px-5 rounded-lg text-[#6b8265] border-[rgb(49,134,22)]] border-[1px]'>ADD</button>
                                            </div>
                                        </div>
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
