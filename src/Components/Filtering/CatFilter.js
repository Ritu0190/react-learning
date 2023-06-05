import React from 'react'
import category from './Data/category.json'

const CatFilter = ({ menuItems, setGenre, genre, searchTerm, setSearchTem }) => {
  return (
    <div className="d-flex justify-content-center">
            {/* <select className="px-2 py-1 border w-40 mr-3" value={genre} onChange={(e) => setGenre(e.target.value)}>
                {menuItems.map((item, id) => {
                    return (
                    <option  value={item} key={id}>
                        {item}
                    </option>
                    );
                })}
            </select> */}
            <select className="px-2 py-1 border w-40 capitalize mr-4" value={genre} onChange={(e) => setGenre(e.target.value)} >
          {category.map((option, i) => {
            return (
              <option className="py-2" value={option.value} key={i}>
                {option.label}
              </option>
            );
          })}
        </select>
            
        <input className="border p-1 px-3 my-3" name="searchFood" placeholder="Search Food" value={searchTerm} onChange={(e) => setSearchTem(e.target.value)} />
       </div>
  )
}

export default CatFilter