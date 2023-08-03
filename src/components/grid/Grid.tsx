import React from 'react'
import GridRows from './GridRows'

const Grid = () => {
    return (
        <div className='flex flex-col'>
            <div className='grid grid-cols-7 text-student-gray-field text-xs font-semibold justify-around px-3'>
                <div className='col-start-2'>Name</div>
                <div>Email</div>
                <div>Phone</div>
                <div>Website</div>
                <div>Company Name</div>
            </div>
            <GridRows />
        </div>
    )
}

export default Grid