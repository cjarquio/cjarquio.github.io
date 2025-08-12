'use client';
import { useState } from 'react';
import {
  ActionIcon,
  Container,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
  Image,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import NextImage from 'next/image';
import styles from './Header.module.css';
import Logo from '../../assets/images/Logo.jpeg';

const links = [
  { link: '/about', label: 'About Me' },
  { link: '/projects', label: 'Projects' },
  { link: '/contact', label: 'Contact' },
];

const Header = () => {
  const [active, setActive] = useState<string | null>();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={styles.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  const returnHome = () => {
    setActive(null);
  };

  return (
    <header className={'flex items-center h-[4rem]'}>
      <Container size="md" className={'flex h-[3rem] justify-between w-full'}>
        <ActionIcon size="xxl" radius={'md'} color="gray" onClick={returnHome}>
          <Image
            component={NextImage}
            className={'h-full'}
            radius="md"
            src={Logo}
            alt="logo"
          />
        </ActionIcon>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Group justify="center">
          <ActionIcon
            onClick={() =>
              setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
            }
            variant="default"
            size="xl"
            aria-label="Toggle color scheme"
          >
            {computedColorScheme === 'light' ? (
              <IconSun className={styles.light} stroke={1.5} />
            ) : (
              <IconMoon className={styles.dark} stroke={1.5} />
            )}
          </ActionIcon>
        </Group>
      </Container>
    </header>
  );
};

export default Header;
