import type { Metadata } from 'next';
import { ThemeProvider } from '@/app/contexts/theme-context';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Celestia AI Assistant',
    template: '%s | Celestia AI',
  },
  description: 'AI Assistant for StarAtlas ecosystem -智能航天助手',
  keywords: ['AI', 'StarAtlas', 'crypto', 'space', 'gaming', 'blockchain', 'assistant'],
  authors: [{ name: 'Celestia' }],
  creator: 'Celestia',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://celestia.ai',
    siteName: 'Celestia AI',
    title: 'Celestia AI Assistant',
    description: 'AI Assistant for StarAtlas ecosystem',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celestia AI Assistant',
    description: 'AI Assistant for StarAtlas ecosystem',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}