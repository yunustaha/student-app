import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button className='bg-student-orange w-full p-3 rounded text-white text-sm font-medium hover:brightness-95' {...props}>{children}</button>
    )
}

export default Button