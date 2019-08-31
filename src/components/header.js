import React, { useEffect, useState } from 'react';

const Header = () => {

  const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
      setHasMounted(true)
    })

  return <header>
    <div className="header-name">Sean Dolinar</div>
    <a href="https://stats.seandolinar.com">Blog</a>
    <div className={`header-background ${hasMounted ? 'has-mounted' : ''}`}></div>
  </header>
}


export default Header;
