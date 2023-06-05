import React, {useState} from 'react'
import validation from './Validation'

const SignUpForm = () => {
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})
   
    const handleChange = (e) => {
            setValues({
                ...values, [e.target.name] : e.target.value,
            })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values))
        console.log(errors.length)
    }

    

  return (
    <div className='w-4/12 mx-auto bg-blue-100 p-8 mt-10 shadow-lg'>
        <h2 className='text-center m-0 mb-6 font-bold text-2xl'>Create Account</h2>
        {errors.length === 0 && <p>Account created successfull</p>}
        <form>
            <div className='name mb-3'>
                <label className='pb-2 block'>Full Name</label>
                <input className="block w-full h-[35px] text-sm text-slate-500 border border-blue-700 p-2" type="text"  name="fullname" value={values.fullname} onChange={handleChange}/>
                {errors.fullname && <span className='error'>{errors.fullname}</span>}
            </div>
            <div className='email mb-3'>
                <label className='pb-2 block'>Email</label>
                <input className="block w-full  h-[35px] text-sm text-slate-500 border border-blue-700 p-2" type="email" name="email" value={values.email} onChange={handleChange}/>
                {errors.email && <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
                <label className='pb-2 block'>Password</label>
                <input className="block w-full  h-[35px] text-sm text-slate-500 border border-blue-700 p-2" type="password" name="password" value={values.password} onChange={handleChange}/>
                {errors.password && <span className='error'>{errors.password}</span>}
            </div>
            <button className='text-center w-3/12 mx-auto mt-10 bg-blue-500 p-3 text-white rounded hover:shadow-lg' onClick={handleFormSubmit}>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm