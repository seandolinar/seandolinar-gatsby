import React, { useEffect, useState, useRef } from 'react';

interface HeaderProps {
  scrollPosition?: number;
}

const Header: React.FC<HeaderProps> = ({ scrollPosition = null }) => {
  const elemHeader = useRef<HTMLHeadingElement>(null);

  const [initialOffsetTop, setInitialOffsetTop] = useState(null);

  useEffect(() => {
    setInitialOffsetTop(elemHeader.current.offsetTop);
  }, []);

  let newHeight = 0;
  let isFixed = false;

  if (initialOffsetTop) {
    newHeight = initialOffsetTop - scrollPosition;

    isFixed = 200 - newHeight <= 0;
  }

  return (
    <header className={newHeight < 0 ? 'is-fixed' : ''} ref={elemHeader}>
      <div className={`header-content ${isFixed ? 'has-mounted' : ''}`}>
        <h1 className="header-content-name">Sean Dolinar</h1>
        <a href="https://stats.seandolinar.com">Blog</a>
      </div>
      <div className={`header-background`}></div>
    </header>
  );
};

export default Header;
