import React, { useState } from 'react'
import {BiRupee } from "react-icons/bi";

const Products = ({productItems, handleAddProducts}) => {
    const [showMore, setShowMore] = useState(false);
    
  return (
    <div className='grid grid-cols-3 gap-4'>
            {productItems.map((productItems) => (
                <div className='card border' key={productItems.id}>
                    <div className='img-wrap w-full h-[200px] relative'>
                        <img src={productItems.img} alt={productItems.title} title={productItems.title} className='h-[200px] w-full object-cover'/>
                        <p className='absolute top-0 right-0 bg-slate-900 text-white capitalize py-1 px-3 opacity-80'>{productItems.category.join(", ")}</p>
                    </div>
                    <div className='detail-wrap p-6'>
                        <h3 className='capitalize font-semibold mb-2 text-lg'>{productItems.title}</h3>
                        <p>
                           {showMore ? `${productItems.desc}` : `${productItems.desc.substring(0, 50)}...`}
                            <button className='pl-1 text-sm font-semibold text-blue-600' onClick={() => setShowMore(!showMore)}>{showMore ? "Read Less" : "Read More"}</button>
                        </p>
                        <div className='flex justify-between items-center pt-3'>
                            <p className='font-semibold flex items-center'><BiRupee/>{productItems.price}</p>
                            <button className='add-t-cart-btn' onClick={() => handleAddProducts(productItems)}>Add to Cart</button>
                        </div>
                    </div>
                    
                </div>
            ))}
        
    </div>
  )
}

export default Products