import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
const Statistics = () => {
    const statisticsData = useLoaderData();
    return (
        <div className="">
            <div className="bg-gray-50 text-center p-16 space-y-4">
                <h1 className="text-4xl font-semibold">Here goes the last year statistics</h1>
                <p>Now the decision is yours! Apply with your potential, get hired with your skills!</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-gray-400 my-4 text-center">Here goes several graphical representation!</h2>
            </div>
            <div className='flex flex-col lg:flex-row my-12'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-xl font-bold'>Job Openings</h1>
                    <BarChart width={500} height={300} data={statisticsData}>
                        <XAxis dataKey='month'></XAxis>
                        <Bar dataKey="job_openings" fill='#9873FF' />
                        <YAxis />
                        <Tooltip></Tooltip>
                    </BarChart>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-xl font-bold'>Application analysis</h1>
                    <BarChart
                        width={500}
                        height={300}
                        data={statisticsData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="applications_received" stackId="a" fill="#ab24f1" />
                        <Bar dataKey="offers_accepted" stackId="a" fill="#f86aca" />
                        <Bar dataKey="offers_extended" stackId="a" fill="#b5dbc2" />
                        <Legend />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Statistics;