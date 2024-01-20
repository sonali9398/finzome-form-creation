import React from 'react'

const EditRow = () => {
  return (
    <div>
        <tr>
            <td>
                <input
                    type='text'
                    required='required'
                    placeholder='Enter a name'
                    name = 'fullName'
                />
                <input
                    type='text'
                    required='required'
                    placeholder='Enter a Mail'
                    name = 'Mail'
                />
                <input
                    type='number'
                    required='required'
                    placeholder='Enter Contact No'
                    name = 'contact'
                />
            </td>
        </tr>
    </div>
  )
}

export default EditRow