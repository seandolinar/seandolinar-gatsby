import React, { useEffect, useState, useRef } from 'react';

import '@styles/resume/section-box.scss';

interface SectionBoxProps {
  className: string;
  header?: string;
  scrollPosition: number;
  children: React.ReactNode;
}

const SectionBox: React.FC<SectionBoxProps> = ({
  className,
  children,
  header,
  scrollPosition,
}) => {
  const elemSection = useRef<HTMLHeadingElement>(null);

  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    if (inViewport) {
      return;
    }

    setInViewport(
      elemSection.current
        ? (scrollPosition + 0.8 * window.innerHeight) /
            elemSection.current.offsetTop >
            1
        : false,
    );
  }, [scrollPosition]);

  return (
    <section
      className={`section-box ${className} ${inViewport ? 'in-viewport' : ''}`}
      ref={elemSection}
    >
      <h2>{header}</h2>
      {children || 'Section'}
    </section>
  );
};

export default SectionBox;
