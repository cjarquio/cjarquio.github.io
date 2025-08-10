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
import Logo from '../../shared/images/Logo.jpeg';
import classes from './Header.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

const links = [
  { link: '/about', label: 'About Me' },
  { link: '/projects', label: 'Projects' },
  { link: '/contact', label: 'Contact' },
];

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState<string | null>(location.pathname);
  const { setColorScheme } = useMantineColorScheme();
  const navigate = useNavigate();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        navigate(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  const returnHome = () => {
    setActive(null);
    navigate('/');
  };

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <ActionIcon size="xxl" radius={'md'} color="gray" onClick={returnHome}>
          <Image className={classes.logo} radius="md" src={Logo} />
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
              <IconSun className={classes.light} stroke={1.5} />
            ) : (
              <IconMoon className={classes.dark} stroke={1.5} />
            )}
          </ActionIcon>
        </Group>
      </Container>
    </header>
  );
};

export default Header;
