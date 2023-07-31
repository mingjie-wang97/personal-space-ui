import { ChildrenT } from '../constants/types';
import { I8nRootWrapper, RecoilRootWrapper, ThemeRootWrapper } from '../components/wrapper';
import TopNavigationBar from '../components/top-navigation-bar';
import StyledComponentsRegistry from '../../lib/AntdRegistry';
import './globals.css';

export const metadata = {
  title: 'Mingjie Portal',
  description: 'Welcome to Mingjie Portal',
};


export default function RootLayout({ children }: ChildrenT) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <RecoilRootWrapper>
            <I8nRootWrapper>
              <ThemeRootWrapper>
                <TopNavigationBar />
                {children}
              </ThemeRootWrapper>
            </I8nRootWrapper>
          </RecoilRootWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

