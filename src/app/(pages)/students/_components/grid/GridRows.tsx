import Image from 'next/image'
import React, { useEffect, useState, useContext } from 'react'
import { ArrowLeft, ArrowRight, Dropdown, Pen, Trash } from '../../../../../components/Icons'
import axios from 'axios'
import { Root, User } from './UserModel'
import { GridContext } from '@/app/(pages)/students/page'
import Modal, { FormDataType } from '../modal'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classNames from 'classnames'

type GridRowProps = {
    children: React.ReactNode,
    cursor?: 'pointer',
    onClick?: () => any
}

const GridRow: React.FC<GridRowProps> = ({ children, cursor, onClick }) => {
    return (
        <span className={classNames('overflow-x-auto', { 'cursor-pointer': cursor == 'pointer' })} onClick={onClick}>{children}</span>
    )
}


type ModalDataType = {
    open: boolean,
    title: string,
    data?: FormDataType,
    handleSubmit: (values: FormDataType) => any
}

const GridRows = () => {
    const [users, setUsers] = useState<Root>()
    const [skip, setSkip] = useState<number>(0)
    const [modalData, setModalData] = useState<ModalDataType>({ open: false, title: '', handleSubmit: () => { } })
    const gridVal = useContext(GridContext);

    useEffect(() => {
        getUsers(true);
    }, [])

    useEffect(() => {
        searchOrNewUser();
    }, [gridVal])

    const searchOrNewUser = function (): void {
        if (gridVal && gridVal.search) {
            axios({
                method: 'GET',
                url: 'https://dummyjson.com/users/search',
                params: {
                    q: gridVal.search,
                }
            }).then((response) => setUsers(response.data)).catch(() => toast.error("Error!"))
        } else if (gridVal && gridVal.newStudentOpen) {
            gridVal.toggleNewStudentOpen();
            setModalData({
                title: 'Add Student',
                open: true,
                handleSubmit: (values) => { addUser(values) }
            })
        }
    }

    const getUsers = function (right: boolean): void {
        const skipValue = users ? (users.users.length == 6 ? right ? skip + 6 : skip != 0 ? skip - 6 : 0 : right ? skip : skip - 6) : 0;

        axios({
            method: 'GET',
            url: 'https://dummyjson.com/users',
            params: {
                limit: 6,
                skip: skipValue
            }
        }).then((response) => {
            setSkip(skipValue)
            setUsers(response.data)
        }
        ).catch(() => toast.error("Error!"))
    }

    const deleteUser = function (id: number): void {
        axios({
            method: 'DELETE',
            url: `https://dummyjson.com/users/${id}`,
        }).then((response) => {
            const deletedUser: User = response.data;
            if (users) {
                let updatedUsers: Root = { ...users };
                updatedUsers.users = updatedUsers.users.filter((val) => val.id !== deletedUser.id);
                setUsers(updatedUsers);
            }
            toast.success("Success!")
        }).catch(() => toast.error("Error!"))
    }

    const updateUser = function (id: number, updatedData: FormDataType): void {
        axios({
            method: 'PUT',
            url: `https://dummyjson.com/users/${id}`,
            data: {
                ...updatedData,
                company: { name: updatedData.company }
            }
        }).then((response) => {
            const updatedUser: User = response.data;
            if (users) {
                let updatedUsers: Root = { ...users };
                updatedUsers.users = [...updatedUsers.users.filter((val) => val.id !== updatedUser.id), updatedUser];
                console.log('updatedUsers: ', updatedUsers);
                setUsers(updatedUsers);
            }
            toast.success("Success!")
        }).catch(() => toast.error("Error!"))
    }

    const addUser = function (data: FormDataType): void {
        axios({
            method: 'POST',
            url: `https://dummyjson.com/users/add`,
            data: {
                ...data,
                company: { name: data.company }
            }
        }).then((response) => {
            const newUser: User = response.data;
            if (users) {
                let updatedUsers: Root = { ...users };
                updatedUsers.users = [...updatedUsers.users, newUser];
                console.log('updatedUsers: ', updatedUsers);
                setUsers(updatedUsers);
            }
            toast.success("Success!")
        }).catch(() => toast.error("Error!"))
    }


    return (
        <>
            <div className='flex flex-col w-full overflow-x-scroll'>
                <div className='min-w-[1000px] grid grid-cols-7 text-student-gray-field text-xs font-semibold justify-around px-3'>
                    <div className='col-start-2'>Name</div>
                    <div>Email</div>
                    <div>Phone</div>
                    <div>Website</div>
                    <div>Company Name</div>
                </div>
                <div className='min-w-[1000px]'>
                    {users && users.users.map((val, index) => {
                        return (
                            <div key={index} className='grid grid-cols-7 text-sm items-center w-full h-20 rounded bg-white mt-5 p-3'>
                                <Image className='rounded' src={val.image} height={110} width={64.1} alt={'Profile Photo'} />
                                <GridRow>{val.firstName + ' ' + val.lastName}</GridRow>
                                <GridRow>{val.email}</GridRow>
                                <GridRow>{val.phone}</GridRow>
                                <GridRow cursor='pointer' onClick={() => window.open('https://' + val.domain)}>{val.domain}</GridRow>
                                <GridRow>{val.company.name}</GridRow>
                                <div className='flex gap-8'>
                                    <Pen onClick={() => setModalData({
                                        title: 'Update Student',
                                        open: true,
                                        data: {
                                            firstName: val.firstName,
                                            lastName: val.lastName,
                                            email: val.email,
                                            company: val.company.name,
                                            phone: val.phone,
                                            domain: val.domain,
                                        },
                                        handleSubmit: (values) => { updateUser(val.id, values) }
                                    })}
                                        className='cursor-pointer'
                                    />
                                    <Trash onClick={() => deleteUser(val.id)} className='cursor-pointer' />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='flex justify-start mt-8'>
                <div className='flex gap-6 items-center'>
                    <div className='flex items-center mr-5'>
                        <div className='text-student-gray-grid text-sm font-normal mr-1'>Rows per page:</div>
                        <div className='text-sm font-normal text-student-gray-gridPage'>{6}</div>
                        <Dropdown />
                    </div>
                    <div className='text-student-gray-grid text-sm font-normal'>
                        {skip} of {users ? users.total : ''}
                    </div>
                    <div className='flex gap-1'>
                        <ArrowLeft onClick={() => getUsers(false)} className='cursor-pointer hover:brightness-75' />
                        <ArrowRight onClick={() => getUsers(true)} className='cursor-pointer hover:brightness-75' />
                    </div>
                </div>
            </div>
            {modalData.open && <Modal handleSubmit={modalData.handleSubmit} title={modalData.title} showModal={modalData.open} data={modalData.data} setShowModal={(val) => setModalData(current => ({ ...current, open: val }))} />}
        </>
    )
}

export default GridRows