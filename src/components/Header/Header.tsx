import { useState } from 'react';
import {
  ActionIcon,
  Container,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import classes from './Header.module.css';

const links = [
  { link: '/about', label: 'About Me' },
  { link: '/projects', label: 'Projects' },
  { link: '/contact', label: 'Contact' },
];

const Header = () => {
  const [active, setActive] = useState(links[0].link);
  const { setColorScheme } = useMantineColorScheme();
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
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        LOGO
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
