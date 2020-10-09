import React, { useEffect, useState } from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { initialOffsetTop: null };

    this.elemHeader = React.createRef();
  }

  componentDidMount() {
    this.setState({ initialOffsetTop: this.elemHeader.current.offsetTop });
  }

  render() {
    const { className, children, header, scrollPosition } = this.props;
    const { initialOffsetTop } = this.state;

    let offsetHeight = 0;
    let newHeight = 0;
    let isFixed = false;

    if (initialOffsetTop) {
      const inViewport = scrollPosition / initialOffsetTop > 1;

      newHeight = initialOffsetTop - scrollPosition;

      isFixed = 200 - newHeight <= 0;
    }

    return (
      <header className={newHeight < 0 ? 'is-fixed' : ''} ref={this.elemHeader}>
        <div className={`header-content ${isFixed ? 'has-mounted' : ''}`}>
          <h1 className="header-content-name">Sean Dolinar</h1>
          <a href="https://stats.seandolinar.com">Blog</a>
        </div>
        <div className={`header-background`}></div>
      </header>
    );
  }
}

export default Header;
