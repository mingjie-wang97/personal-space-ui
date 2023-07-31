'use client';
import { theme } from 'antd';
import './index.css';

const { useToken } = theme;

const TopNavigationBar = () => {
  const { token } = useToken();
  const styleVariables = {
    ['--font-color' as any]: token.colorPrimaryText,
    ['--font-color-hover' as any]: token.colorPrimaryHover,
    ['--box-shadow' as any]: token.boxShadow,
    ['--box-shadow-hover' as any]: token.boxShadowSecondary,
    ['--background-color' as any]: token.colorBgContainer,
  };

  return (
    <nav style={styleVariables}>
      <div className="logo-wrapper">
        <button className="logo">Ming Jie</button>
      </div>
    </nav>
  );
};

export default TopNavigationBar;
