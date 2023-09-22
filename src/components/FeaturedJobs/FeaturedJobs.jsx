import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="my-16">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold">Featured Jobs</h1>
                <p className="text-gray-500">Explore thousands of job opportunities with all the information you need. It's your future!</p>
            </div>
            <div className="grid grid-cols-2 gap-6 my-8">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={(dataLength === jobs.length) ? 'hidden' : 'flex justify-center'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-bold">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;