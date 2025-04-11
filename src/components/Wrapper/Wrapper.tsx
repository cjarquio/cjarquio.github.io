import { AppShell, AppShellProps, Group } from '@mantine/core';
import PortfolioRouter from '../PortfolioRouter/PortfolioRouter';
import Header from '../Header/Header';

export const Wrapper: React.FC<AppShellProps> = (props: AppShellProps) => {
  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Header />
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <PortfolioRouter />
      </AppShell.Main>
      <AppShell.Footer p="md">Footer</AppShell.Footer>
    </AppShell>
  );
};

export default Wrapper;
