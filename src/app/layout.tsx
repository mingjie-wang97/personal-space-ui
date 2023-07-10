import { ChildrenT } from '../constants/types';
import RecoilRootWrapper from './recoil-root-wrapper';
import './globals.css';
import ThemeRootWrapper from './theme-root-wrapper';

export const metadata = {
  title: 'Mingjie Portal',
  description: 'Welcome to Mingjie Portal',
};

export default function RootLayout({ children }: ChildrenT) {
  return (
    <html lang="en">
      <body>
        <RecoilRootWrapper>
          <ThemeRootWrapper>
            {children}
          </ThemeRootWrapper>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
