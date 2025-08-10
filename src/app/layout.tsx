'use client';
import { mantineHtmlProps, MantineProvider } from '@mantine/core';
import Wrapper from '../components/Wrapper/Wrapper';
import { BrowserRouter } from 'react-router-dom';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head></head>
      <body>
        <MantineProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </MantineProvider>
      </body>
    </html>
  );
}
