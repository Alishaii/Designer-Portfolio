import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';

interface NoSsrWrapperProps {
  children?: ReactNode;
}

const NonSSRWrapper: React.FC<NoSsrWrapperProps> = ({ children }) => <React.Fragment>{children}</React.Fragment>;

export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false
});
