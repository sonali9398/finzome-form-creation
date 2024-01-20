import React, { useState } from 'react'
import data from './Mock.json';

const SimpleForm = () => {
    const [contact, setContact] = useState(data);
    const [addFormData, setAddFormData] = useState({
        name:'', mail:'', number:'', weekday:'', gender:'', dob:''
    })

    function handleForm(e){
        e.preventDefault();

        const fieldName = e.target.value();
    }

  return (
    <>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Mail</th>
                <th>Contact</th>
                <th>Weekday</th>
                <th>Gender</th>
                <th>DOB</th>
            </tr>
        </thead>
        <tbody>
            {
                contact.map((contact) => {
                    <tr>
                        <td>{contact.fullName}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phoneNumber}</td>
                        <td>{contact.address}</td>
                        <td>{contact.address}</td>
                        <td>{contact.address}</td>
                    </tr>
                })
            }
                
            </tbody>
    </table>
    <h2>Add a new applicant</h2>
    <form>
        <input
            name='name'
            type='text'
            placeholder='Enter a name'
            required='required'
        />
        <br/>
        <input
            type='text'
            placeholder='Enter a mail'
            name='mail'
            required='required'
        />
        <br/>
        <input
            type='number'
            placeholder='Enter a contact'
            name='number'
            required='required'
        />
        <br/>
        <input
            type='text'
            placeholder='Enter a weeday'
            name='weekday'
            required='required'
        />
        <br/>
        <input
            type='text'
            placeholder='Enter a Gender'
            name='gender'
            required='required'
        />
        <br/>
        <label>Enter DOB</label>
        <input
            type='date'
            placeholder='Enter a DOB'
            name='dob'
            required='required'
        />
        <br/>
        <button>Add</button>
    </form>
    </>
  )
}

export default SimpleForm