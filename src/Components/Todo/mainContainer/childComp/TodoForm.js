import React, { useState } from 'react'
import validation from './Validation';
import { BsCheck2, BsX } from "react-icons/bs";

const TodoForm = ({ addTask, formRef }) => {

    const [values, setValues] = useState({
        title: "",
        date: "",
        desc: ""
    })


    const [ userOption, setUserOption ] = useState('');

    const [errors, setErrors] = useState({})
    const [submitting, setSubmitting] = useState(false);
   
    const handleChange = (e) => {
            setValues({
                ...values, [e.target.name] : e.target.value,
            })
    }



    const handleChangeMain = (e) => {
        setUserOption(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values))
        if(Object.keys(errors).length === 0) {
            addTask(values.title, values.desc, values.date, userOption);
            setUserOption("");
            setValues({
                title: "",
                date: "",
                desc: ""
            })
        }
        setSubmitting(true);
        setTimeout(function() {
            setSubmitting(false);
        }, 4000);
        
    }



    return (<div>
        {Object.keys(errors).length === 0 && submitting ? (
            <span className="success flex items-center justify-center rounded-[6px] p-3 py-2 text-green-500 fixed top-20 text-center bg-white  left-0 right-0  w-72  m-auto border-b-2 shadow-lg "><BsCheck2/> <span>Successfully Task is created</span></span>
        ) : null}
        {Object.keys(errors).length !== 0 && submitting ? (
            <span className="success flex items-center justify-center  rounded-[6px] p-3 py-2 text-red-500 fixed top-20 text-center bg-white  left-0 right-0  w-72  m-auto border-b-2 shadow-lg "><BsX/> <span>Incomplete task is created</span></span>
        ) : null}
        <form onSubmit={handleSubmit} ref={formRef} className="bg-white rounded-[10px] shadow-lg p-7 ">
            <div className="grid grid-cols-2 gap-6">
                <div className='form-group'>
                    <label className="block mb-2" htmlFor="title">Title</label>
                    <input  type="text" name="title" value={values.title} onChange={handleChange} placeholder="Enter task..." className="bg-slate-100 border-2 block h-12 w-full rounded-[8px] hover:border-violet-500 focus:border-violet-500 p-2"/>
                    {errors.title && <span className='error text-red-500 text-[10px]'>{errors.title}</span>}
                </div>
                <div className='form-group'>
                    <label className="block mb-2" htmlFor="date">Date</label>
                    <input   type="date" name="date" value={values.date} onChange={handleChange} placeholder="Enter Date..." className="bg-slate-100 border-2 block h-12 hover:border-violet-500 focus:border-violet-500 w-full rounded-[8px] p-2"/>
                    {errors.date && <span className='error text-red-500 text-[10px]'>{errors.date}</span>}
                </div>
                <div className='form-group'>
                    <label className="block mb-2" htmlFor="desc">Description (Optional)</label>
                    <textarea id="w3review" name="desc"  rows="2" cols="50" value={values.desc} onChange={handleChange} placeholder="Enter desc..." className="bg-slate-100 border-2 hover:border-violet-500 focus:border-violet-500 block  w-full rounded-[8px] p-2"/>
                    {errors.desc && <span className='error text-red-500 text-[10px]'>{errors.desc}</span>}
                </div>
                <div className='form-group'>
                    <label className="block mb-2 text-white" htmlFor="title">Description (Optional)</label>
                    <select onChange={handleChangeMain} className="bg-slate-100 border-2 hover:border-violet-500 focus:border-violet-500 block h-12 w-full rounded-[8px] p-2">
                        <option value={userOption}>Main</option>
                    </select>
                </div>
                <div className='form-group'>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label htmlFor="vehicle1" className='mb-3 inline-block ml-2'> Mark as important</label><br/>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                    <label htmlFor="vehicle2" className='inline-block ml-2'> Mark as completed</label><br/>
                </div>
            </div>
            <div className='form-group text-center mt-3'>
                <button className='bg-violet-700 text-white rounded p-3 px-16'>Submit</button>
            </div>
{/*             
            <input value={userDesc} type="text" onChange={handleChangeDesc} placeholder="Enter desc..."/> */}
            
           
            
        </form></div>
    );
};

export default TodoForm;