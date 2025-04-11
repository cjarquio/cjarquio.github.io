import {
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import classes from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text size="2.5rem">🤙🏽</Text>
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandLinkedin size={'3em'} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandGithub size={'3rem'} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

export default Footer;
