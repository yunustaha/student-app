import classNames from 'classnames'
import React from 'react'

type LogoProps = {
    size: 'md' | 'lg',
    className?: string
}

const Logo: React.FC<LogoProps> = ({ size, className }) => {
    return (
        <div className={classNames('flex gap-3', className)}>
            <div className='w-[0.4rem] bg-student-yellow'></div>
            <div className={classNames('text-3xl font-bold', size == 'md' && 'text-xl')} >MANAGE COURSES</div>
        </div>
    )
}

export default Logo