import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { removeJobApplications } from "../../utility/localstorage";
const AppliedJob = ({ application }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, salary, location } = application;
    const handleCancellation = () => {
        removeJobApplications(id);
        toast.warn(`You removed the application for ${job_title}`);
        setTimeout(() => {
            window.location.reload();
        }, 3000)
    }
    return (
        <div className="my-4 border-2 border-gray-200 rounded-md p-4">
            <div className="flex flex-col md:flex-row gap-4">
                <figure className="bg-gray-100 flex justify-center items-center rounded-md px-6 py-4">
                    <img src={logo} alt="" className="w-[100px]" />
                </figure>
                <div className="space-y-2 flex-1">
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
                <div className="flex flex-col gap-2 justify-center items-center">
                    <Link to={`/job/${id}`}><button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-bold">View Details</button></Link>
                    <button onClick={() => handleCancellation()} className="btn btn-outline btn-error">Cancel</button>
                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default AppliedJob;