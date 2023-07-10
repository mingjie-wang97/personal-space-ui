'use client';
import { ConfigProvider } from 'antd';
import { useRecoilValue } from 'recoil';
import { themeValue } from '../atoms';
import { ChildrenT } from '../constants/types';

const ThemeRootWrapper = ({ children }: ChildrenT) => {
  const theme = useRecoilValue(themeValue);

  return (
    <ConfigProvider
      theme={theme}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeRootWrapper;