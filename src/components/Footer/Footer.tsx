'use client';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';

export const Footer = () => {
  const openExternalLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className={'flex items-center h-[4rem]'}>
      <Container
        className={'flex h-[3rem] flex-col sm:flex-row justify-between'}
      >
        <Text size="2.5rem">🤙🏽</Text>
        <Group gap={0} justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            onClick={() => {
              openExternalLink(
                'https://www.linkedin.com/in/charles-jarquio-116210104/'
              );
            }}
          >
            <IconBrandLinkedin size={'3em'} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            onClick={() => openExternalLink('https://github.com/cjarquio')}
          >
            <IconBrandGithub size={'3rem'} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

export default Footer;
