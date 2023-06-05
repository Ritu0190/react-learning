import React, {useState, useRef, useMemo, useEffect} from 'react'
import data from '../Components/Filtering/Data/Data'

import Products from '../Components/Filtering/Products';
import Carts from '../Components/Filtering/Carts';
import { BiCart } from "react-icons/bi";
import CatFilter from '../Components/Filtering/CatFilter';
import { Link } from 'react-router-dom';


const Filtering = () => {
    const flyoutRef = useRef(null);
    const [productItems, setProductData] = useState(data.productItems);
    const [cartItem, setCartItem] = useState([]);
    const [genre, setGenre] = useState("");
    const [searchTerm, setSearchTem] = useState("");

      

    const food = useMemo(() => {
        if (genre === "") {
          if (searchTerm === "") {
            return productItems;
          } else {
            return productItems.filter((item) => {
              const searchFields =
                `${item.title.toLowerCase()} ` +
                `${item.category.toLowerCase()}` ;
              return searchFields.includes(searchTerm.toLowerCase());
            });
          }
        }
        return productItems.filter((movie) => {
            const movieGenre = movie.category.map((val) => val.toLowerCase());
            return movieGenre.includes(genre);
          });
       
    }, [genre, searchTerm ]);
    
    useEffect(() => {
        if (searchTerm !== "") {
            setGenre("");
        }
    }, [searchTerm]);

      

    const handleAddProducts = (product) => {
        const ProductExist = cartItem.find((item) => item.id === product.id);
        if(ProductExist) {
            setCartItem(cartItem.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity + 1} : item ))
        }else {
            setCartItem([...cartItem, {...product, quantity : 1}])
        }

    }

    const handleRemoveProduct = (product) => {
        const ProductExist = cartItem.find((item) => item.id === product.id);
        if(ProductExist.quantity === 1) {
            setCartItem(cartItem.filter((item) => item.id !== product.id))
        }else {
            setCartItem(
                cartItem.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1} : item)
            )
        }
    }

    const onLTHHandle = (product) => {
        const ProductSort = food.sort((a, b) => (a.price - b.price))
        setProductData(food.map((item) => item.id === product.id ? {...ProductSort} : item ))
    }

    const onHTLHandle = (product) => {
        const ProductSort = food.sort((a, b) => (b.price - a.price))
        setProductData(food.map((item) => item.id === product.id ? {...ProductSort} : item ))
    }

    const handleClearCart = () => {
        setCartItem([]);
    }

    const handleCardChanges = () => {
        console.log(flyoutRef.current.classList.add('show'))
    }

    
    const flyoutClose = () => {
        console.log(flyoutRef.current.classList.remove('show'))
    }

    // const setGenre1 = (e) => {
    //     console.log(setGenre(e.target.value))
    // }

    // const filterData = (e,product) => {
    //     if(e.target.value === "all") {
    //         return productItems;
    //     }

    //     const ProductExist = food.filter((item) => item.category === e.target.value);
    //     setProductData(ProductExist);

    // }
   

 
  return (
    <div className='w-10/12 mx-auto px-4'>
        <header className='flex justify-between bg-blue-400 p-3 mb-4'>
            <h1>
                Product
            </h1>
            <div className='flex items-center justify-between'>
                <button onClick={handleCardChanges} className='px-4 text-[18px] relative'>
                    <BiCart/>
                    <span className='absolute w-[17px] h-[17px] bg-red-600 rounded-full leading-4 text-[12px] top-[-2px] right-[2px]'>{cartItem.length === 0 ? "0" : cartItem.length}</span>
                </button>
                <Link to="/signup" className='pl-3'>Sing Up</Link>
            </div>
            
        </header>
        <div className='data-filter flex justify-between items-center mb-5'>
            <CatFilter genre={genre} setGenre={setGenre} searchTerm={searchTerm} setSearchTem={setSearchTem} />
            
            <div className='flex justify-end items-center'>
                <span className='font-semibold'>Sort Price By: </span>
                <button onClick={onLTHHandle} className='px-3 py-2 bg-blue-200 rounded mx-5 hover:shadow-lg'>Low to High</button>
                <button onClick={onHTLHandle} className='px-3 py-2 bg-blue-200 rounded hover:shadow-lg'>High to Low</button>
            </div>
        </div>
        <Products productItems={food} cartItem={cartItem} handleAddProducts={handleAddProducts} />
        <Carts cartItem={cartItem} handleRemoveProduct={handleRemoveProduct} handleAddProducts={handleAddProducts} handleClearCart={handleClearCart} handleCardChanges={handleCardChanges} cssClass="cart-wrap fixed top-0  bg-blue-200 w-[350px] h-screen shadow-lg p-5 " flyoutRef={flyoutRef} flyoutClose={flyoutClose}></Carts>
       
    </div>
  )
}

export default Filtering