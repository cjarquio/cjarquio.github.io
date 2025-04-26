import { Container, Text } from '@mantine/core';
import { jobs } from '../helperFunctions';
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
