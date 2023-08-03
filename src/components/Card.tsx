import classNames from 'classnames'
import React from 'react'

type CardProps = {
    icon: React.ReactNode,
    className?: string,
    label:  React.ReactNode,
    amount: number | string
}

const Card: React.FC<CardProps> = ({ icon: Icon, label, amount, className }) => {
    return (
        <div className={classNames("flex flex-col p-5 gap-y-3 w-full min-w-[187px] h-[157px] rounded bg-student-blue-light", className)}>
            <div className={'flex flex-col gap-y-3 items-start'}>
                {Icon}
                {label}
            </div>
            <div className='ml-auto text-3xl font-bold'>
                {amount}
            </div>
        </div>
    )
}

export default Card