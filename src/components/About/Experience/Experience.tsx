import { Container } from '@mantine/core';
import { jobs } from './jobs';
import JobDescription, { JobDescriptionProps } from './JobDescription';

export const Experience = () => {
  return (
    <Container fluid>
      {jobs.map((job: JobDescriptionProps, index: number) => (
        <JobDescription
          key={`${job.company}-${index}`}
          title={job.title}
          company={job.company}
          date={job.date}
          description={job.description}
        />
      ))}
    </Container>
  );
};
