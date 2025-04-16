import { Card, Group, Image, ActionIcon, Text } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import { ProjectProps } from './Projects';
import classes from './ProjectCard.module.css';

interface ProjectCardProps {
  project: ProjectProps;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={project.imageUrl} alt={project.title} height={180} />
      </Card.Section>
      <Group mt="xs">
        <Text fz="lg" fw={500}>
          {project.title}
        </Text>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
};
