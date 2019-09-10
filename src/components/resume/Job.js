import React from 'react';

import '@styles/resume/job.scss';


const Job = ({className, content, company, startDate, endDate, title}) => {
    return <div className={`job ${className}`}>
                <div className="job-timespan">{!!endDate ? `${startDate} - ${endDate}` : `${startDate}`}</div>
        <h3>{company}</h3>
        <h4>{title}</h4>
        {content}
    </div>
}

export default Job //React.memo(Job)