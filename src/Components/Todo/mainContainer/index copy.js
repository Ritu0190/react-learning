import React, {useState, useRef, useEffect} from 'react'
import TopSec from './childComp/TopSec'
import FilterAction from './childComp/FilterAction'
import TodoCard from './childComp/TodoCard'
import Data from '../todoData'
import Sidebar from '../Sidebar/Sidebar'
import TodoForm from './childComp/TodoForm'

// const allCate = ['all', ...new Set(todoData.map((item) => item.taskstatus))]

const menuItems = [...new Set(Data.map((Val) => Val.category))];

const TodoMIndex = () => {
    const [toDoList, setToDoList] = useState(Data);
    const [selectedCategory, setSelectedCategory] = useState([])
    

    const [filterValue, setfilterValue] = useState("");

    const [updateData, setUpdateData] = useState(null);


  const addTask = (userInput, userDesc, useDate) => {
    // alert("you clicked me")
    let copy = [...toDoList];
    copy = [{ id: toDoList.length + 1, title: userInput, date: useDate, desc: userDesc, complete: false }, ...copy];

    // setToDoList(movies.map((item) => item.id === userInput.id ? {...ProductSort} : item ))
    setToDoList(copy);
  };

// 
localStorage.setItem("userData", JSON.stringify(Data));

useEffect(() => {
 const data = localStorage.getItem("userData");
//  console.log("data: ", JSON.parse(data));
 setToDoList(JSON.parse(data))
 }, []);

  const handleStatusChange = (event, category) => {
    if( event.target.value === "all") {
        setToDoList(toDoList)
      return
    }

    let copy1 = [...toDoList];
    console.log("assdasd", copy1);

    const newItem =  copy1.filter((cat) => cat.category === event.target.value)
    setToDoList(newItem);
  }

  const handleTaskChange = (event, category) => {
    if( event.target.getAttribute("data-value") === "all") {
        setToDoList(Data)
      return
    }

    const newItem =  Data.filter((cat) => cat.category === event.target.getAttribute("data-value"))
    setToDoList(newItem);
  }
  
  const deleteItem = (id) => {
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  const formRef = useRef(null);

  const handleClick = () => {
    formRef.current?.scrollIntoView({behavior: 'smooth'});
  };


  const filterItem = (curcat) => {
    alert('sdasd')
    const newItem = toDoList.filter((newVal) => {
      return newVal.category === curcat; 
        	// comparing category for displaying data
    });
    setToDoList(newItem);
    console.log(toDoList)
  };

  return (
    < >
        <div className='bg-slate-100 h-screen w-60 w-2/12 fixed dark:bg-slate-800 z-20 left-0 block'>
           <Sidebar handleTaskChange={handleTaskChange} />
        </div>
        <div className=' pt-5 pb-8  px-3  w-8/12 m-auto min-h-screen'>
       
            <TopSec filterValue={filterValue} setfilterValue={setfilterValue}/>
            <TodoForm addTask={addTask} formRef={formRef}/>
            <FilterAction  handleStatusChange={handleStatusChange} filterItem={filterItem} setItem={setToDoList} menuItems={menuItems}/>
            <TodoCard toDoList={toDoList.filter(item =>item.title.toLowerCase().includes(filterValue.toLowerCase())+ item.date.toLowerCase().includes(filterValue.toLowerCase()))} deleteItem={deleteItem} handleClick={handleClick}/>
        </div>
    </>
  )
}

export default TodoMIndex
