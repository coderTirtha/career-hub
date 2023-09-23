const getStoredJobApplications = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplications = id => {
    const storedJobApplications = getStoredJobApplications();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if(!exists) {
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications));
    }
}

const removeJobApplications = id => {
    const storedJobApplications = getStoredJobApplications();
    const filteredApplications = storedJobApplications.filter(application => application !== id);
    localStorage.setItem('job-applications', JSON.stringify(filteredApplications));
}

export { getStoredJobApplications, saveJobApplications, removeJobApplications }