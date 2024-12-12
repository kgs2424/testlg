import { ReactNode } from 'react';

import type { Metadata } from 'next';

import classNames from 'classnames';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps, createTheme } from '@mantine/core';
import { Analytics } from '@vercel/analytics/react';

import type { MantineColorsTuple } from '@mantine/core';
import './globals.css';
import '@mantine/core/styles.css';

export const metadata: Metadata = {
  title: 'Smart CS Web',
  description: "LGUplus's Smart CS Web project",
};

const lgUplusColor: MantineColorsTuple = [
  '#ffe9f2',
  '#ffd1e0',
  '#faa1bd',
  '#f66e99',
  '#f2437a',
  '#f02866',
  '#f0185c',
  '#d6084c',
  '#c00043',
  '#a90039',
];

const theme = createTheme({
  primaryColor: 'lgUplusColor',
  colors: {
    lgUplusColor,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <title>{metadata.title + ''}</title>

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#e0c8fd" />

        <meta property="og:title" content={metadata.title + ''} />
        <meta name="twitter:title" content={metadata.title + ''} />

        <meta name="description" content={metadata.description + ''} />
        <meta property="og:description" content={metadata.description + ''} />
        <meta name="twitter:description" content={metadata.description + ''} />

        <meta property="og:image" content="https://i.imgur.com/Z3bMJXy.jpg" />
        <meta name="twitter:image" content="https://i.imgur.com/Z3bMJXy.jpg" />
      </head>
      {/* //! If you don't want 'screen size' visible at the left bottom of the browser window, You can remove `debug-screens` class */}
      <body
        className={classNames('antialiased', {
          'debug-screens': process.env.NODE_ENV === 'development',
        })}
      >
        <MantineProvider theme={theme}>{children}</MantineProvider>
        <Analytics />
      </body>
    </html>
  );
}
