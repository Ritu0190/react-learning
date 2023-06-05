import React, {useState} from 'react'
import { BsFillTrash3Fill, BsFillStarFill, BsStar, BsThreeDotsVertical, BsCalendar3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

const TodoItem = ({ item, removeHandler, handleClickEditData, innerCard, leftCard, rightCard, descClass }) => {
    // const [readMore, setReadMore] = useState(true)
    const [markImp, setMarkImp] = useState(true)
    const [taskStatus, setTaskStatus] = useState(true)
    if (item.length === 0) {
        return (
          <div className='text-center mt-24'>
            <h1 className='text-3xl'>Task Not Found</h1>
          </div>
        )
      }
    return (
        <div>
            <Link to="/" className='ml-auto mr-4 w-min whitespace-nowrap overflow-hidden max-w-[10rem] text-center text-ellipsis bg-rose-200 text-rose-600 px-4 py-1 rounded-t-md transition dark:bg-slate-700 dark:text-slate-200 block hover:bg-rose-300 dark:hover:bg-rose-500'>{item.tag}</Link>
            <div className={innerCard} key={item.id}>
                <div  className={leftCard}>
                    <h5 className='font-semibold mb-2'>{item.title}</h5>
                    <p className={`${descClass} `}>{item.desc}</p>
                    <div className='mt-auto flex w-full items-center'><span><BsCalendar3/></span><span className='pl-2'>{item.date}</span></div>
                </div>
                <div className={rightCard}>
                    <button className={`${taskStatus ? 'bg-emerald-200 text-emerald-800': 'bg-amber-200 text-amber-800'}  mr-4 order-0 rounded-full font-medium px-3 py-1 capitalize`} onClick={() => setTaskStatus(!taskStatus)}>{taskStatus ? "Completed": "Uncompleted"}</button>
                    <button className='transition hover:text-slate-700 dark:hover:text-slate-200 ml-auto text-[20px]' onClick={() => setMarkImp(!markImp)}>{markImp ? <BsStar/> : <BsFillStarFill style={{color:'#f43f5e'}}/>}</button>
                    <button className='ml-2 transition hover:text-slate-700 dark:hover:text-slate-200  text-[22px]'  onClick={() => removeHandler(item.id)}><BsFillTrash3Fill/></button>
                    <button className='transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center dark:hover:text-slate-200 hover:text-slate-700 text-[20px]' onClick={handleClickEditData}><BsThreeDotsVertical/></button>
                </div>
            </div>  
        </div>
    )
  }

export default TodoItem