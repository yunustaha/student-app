import { Bookmark, GraduationCap, UsdSquare, Vector } from "@/components/Icons";
import Card from "@/components/Card";
import classNames from "classnames";

const Dashboard = () => {
    const getLabel = function (label: string, className?: string): React.ReactNode {
        return (<span className={classNames("text-student-gray text-sm font-medium", className)}>{label}</span>)
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-5">
            <Card icon={<GraduationCap fill='current' className='fill-current text-student-blue w-12 h-9' />} label={getLabel('Student')} amount={243} />
            <Card icon={<Bookmark fill='current' className='fill-current text-student-pink w-7 h-9' />} className="bg-student-pink-light" label={getLabel("Course")} amount={13} />
            <Card icon={<UsdSquare fill='current' className='fill-current text-student-yellow-dark w-8 h-9' />} className="bg-student-yellow-light" label={getLabel("Payments")} amount={'556.000₺'} />
            <Card icon={<Vector fill='current' className='fill-current text-white w-9 h-9' />} className="bg-gradient-to-r from-student-orange to-student-yellow" label={getLabel("Users", 'text-white')} amount={3} />
        </div>
    )
}

export default Dashboard