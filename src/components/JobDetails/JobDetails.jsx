import { AiOutlineDollar } from 'react-icons/ai';
import { BsCalendar3, BsTelephone } from 'react-icons/bs';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplications } from '../../utility/localstorage';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const selectedJob = jobs.find(job => job.id === id);

    const handleJobApply = () => {
        saveJobApplications(id);
        toast("Congratulations! You have successfully applied for the job!");
    }
    return (
        <div>
            <div className="text-center bg-gray-50 py-12">
                <h1 className="text-3xl font-bold">Job Details</h1>
                <h2 className="text-5xl py-2 font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] inline-block text-transparent bg-clip-text">{selectedJob.job_title}</h2>
                <div className='flex justify-center my-4'>
                    <img src={selectedJob.logo} alt="" className='object-cover max-w-xs' />
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 my-8">
                <div className="col-span-2 lg:col-span-3 space-y-8">
                    <p><span className="font-bold">Job Description : </span>{selectedJob.job_description}</p>
                    <p><span className="font-bold">Job Responsibility : </span>{selectedJob.job_responsibility}</p>
                    <h2 className="text-xl font-bold">Educational Requirements : </h2>
                    <p>{selectedJob.educational_requirements}</p>
                    <h2 className="text-xl font-bold">Experiences : </h2>
                    <p>{selectedJob.experiences}</p>
                </div>
                <div className="col-span-2">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <div>
                            <h2 className="text-xl font-bold border-b border-b-gray-300 py-2">Job Details</h2>
                            <div className="my-4 space-y-4">
                                <p className='flex items-center gap-2'><AiOutlineDollar className='text-2xl text-[#9873FF]'></AiOutlineDollar><span><span className="font-bold">Salary : </span>{selectedJob.salary} (Per month)</span></p>
                                <p className='flex items-center gap-2'><BsCalendar3 className='text-xl text-[#9873FF]'></BsCalendar3><span><span className="font-bold">Job-title : </span>{selectedJob.job_title}</span></p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold border-b border-b-gray-300 py-2">Contact Information</h2>
                            <div className='my-4 space-y-4'>
                                <p className='flex items-center gap-2'><BsTelephone className='text-xl text-[#9873FF]'></BsTelephone><span><span className="font-bold">Phone : </span>{selectedJob.contact_information.phone}</span></p>
                                <p className='flex items-center gap-2'><HiOutlineMail className='text-xl text-[#9873FF]'></HiOutlineMail><span><span className="font-bold">Email : </span>{selectedJob.contact_information.email}</span></p>
                                <p className='flex items-start gap-2'><HiOutlineLocationMarker className='text-2xl text-[#9873FF]'></HiOutlineLocationMarker><span><span className="font-bold">Address : </span>{selectedJob.contact_information.address}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='my-4'>
                        <button onClick={handleJobApply} className='btn w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-bold'>Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={2000} draggable />
        </div>
    );
};

export default JobDetails;