// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Fitness Diet Coach',
  description: 'Personlig träning och kostschema',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
