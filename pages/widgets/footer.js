import React, { PureComponent } from 'react'
import ScrolltoTop from './scrolltoTop';

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="sfContentBlock"><footer className="nus-footer" style={{ width: "100%", float:"left" }}>
                    {/* FOOT NAVIGATION - START */}
                    <div className="container">
                        <div className="row wrapper navigator">
                            <div className="text-center">
                                <div className="nus-social-box">
                                    <div className="nus-module module">
                                        <div className="module-inner">
                                            <h3 className="title"><span>National University of Singapore</span></h3>
                                            <div className="module-ct">
                                                <ul className="nus-contact-us">
                                                    <li><span className="icon faicon fa-address" />21 Lower Kent Ridge Road
                      <br />
                      Singapore 119077</li>
                                                    <li><span className="icon faicon fa-phone" />+65 6516 6666</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nus-module module footnav-alt">
                                        <div className="module-inner">
                                            <div className="module-ct custom footnav-info footnav-social">
                                                <div>
                                                    <a href="//www.facebook.com/nus.singapore" target="_blank" rel="noopener noreferrer"><img alt="" src="https://nus.edu.sg/images/default-source/base/facebook.png" width={32} height={32} title="Facebook" /></a>
                                                    <a href="//twitter.com/NUSingapore" target="_blank" rel="noopener noreferrer"><img alt="" src="https://nus.edu.sg/images/default-source/base/twitter.png" width={32} height={32} title="Twitter" /></a>
                                                    <a href="//instagram.com/nus_singapore/" target="_blank" rel="noopener noreferrer"><img alt="" src="https://nus.edu.sg/images/default-source/base/instagram.png" width={32} height={32} title="Instagram" /></a>
                                                    <a href="//www.linkedin.com/school/5524" target="_blank" rel="noopener noreferrer"><img alt="" src="https://nus.edu.sg/images/default-source/base/linkedin.png" width={32} height={32} title="Linkedin" /></a>
                                                    <a href="//www.youtube.com/nuscast" target="_blank" rel="noopener noreferrer"><img alt="" src="https://nus.edu.sg/images/default-source/base/youtube.png" width={32} height={32} title="YouTube" /></a>
                                                    <a href="//mp.weixin.qq.com/s/iP2FlRWBWhgPpsN0EjDRlg" target="_blank" rel="noopener noreferrer"><img alt="" src="https://nus.edu.sg/images/default-source/icons/ico-white-wechat.png" width={32} height={32} title="WeChat" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOT NAVIGATION - END */}
                    {/* FOOTER - COPYRIGHT - START */}
                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="info">© <a href="/home">National University of Singapore</a>. All Rights Reserved.</div>
                                <div>
                                    <ul className="nav-copyright">
                                        <li><a href="/legal-information-notices">Legal</a></li>
                                        <li className="bullet"><a href="/identity" target="_blank">Branding guidelines</a></li>
                                        <li className="bullet"><a href="/contact">Contact us</a></li>
                                        <li className="bullet"><a href="/cn">Copyright &copy; {(new Date().getFullYear())}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER - COPYRIGHT - END */}
                </footer>
                </div>

                <ScrolltoTop />
            </div>
        )
    }
}

export default Footer