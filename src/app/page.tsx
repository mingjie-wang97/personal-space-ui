'use client';
import React from 'react';
import styled from 'styled-components';
import { Button, theme } from 'antd';
import ThemeToggleButton from '../components/theme-toggle-button';

const { useToken } = theme;

// styles
const Wrapper = styled.div<{ $backgroundColor?: string; }>`
  height: 100vh;
  background-color: ${props => props.$backgroundColor || 'white'};
  transition: background-color 0.3s ease;
`;

export default function Home() {
  const { token } = useToken();

  return (
    <Wrapper $backgroundColor={token.colorBgContainer}>
      <ThemeToggleButton />
      <Button type="primary">Button</Button>
    </Wrapper>
  );
}
