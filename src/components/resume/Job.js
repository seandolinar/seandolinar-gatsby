import React from 'react';

import '@styles/resume/job.scss';


const Job = ({className, content, company, startDate, endDate}) => {
    return <div className={`job ${className}`}>
        <h2>{company}</h2>
        <div className="job-timespan">{startDate} - {endDate}</div>
        {content}
    </div>
}

export default Job