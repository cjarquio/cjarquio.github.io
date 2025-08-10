import {
  AppShell,
  AppShellProps,
  AppShellHeader,
  AppShellMain,
  AppShellFooter,
} from '@mantine/core';
import PortfolioRouter from '../PortfolioRouter/PortfolioRouter';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classes from './Wrapper.module.css';

export const Wrapper: React.FC<AppShellProps> = (props: AppShellProps) => {
  return (
    <AppShell
      layout="alt"
      header={{ height: '4rem' }}
      footer={{ height: '6rem' }}
    >
      <AppShellHeader>
        <Header />
      </AppShellHeader>
      <AppShellMain>
        <PortfolioRouter />
      </AppShellMain>
      <AppShellFooter p="lg">
        <Footer />
      </AppShellFooter>
    </AppShell>
  );
};

export default Wrapper;
