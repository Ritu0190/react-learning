import React from 'react'
// import todoData from '../todoData.json'
import filterData from '../filterData.json'

const Sidebar = ({handleTaskChange, handleClickEditData, activeId}) => {

  return (
    <div className='sidebarNav h-full flex flex-col'>
        <h3 className='page_title font-bold uppercase text-center mt-8'>To - Do List</h3>
        <div className="btn_wrap my-8 text-center">
            <button onClick={handleClickEditData} className='bg-violet-700 text-white rounded p-3 px-16'>Add new task</button>
        </div>
        {/* <nav> */}
            <div className='sideNav'>
                {/* <li value={genre} onClick={(e) => setGenre(e.target.value)}>Today's Task</li> */}
                {filterData.map((option, i) => (
                    <button className={`capitalize px-4 py-2 w-full text-left  ${activeId === option.value ? "active" : ""}`} key={i}  data-value={option.value}  onClick={handleTaskChange}>
                        {option.label}
                    </button>
                ))}
            </div>
        {/* </nav> */}
    </div>
  )
}

export default Sidebar