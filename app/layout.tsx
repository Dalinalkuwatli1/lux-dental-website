import type { Metadata } from 'next';
import { Outfit, Playfair_Display, Tajawal } from 'next/font/google';
import ClientLayout from '../components/layout/ClientLayout';
import { AppProvider } from '../context/AppContext';
import CustomCursor from '../components/ui/CustomCursor';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const tajawal = Tajawal({
  weight: ['300', '400', '500', '700', '800'],
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lumina Dental | Luxury Boutique Dental Clinic Beverly Hills',
  description: 'Experience elite oral healthcare at Lumina Dental Clinic. Fusing cutting-edge biological dentistry with premium aesthetic veneer and implant artistry.',
  keywords: ['luxury dental clinic', 'beverly hills dentist', 'porcelain veneers', 'dental implants', 'teeth whitening', 'boutique dentist'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${playfair.variable} ${tajawal.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans transition-colors duration-500 bg-white dark:bg-[#060b0a] text-neutral-800 dark:text-neutral-200">
        <AppProvider>
          <ClientLayout>{children}</ClientLayout>
        </AppProvider>
      </body>
    </html>
  );
}
