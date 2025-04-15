import { AppShell, AppShellProps } from '@mantine/core';
import PortfolioRouter from '../PortfolioRouter/PortfolioRouter';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classes from './Wrapper.module.css'

export const Wrapper: React.FC<AppShellProps> = (props: AppShellProps) => {
  return (
    <AppShell
      layout="alt"
      header={{ height: '4rem' }}
      footer={{ height: '6rem' }}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main className={classes.Main}>
        <PortfolioRouter />
      </AppShell.Main>
      <AppShell.Footer p="lg">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};

export default Wrapper;
