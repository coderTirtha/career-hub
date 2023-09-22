import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";
import { BsChevronDown } from "react-icons/bs";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(() => {
        const storedJobIds = getStoredJobApplications();
        if (storedJobIds.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            setAppliedJobs(jobsApplied);
        }
    }, [])
    return (
        <div>
            <div className="bg-gray-50 text-center py-12">
                <h1 className="text-5xl font-bold">Total Applied Jobs: {appliedJobs.length}</h1>
            </div>
            <div className="flex justify-end my-4">
                <div className="dropdown">
                    <label tabIndex={0} className="btn m-1">Filter by <BsChevronDown></BsChevronDown></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>All</a></li>
                        <li><a>Remote</a></li>
                        <li><a>Onsite</a></li>
                    </ul>
                </div>
            </div>
            <div>
                {
                    (appliedJobs.length === 0) ? <p className="text-center my-8 text-gray-400 border-b-2 border-b-gray-200 py-8">You haven't applied any job yet!</p> : appliedJobs.map(application => <AppliedJob key={application.id} application={application}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;