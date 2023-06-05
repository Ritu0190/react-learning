import React, {useRef} from 'react'
import {BiRupee } from "react-icons/bi";

const Carts = ({cartItem, handleAddProducts, handleRemoveProduct, handleClearCart, cssClass, flyoutClose, flyoutRef}) => {
    const totalPrice = cartItem.reduce((price, item) => price + item.quantity * item.price, 0);


  return (
    <div className={cssClass} ref={flyoutRef}>
    <button onClick={flyoutClose}>x</button>
        <div className='flex justify-end mb-9'>
            {cartItem.length >= 1 && (<button onClick={handleClearCart} className='bg-blue-800 opacity-70 text-white p-2 px-3 rounded'>Clear Cart</button>)}
        </div>
        {cartItem.length === 0 && (<div>No Item Available</div>)}

        <div>
           
            {cartItem.map((item) => (
                <div key={item.id}>
                    <div className='flex items-start  border-b pb-3 mb-3 border-blue-700'>
                        {/* <p>{item.id}</p> */}
                        <img src={item.img} alt={item.title} title={item.title} className='w-[100px] h-[100px] w-full object-cover'/>
                        <div className='mx-4'>
                            <p className='capitalize mb-5 mt-[-5px]'>{item.title}</p>
                            <div className='btn-wrap  flex'>
                                <button className='border  border-blue-700 w-[20px] h-[20px] text-center leading-5' onClick={() => handleAddProducts(item)}>+</button>
                                <input type="text" value={item.quantity} readOnly className='w-[20px] h-[20px] text-center border  border-blue-700'></input>
                                <button className='border  border-blue-700 w-[20px] h-[20px] text-center' onClick={() => handleRemoveProduct(item)}>-</button>
                            </div>
                        </div>
                    
                        <p className='flex items-center'><BiRupee/>{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className='flex items-center justify-end'>
            {cartItem.length !== 0  && (<p className='flex items-center'>Total: <BiRupee/> {totalPrice.toFixed(2)}</p>)}
        </div>
    </div>
  )
}

export default Carts