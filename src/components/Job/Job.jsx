import {GrLocation} from 'react-icons/gr';
import {AiOutlineDollar} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, salary, job_type } = job;
    return (
        <div className="flex flex-col justify-between border-2 border-gray-200 rounded-lg p-10">
            <img src={logo} alt="" className='object-cover w-[120px]' />
            <div className="space-y-2 my-8">
                <h1 className="text-2xl font-bold">{job_title}</h1>
                <p className="text-lg font-semibold text-gray-500">{company_name}</p>
                <div className="flex gap-4">
                    <button className="px-5 py-2 border border-[#7E90FE] font-bold rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF] inline-block text-transparent bg-clip-text">{remote_or_onsite}</button>
                    <button className="px-5 py-2 border border-[#7E90FE] font-bold rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF] inline-block text-transparent bg-clip-text">{job_type}</button>
                </div>
                <div className='flex items-center gap-6'>
                    <p className='flex items-center gap-2 text-lg'><GrLocation></GrLocation>{location}</p>
                    <p className='flex items-center gap-2 text-lg'><AiOutlineDollar></AiOutlineDollar>{salary}</p>
                </div>
            </div>
            <Link to={`/job/${id}`}><button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-bold">View Details</button></Link>
        </div>
    );
};

export default Job;