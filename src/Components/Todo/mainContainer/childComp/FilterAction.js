import React from 'react'
import filterData from '../../filterData.json'
// import Data from '../../todoData'
import { BsGrid, BsListUl } from "react-icons/bs";

const FilterAction = ({filterItem1,  gridViewhandleClick, listViewhandleClick}) => {

  return (
    <div className='action-wrap flex items-center justify-between pt-10 pb-5'>   
        <div className='flex items-center '>
            <button id="list" className='text-[25px] mr-3' onClick={listViewhandleClick}><BsListUl/></button>
            <button id="grid" className='text-[20px] active' onClick={gridViewhandleClick}><BsGrid/></button>
        </div>
        <div>
            <select className='data_filtering capitalize w-72 rounded-[6px] h-[40px] px-3' 
          onChange={filterItem1}>
                <option>Sort By</option>
                {filterData.map((option,i) => (
                    <option value={option.value} key={i}>{option.label}</option>
                ))}
                
            </select>

           
        </div>
    </div>
  )
}

export default FilterAction