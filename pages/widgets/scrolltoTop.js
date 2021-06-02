import React, { PureComponent } from 'react'

class ScrolltoTop extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div id="scrollToTop" title className="scrollToTop" style={{ display: 'block' }}><img src="https://nus.edu.sg/images/default-source/base/top.png" alt="" /></div>

        )
    }
}

export default ScrolltoTop