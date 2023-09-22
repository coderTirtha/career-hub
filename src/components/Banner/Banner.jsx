const Banner = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex-1 flex justify-center items-center">
                <div className="space-y-4 my-8">
                    <h1 className="text-5xl font-bold space-y-2">One Step <br /> Closer To Your <br />
                        <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] inline-block text-transparent bg-clip-text">Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-bold">Get Started</button>
                </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <img src={'https://i.ibb.co/KVpmDm8/user.png'} alt="" className="max-w-full" />
            </div>
        </div>
    );
};

export default Banner;