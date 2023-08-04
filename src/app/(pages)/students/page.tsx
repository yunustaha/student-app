"use client"

import React, { useState, createContext } from 'react'
import Grid from '@/components/grid/Grid';

type GridContextType = {
    newStudentOpen: boolean,
    search: string,
    toggleNewStudentOpen: () => any
}

export const GridContext = createContext<GridContextType | null>(null)

const Students = () => {
    const [gridVal, setGridVal] = useState<GridContextType>({ newStudentOpen: false, search: '', toggleNewStudentOpen: () => { setGridVal((current) => ({ ...current, newStudentOpen: false })) } })

    return (
        <div className='flex flex-col bg-student-gray-background h-full w-full px-8 py-5'>
            <div className='flex flex-col lg:flex-row lg:justify-between items-center'>
                <div className='text-2xl mb-4 lg:mb-0 lg:text-2xl font-bold'>Students List</div>
                <div className='flex gap-6 items-center'>
                    <div className='lg:w-[212px]'>
                        <input className='student-input' onChange={(e) => setGridVal((current) => ({ ...current, search: e.target.value }))} placeholder='Search...'></input>
                    </div>
                    <div className='lg:w-[199px]'>
                        <button onClick={() => setGridVal((current) => ({ ...current, newStudentOpen: true }))}
                            className='student-button '>ADD STUDENT</button>
                    </div>
                </div>
            </div>
            <div className='bg-student-gray-line h-[1px] opacity-100 rounded my-5' ></div>
            <GridContext.Provider value={gridVal}>
                <Grid />
            </GridContext.Provider>
        </div>
    )
}

export default Students