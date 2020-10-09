import React, { useEffect, useState } from 'react';

import '@styles/resume/section-box.scss';

class SectionBox extends React.Component {
  constructor(props) {
    super(props);

    this.elemSection = React.createRef();

    this.state = { inViewport: false };
  }

  componentDidUpdate(prevProps, prevState) {
    const { className, children, header, scrollPosition } = this.props;
    const { inViewport } = this.state;

    if (inViewport) {
      return;
    }

    if (prevProps.scrollPosition !== scrollPosition) {
      this.setState({
        inViewport: this.elemSection.current
          ? (scrollPosition + 0.8 * window.innerHeight) /
              this.elemSection.current.offsetTop >
            1
          : false,
      });
    }
  }

  render() {
    const { className, children, header, scrollPosition } = this.props;
    const { inViewport } = this.state;

    // this.setState({inViewport:  !!this.elemSection.current ? ((scrollPosition + .8 * window.innerHeight) / this.elemSection.current.offsetTop) > 1 : false});

    return (
      <section
        className={`section-box ${className} ${
          inViewport ? 'in-viewport' : ''
        }`}
        ref={this.elemSection}
      >
        <h2>{header}</h2>
        {children || 'Section'}
      </section>
    );
  }
}

export default SectionBox;
