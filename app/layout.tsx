import fonts from '@/components/fonts';
import React from 'react';
import { Header, MobileFooter } from '../components';
import '../styles/globals.scss';

export interface RootLayoutProps {
  children: React.ReactNode;
}

function loadFonts(): string[] {
  const fontsClassName = [];
  for (const font of Object.entries(fonts)) {
    fontsClassName.push(font[1].variable);
  }

  return fontsClassName;
}

export default function RootLayout(props: RootLayoutProps) {
  const loadedFonts = loadFonts();

  return (
    <html lang='en' className={loadedFonts.join(' ')}>
      <body>
        <Header />
        {props.children}

        <MobileFooter />
      </body>
    </html>
  );
}
