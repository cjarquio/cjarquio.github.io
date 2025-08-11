'use client';
import { mantineHtmlProps, MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head></head>
      <body className="antialiased">
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
