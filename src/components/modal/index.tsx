import React from "react";
import { Close } from "../Icons";
import { useFormik } from "formik"


type ModalProps = {
    showModal: boolean,
    setShowModal: (React.Dispatch<boolean>),
    title: string,
    handleSubmit: (values: FormDataType) => any
}

export type FormDataType = {
    firstName: string,
    lastName: string,
    email: string,
    company: string,
    phone: string,
    domain: string,
}

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, handleSubmit, title }) => {
    const formik = useFormik<FormDataType>({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            phone: "",
            domain: "",
        },
        onSubmit: handleSubmit,
    });

    return (
        <>
            {showModal &&
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative my-6 mx-auto w-1/3 max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-center justify-between gap-2 p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {title}
                                    </h3>
                                    <Close
                                        className="cursor-pointer w-6 h-6 float-right"
                                        onClick={() => setShowModal(false)}
                                    />
                                </div>
                                <form onSubmit={formik.handleSubmit}>

                                    <div className="relative p-6 flex flex-col gap-4">
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            required
                                            placeholder="Name"
                                            className='student-input'
                                            value={formik.values.firstName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            required
                                            placeholder="Last Name"
                                            className='student-input'
                                            value={formik.values.lastName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="Email"
                                            className='student-input'
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            placeholder="Phone"
                                            className='student-input'
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <input
                                            id="domain"
                                            name="domain"
                                            type="url"
                                            required
                                            placeholder="Website"
                                            className='student-input'
                                            value={formik.values.domain}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <input
                                            id="company"
                                            name="company"
                                            type="text"
                                            required
                                            placeholder="Company"
                                            className='student-input'
                                            value={formik.values.company}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className={"student-button"}
                                            type="submit"
                                            value='submit'
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>}
        </>
    )
}

export default Modal