import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';
import theme from './theme';
import './globals.css';
import '@mantine/core/styles.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Charles Jarquio | Portfolio',
  description: 'My Portfolio showcasing my projects and skills.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="antialiased">
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
