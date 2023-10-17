import React from 'react'
import GridRows from './GridRows'

const Grid = () => {
    return (
        <div className='w-full overflow-x-auto'>
            <div className='flex flex-col min-w-[1000px]'>
                <div className='grid grid-cols-7 text-student-gray-field text-xs font-semibold justify-around px-3'>
                    <div className='col-start-2'>Name</div>
                    <div>Email</div>
                    <div>Phone</div>
                    <div>Website</div>
                    <div>Company Name</div>
                </div>
                <GridRows />
            </div>
        </div>
    )
}

export default Grid