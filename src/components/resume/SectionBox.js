import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import '../../styles/resume/section-box.scss';


// const SectionBox = ({className, children, header, scrollPosition}) => {

//     let elemSection = React.createRef();
//     const [inViewport, setInViewport] = useState(false);

//     const becomesInViewport= (evt) => {
//         console.log(elemSection.current.offsetTop)

//         setInViewport(elemSection.current.offsetTop / scrollPosition < 1)
//     }


//     useEffect(() => {
//         window.addEventListener('scroll', becomesInViewport)
//     }, [])


//     console.log(inViewport)
//     return <section className={`section-box ${className} ${inViewport ? 'in-viewport' : ''}`} ref={elemSection} >
//         <h2>{header}</h2>
//         {children || 'Section'}
//     </section>
// }

// export default React.memo(SectionBox, (prevProps, nextProps) => {
//     // prevents rerender for the time being
//     return true


//     // console.log(prevProps === nextProps)

//     // for (key in prevProps) {
//     //     // console.log(key)
//     //     //console.log(prevProps[key] === nextProps[key])
//     // }

// })


class SectionBox extends React.Component {
    constructor(props) {
        super(props);

        this.elemSection = React.createRef();

        this.state = {inViewport: false}
    }

    componentDidUpdate(prevProps,prevState) {
        const {className, children, header, scrollPosition} = this.props;
        const {inViewport} = this.state;

        if (!!inViewport) {
            return
        }

        if (prevProps.scrollPosition !== scrollPosition) {
            this.setState({inViewport:  !!this.elemSection.current ? ((scrollPosition + .8 * window.innerHeight) / this.elemSection.current.offsetTop) > 1 : false});
        }
    }

    render() {

        const {className, children, header, scrollPosition} = this.props;
        const {inViewport} = this.state;

        // this.setState({inViewport:  !!this.elemSection.current ? ((scrollPosition + .8 * window.innerHeight) / this.elemSection.current.offsetTop) > 1 : false});
        
        return <section className={`section-box ${className} ${inViewport ? 'in-viewport' : ''}`} ref={this.elemSection} >
            <h2>{header}</h2>
            {children || 'Section'}
        </section>
    }
}

export default SectionBox