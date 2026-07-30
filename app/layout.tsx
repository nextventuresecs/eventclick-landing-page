import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://eventclick.live'),
  title: 'Eventclick — Real-time Event Verification & Streaming',
  description: 'A real-time platform for organizations to run live event rooms, verify attendance with time-bound photo evidence, and share secure live-view links with stakeholders.',
  openGraph: {
    title: 'Eventclick — Real-time Event Verification & Streaming',
    description: 'A real-time platform for organizations to run live event rooms, verify attendance with time-bound photo evidence, and share secure live-view links with stakeholders.',
    url: 'https://eventclick.live',
    siteName: 'Eventclick',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eventclick — Real-time Event Verification & Streaming',
    description: 'A real-time platform for organizations to run live event rooms, verify attendance with time-bound photo evidence, and share secure live-view links with stakeholders.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="bg-[#F5F3FC] text-[#1D2939] antialiased selection:bg-[#8C6FCF]/20 selection:text-[#402291]">
        {children}
      </body>
    </html>
  );
}
