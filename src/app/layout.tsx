import { ChildrenT } from '../constants/types';
import RecoilRootWrapper from './recoil-root-wrapper';
import ThemeRootWrapper from './theme-root-wrapper';
import I8nRootWrapper from './i8n-root-wrapper';
import './globals.css';

export const metadata = {
  title: 'Mingjie Portal',
  description: 'Welcome to Mingjie Portal',
};

export default function RootLayout({ children }: ChildrenT) {

  return (
    <html lang="en">
      <body>
        <RecoilRootWrapper>
          <I8nRootWrapper>
            <ThemeRootWrapper>
              {children}
            </ThemeRootWrapper>
          </I8nRootWrapper>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
