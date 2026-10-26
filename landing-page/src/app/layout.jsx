import './globals.css';

export const metadata = {
  title: 'xChief - Trade & Practice',
  description: 'Learn before you trade with a free demo account.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0d1210] antialiased">
        {children}
      </body>
    </html>
  );
}