import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellFooter,
} from '@mantine/core';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Page() {
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
        <>HI</>
      </AppShellMain>
      <AppShellFooter p="lg">
        <Footer />
      </AppShellFooter>
    </AppShell>
  );
}
