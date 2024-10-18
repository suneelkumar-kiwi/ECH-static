import React, { useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTopOfPage } from './helpers/helper';

interface ScrollToTopProps {
  children: ReactNode;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTopOfPage();
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
