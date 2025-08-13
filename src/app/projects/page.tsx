import { Container, SimpleGrid } from '@mantine/core';
import { ProjectCard } from '@/components/Projects/ProjectCard/ProjectCard';
import { projects, ProjectProps } from '@/components/Projects/projectList';

export const ProjectsPage = () => {
  return (
    <Container className={'flex items-center justify-evenly w-full'} size="xl">
      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {projects.map((project: ProjectProps) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ProjectsPage;
