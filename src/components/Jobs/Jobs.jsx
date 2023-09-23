import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utility/localstorage";
import AvailableJob from "../AvailableJob/AvailableJob";

const Jobs = () => {
    const [availableJobs, setAvailableJobs] = useState([]);
    const jobs = useLoaderData();
    useEffect(() => {
        const appliedJobs = getStoredJobApplications();
        if (appliedJobs.length > 0) {
            const totalAvailableJobs = jobs.filter(application => !appliedJobs.includes(application.id));
            setAvailableJobs(totalAvailableJobs);
        } else {
            setAvailableJobs(jobs);
        }
    }, [])
    return (
        <div className="">
            <div className="bg-gray-50 py-12">
                <h1 className="text-5xl font-bold text-center p-6">Total Available Jobs: {availableJobs.length}</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 my-8">
                {
                    availableJobs.map(application => <AvailableJob key={application.id} application={application}></AvailableJob>)
                }
            </div>
        </div>
    );
};

export default Jobs;