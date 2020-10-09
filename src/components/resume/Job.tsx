import React from 'react';

import '@styles/resume/job.scss';

interface JobProps {
  className?: string;
  content?: JSX.Element;
  company: string;
  startDate: string;
  endDate?: string;
  title: string;
}

const Job: React.FC<JobProps> = ({
  className,
  content,
  company,
  startDate,
  endDate,
  title,
}) => {
  return (
    <div className={`job ${className}`}>
      <div className="job-header">
        <h3>{company}</h3>
        <div className="job-timespan">
          {!!endDate ? `${startDate} - ${endDate}` : `${startDate}`}
        </div>
      </div>
      <h4>{title}</h4>
      {content}
    </div>
  );
};

export default Job;
