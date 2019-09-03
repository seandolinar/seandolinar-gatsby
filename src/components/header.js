import React, { useEffect, useState } from 'react';

const Header = ({ scrollPosition }) => {

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (scrollPosition / window.innerHeight > .5) {
      setHasMounted(true)
    }
    else {
      setHasMounted(false)
    }
  })

  return <header>
    <div className={`header-content ${hasMounted ? 'has-mounted' : ''}`}>
      <div className="header-content-name">Sean Dolinar</div>
      <a href="https://stats.seandolinar.com">Blog</a>
    </div>
    <div className={`header-background`}></div>
  </header>
}


export default Header;
