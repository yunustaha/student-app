"use client"

import React, { useState, createContext } from 'react'
import Grid from '@/app/(pages)/students/_components/grid/Grid';
import Button from '@/components/Button';
import Input from '@/components/Input';

type GridContextType = {
    newStudentOpen: boolean,
    search: string,
    toggleNewStudentOpen: () => any
}

export const GridContext = createContext<GridContextType | null>(null)

const Students = () => {
    const [gridVal, setGridVal] = useState<GridContextType>({ newStudentOpen: false, search: '', toggleNewStudentOpen: () => { setGridVal((current) => ({ ...current, newStudentOpen: false })) } })

    return (
        <main className='flex flex-col bg-student-gray-background h-full w-full px-8 py-5'>
            <div className='flex flex-col lg:flex-row lg:justify-between items-center'>
                <div className='text-2xl mb-4 lg:mb-0 lg:text-2xl font-bold'>Students List</div>
                <div className='flex gap-6 items-center'>
                    <div className='lg:w-52'>
                        <Input onChange={(e) => setGridVal((current) => ({ ...current, search: e.target.value }))} placeholder='Search...'></Input>
                    </div>
                    <div className='lg:w-52'>
                        <Button onClick={() => setGridVal((current) => ({ ...current, newStudentOpen: true }))}>ADD STUDENT</Button>
                    </div>
                </div>
            </div>
            <hr className='bg-student-gray-line rounded my-5' ></hr>
            <GridContext.Provider value={gridVal}>
                <Grid />
            </GridContext.Provider>
        </main>
    )
}

export default Students