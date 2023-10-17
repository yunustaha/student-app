import React from "react";
import { Close } from "../../../../../components/Icons";
import { useFormik } from "formik"
import Button from "@/components/Button";
import Input from "@/components/Input";


type ModalProps = {
    showModal: boolean,
    setShowModal: (React.Dispatch<boolean>),
    title: string,
    handleSubmit: (values: FormDataType) => any,
    data?: FormDataType
}

export type FormDataType = {
    firstName: string,
    lastName: string,
    email: string,
    company: string,
    phone: string,
    domain: string,
}

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, handleSubmit, title, data }) => {
    const formik = useFormik<FormDataType>({
        initialValues: data ?? {
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
                        <div className="relative my-6 mx-auto w-2/3 max-w-3xl">
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
                                        <Input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            required
                                            placeholder="Name"
                                            value={formik.values.firstName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <Input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            required
                                            placeholder="Last Name"
                                            value={formik.values.lastName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="Email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            placeholder="Phone"
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <Input
                                            id="domain"
                                            name="domain"
                                            type="text"
                                            required
                                            placeholder="Website"
                                            value={formik.values.domain}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <Input
                                            id="company"
                                            name="company"
                                            type="text"
                                            required
                                            placeholder="Company"
                                            value={formik.values.company}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <Button
                                            type="submit"
                                            value='submit'
                                        >
                                            Save
                                        </Button>
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