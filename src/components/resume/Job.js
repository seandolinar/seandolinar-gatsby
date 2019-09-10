import React from 'react';

import '@styles/resume/job.scss';


const Job = ({className, content, company, startDate, endDate, title}) => {
    return <div className={`job ${className}`}>
        <div className="job-header">
            <h3>{company}</h3>
            <div className="job-timespan">{!!endDate ? `${startDate} - ${endDate}` : `${startDate}`}</div>
        </div>
        <h4>{title}</h4>
        {content}
    </div>
}

export default Job //React.memo(Job)