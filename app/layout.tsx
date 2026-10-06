import './globals.css';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThemeScript from '@/components/ThemeScript';
import { defaultMetadata } from '@/lib/metadata';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
});

export const metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={poppins.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
