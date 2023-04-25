import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

export const metadata = {
  title: 'Supreme Template',
  description: 'A template for Supreme',
};
