import React from 'react'
import { BiSearch, BiBell } from "react-icons/bi";

const TopSec = ({ filterValue, setfilterValue,  count }) => {
  return (
    <>
        <div className='search_wrap items-center grid grid-cols-3 gap-4 '>
            <div className='relative'>
                <input type="search" name="search" value={filterValue} onChange={(e) => setfilterValue(e.target.value)} placeholder='Search Task' className='h-11 rounded w-full pl-3 pr-7'/>
            {/* <input value={searchText} onChange={handleSearchTextChange} placeholder="search"/> */}
                <span className='absolute top-0 bottom-0 right-2 text-[22px] w-5 h-5 m-auto'><BiSearch/></span>
            </div>
            <div className='text-center '><span>2023, Jun 02</span></div>
            <div className='text-right flex items-center justify-end'>
                <button className='text-violet-700 text-[25px]'><BiBell/></button>
                <button className='ml-4 bg-violet-700 text-white rounded p-3 px-4'>Add New Tasks</button>
            </div>
        </div>
        <h1 className='font-medium my-5 text-center sm:text-left sm:my-8 md:text-2xl text-lg dark:text-slate-200'>Today's tasks ({count} task)</h1>
    </>
  )
}

export default TopSec