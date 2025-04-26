import React from 'react';

export interface JobDescriptionProps {
  title: string;
  company: string;
  date: string;
  description: string[];
}

const JobDescription: React.FC<JobDescriptionProps> = (
  props: JobDescriptionProps
) => {
  const { title, company, date, description } = props;

  return (
    <div className="job-description">
      <h3>
        {title} - {company}
      </h3>
      <p>{date}</p>
      <ul>
        {description.map((desc, index) => (
          <li key={`${company}-${index}`}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobDescription;
