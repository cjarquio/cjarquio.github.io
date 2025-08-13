import {
  Card,
  CardSection,
  Group,
  Image,
  ActionIcon,
  Text,
  Stack,
  Button,
} from '@mantine/core';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { ProjectProps } from '../Projects';
import classes from './ProjectCard.module.css';

interface ProjectCardProps {
  project: ProjectProps;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <CardSection>
        <Image src={project.imageUrl} alt={project.title} height={180} />
      </CardSection>
      <Group mt="xs">
        <Text fz="lg" fw={500}>
          {project.title}
        </Text>
        <Stack>
          <Group className={classes.buttonGroup}>
            <ActionIcon variant="default" radius="md" size={36}>
              <IconBrandGithub className={classes.like} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="default" radius="md" size={36}>
              <IconExternalLink className={classes.like} stroke={1.5} />
            </ActionIcon>
          </Group>
          <Button radius="md" style={{ flex: 1 }}>
            Show details
          </Button>
        </Stack>
      </Group>
    </Card>
  );
};
