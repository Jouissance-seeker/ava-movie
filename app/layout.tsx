import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import TemplateBase from '@/containers/templates/base';
import { cn } from '@/utils/cn';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'آوا مووی',
  description: 'طراحی و توسعه توسط حمید شاهسونی',
};

const fontIranYekan = localFont({
  src: [
    {
      path: '../public/fonts/iran-yekan/light.woff2',
      weight: '300',
    },
    {
      path: '../public/fonts/iran-yekan/regular.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/iran-yekan/medium.woff',
      weight: '500',
    },
    {
      path: '../public/fonts/iran-yekan/bold.woff2',
      weight: '700',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <body className={cn('flex flex-col h-dvh', fontIranYekan.className)}>
        <Providers>
          <TemplateBase>{children}</TemplateBase>
        </Providers>
      </body>
    </html>
  );
}
