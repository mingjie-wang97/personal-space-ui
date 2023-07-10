'use client';
import React from 'react';
import { Button, theme } from 'antd';
import ThemeToggleButton from '../components/theme-toggle-button';

const { useToken } = theme;

export default function Home() {
  const { token } = useToken();

  return (
    <div style={{ display: 'inline-block', backgroundColor: token.colorBgContainer }}>
      <ThemeToggleButton />
      <Button type="primary">Button</Button>
    </div>
  );
}
