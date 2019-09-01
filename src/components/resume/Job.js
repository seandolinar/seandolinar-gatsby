import React from 'react';

import '@styles/resume/job.scss';


const Job = ({className, content, company, startDate, endDate, title}) => {
    return <div className={`job ${className}`}>
        <h3>{company}</h3>
        <h4>{title}</h4>
        <div className="job-timespan">{!!endDate ? `${startDate} - ${endDate}` : `${startDate}`}</div>
        {content}
    </div>
}

export default Job