import React from 'react'
import ProductList from './ProductList';

const ProductsContainer = ({item}) => {
  return (
    <div className='flex flex-col p-2 '>
        <div className='text-[30px] font-bold font-["Okra-Medium",_sans-serif] text-[#1C1C1C] p-4 '>
          {item}
        </div>
        <ProductList type={item}/>
    </div>
  )
}

export default ProductsContainer
