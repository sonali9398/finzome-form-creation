import React, { useState } from 'react'

const Form = () => {
    // const [name, setName] = useState("");
    // const[mail, setMail] = useState("");

    // function changeHandler(e){
    //     console.log(e.target.value)
    //     setName(e.target.value)
    // }
    // function emailHandler(e){
    //     console.log(e.target.value)
    //     setMail(e.target.value)
    // }

    const [form, setForm] = useState( {name:"", mail:"", contact:'', weekday:true, mode:'', edu:''} )

    function changeHandler(e){
        const {name, mail, contact, weekday, value}= e.target
        setForm(prevData => {
            return{
                ...prevData,
                [name] : weekday === 'checkbox' ? weekday : value
            }
        });
    }
    console.log(form)
    function submitHandler(e){
        e.preventDefault();
        console.log('Form submitted')
    }
  return (
    <form  onSubmit={submitHandler}>
        <h1>Application Form</h1>
        <input
            name='name'
            type='text'
            placeholder='Enter your Name'
            onChange={changeHandler}
            value={form.name}
        /><br/>
        <input
            name='mail'
            type='email'
            placeholder='Enter your Email'
            onChange={changeHandler}
            value={form.mail}
        /><br/>
        <input
            name='contact'
            type='number'
            placeholder='Enter your Contact Number'
            onChange={changeHandler}
            value={form.contact}
        /><br/>
        <input
            name='weekday'
            id='weekday'
            type='checkbox'
            onChange={changeHandler}
            checked={FormData.weekday}
        />
        <label htmlFor='weekday'>weekday</label>
        <br/>
        <input
            name='mode'
            type='radio'
            onChange={changeHandler}
            value='Online-Mode'
            id='Online-Mode'
            checked={form.mode === 'Online-Mode'}
        />
        <label htmlFor='Online-Mode'>Radio Button</label>
        <input
            name='mode'
            type='radio'
            onChange={changeHandler}
            value='Online-Mode2'
            id='Online-Mode2'
            checked={form.mode === 'Online-Mode2'}
        />
        <label htmlFor='Online-Mode2'>Second Button</label>
        <br/>
        <label htmlFor='edu'>Enter Education Details</label>
        <select
            name='edu'
            id='edu'
            value={form.edu}
            onChange={changeHandler}>   
            <option value="ssc">SSC</option>
            <option value="hsc">HSC</option>
            <option value="grad">Graduation</option>
            <option value="post">Post Grad</option>
            <option value="others">Others</option>
        </select>
        <br/>
        <button>Submit</button>

    </form>
  )
}

export default Form