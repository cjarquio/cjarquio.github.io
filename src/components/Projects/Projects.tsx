import { Container } from '@mantine/core';
import { ProjectCard } from './ProjectCard';
import { projects } from './helperFunctions';

export interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const Projects = () => {
  return (
    <Container size="xl">
      {projects.map((project: ProjectProps) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </Container>
  );
};

export default Projects;
