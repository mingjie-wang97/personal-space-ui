'use client';
import { ConfigProvider } from 'antd';
import { ChildrenT } from '../constants/types';
import { useRecoilValue } from 'recoil';
import { languageValue } from '../atoms';

const I8nRootWrapper = ({ children }: ChildrenT) => {
  const language = useRecoilValue(languageValue);

  return <ConfigProvider locale={language}>{children}</ConfigProvider>;
};

export default I8nRootWrapper;
