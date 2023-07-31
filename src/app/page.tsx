'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { Button, theme } from 'antd';
import ThemeToggleButton from '../components/theme-toggle-button';
import { useRouter } from 'next/navigation';

const { useToken } = theme;
const LanguageSelection = dynamic(
  () => import('../components/language-selection'),
  { ssr: false },
);

// styles
const Wrapper = styled.div<{ $backgroundColor?: string; }>`
  height: 100vh;
  background-color: ${props => props.$backgroundColor || 'white'};
  transition: background-color 0.3s ease;
`;

export default function Home() {
  const { token } = useToken();
  const router = useRouter();


  const onClick = () => {
    // onclick navigate to test page
    router.push('/test');
  };


  return (
    <Wrapper $backgroundColor={token.colorBgContainer}>
      <ThemeToggleButton />
      <LanguageSelection /> 
      <Button type="primary" onClick={onClick}>Button</Button>
    </Wrapper>
  );
}
