import classNames from 'classnames'
import React from 'react'

type CardProps = {
    icon: React.ReactNode,
    type?: 'pink' | 'yellow' | 'yellow-gradient',
    label: React.ReactNode,
    amount: number | string
}

const Card: React.FC<CardProps> = ({ icon: Icon, label, amount, type }) => {
    return (
        <div className={classNames(
            "flex flex-col p-5 gap-y-3 w-full min-w-[187px] h-[157px] rounded bg-student-blue-light",
            {
                'bg-student-pink-light': type == 'pink',
                'bg-student-yellow-light': type == 'yellow',
                'bg-gradient-to-r from-student-orange to-student-yellow': type == 'yellow-gradient'
            }
        )}>
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