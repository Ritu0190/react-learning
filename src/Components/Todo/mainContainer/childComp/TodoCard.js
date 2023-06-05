import React from 'react'
// import todoData from '../../todoData.json'
import TodoItem from './TodoItem';

const TodoCard = ({ handleClickEditData, data, removeHandler, viewclass, innerCard, leftCard, rightCard, descClass }) => {

    const renderTours = data.map((item) => (
        <TodoItem key={item.id} item={item} removeHandler={removeHandler} handleClickEditData={handleClickEditData} innerCard={innerCard} leftCard={leftCard} rightCard={rightCard} descClass={descClass}/>
      ))
    
    // const [activeId1, setActiveId1] = useState();
  return (
    <div className={viewclass}>
        {renderTours}
       
        <div className='card'>
            <button className='border-2 border-slate-300 text-slate-400 w-full rounded-lg border-dashed transition hover:bg-slate-300
               hover:text-slate-500 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-300 h-52 ' onClick={handleClickEditData}>Add New Task</button>
        </div>
    </div>
  )
}

export default TodoCard