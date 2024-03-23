'use client';

import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

// import Footer from './Footer';
// import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box height="100%" as="main" bg="blue">
      {children}
    </Box>
  );
};

export default Layout;
