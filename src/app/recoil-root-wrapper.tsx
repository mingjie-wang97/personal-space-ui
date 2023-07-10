'use client';
import { RecoilRoot } from 'recoil';
import { ChildrenT } from '../constants/types';

const RecoilRootWrapper = ({ children }: ChildrenT) => {
  return <RecoilRoot >{children}</RecoilRoot>;
};

export default RecoilRootWrapper;