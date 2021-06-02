import React, { PureComponent } from 'react'
import Header from "../widgets/header"
import Navbar from "../widgets/navbar"

class About extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Header />

                <Navbar />

                <div id="container">
                    <div className="sfContentBlock"><div className="page-masthead ">
                        <div className="custom">
                            <div className="custom the-nus">
                                <div className="container">
                                    <div className="col-md-12 tile-col">
                                        <div className="jumbotron visible-lg hidden-sm visible-xs">
                                            <p>The National University of Singapore aspires to be a vital community of academics, researchers, staff, students and alumni working together in a spirit of innovation and enterprise for a better world. </p>
                                            <p>Our singular focus on talent will be the cornerstone of a truly great university that is dedicated to quality education, influential research and visionary enterprise, in service of country and society.</p>
                                        </div>
                                        <div className="jumbotron visible-md visible-sm hidden-xs">
                                            <p>The National University of Singapore aspires to be
                  <br />
                  a vital community of academics, researchers, staff, students and alumni
                  <br />
                  working together in a spirit of innovation and enterprise for a better world.</p>
                                            <p>Our singular focus on talent will be
                  <br />
                  the cornerstone of a truly great university that is dedicated to
                  <br />
                  quality education, influential research and visionary enterprise,
                  <br />
                  in service of country and society.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="custom section-about-message" style={{ background: '#003d7c' }}>
                                <div className="container" style={{ padding: 0 }}>
                                    <div className="col-md-5 col-sm-12 tile-col">
                                        <div className="jumbotron mv" style={{ textAlign: 'center', color: '#FFF' }}>
                                            <h1 className="about-vision about-title">Vision</h1>
                                            <p>a leading global university</p>
                                            <p>shaping the future</p>
                                            <h1 className="about-mission about-title">Mission</h1>
                                            <p className="hidden-sm hidden-xs">to educate, inspire and transform</p>
                                            <p className="visible-sm visible-xs">to educate, inspire <br />
                  and transform</p>
                                            <h1 className="about-mission about-title">Values</h1>
                                            <p>innovation, resilience <br />
                  excellence, respect, integrity</p>
                                        </div>
                                    </div>
                                    <div className="col-md-7 hidden-sm hidden-xs shield">
                                        <img alt="" src="https://nus.edu.sg/images/default-source/corporate/about/shield.png" className="img-responsive" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom section section-about-leadership">
                            <style dangerouslySetInnerHTML={{ __html: "\n    .section-about-leadership { background: white; }\n" }} />
                            <div className="container">
                                <div className="jumbotron">
                                    <h2>University leadership</h2>
                                    <p>Meet our leaders who shape our University to contribute and make a difference.</p>
                                </div>
                                <div className="col-md-6 col-sm-6 tile-col">
                                    <div className="tile-item"><a href="/about/board-of-trustees"><span>Board of Trustees</span></a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 tile-col">
                                    <div className="tile-item tile-item-orange"><a href="/about/management"><span>Management</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom section section-about-video">
                            <p><a name="nus-institutional-video" /></p>
                            <div className="container">
                                <div className="jumbotron" style={{ marginTop: 0, marginBottom: '80px' }}>
                                    <h2>Innovation &amp; Impact</h2>
                                    <p>Transformative. Life-changing. Innovative. Caring. Holistic. We are NUS.</p>
                                </div>
                                <div className="video-container">
                                    <iframe width={560} height={315} src="https://www.youtube.com/embed/jQy1pCry_y0" frameBorder={0} allow="autoplay; encrypted-media" />
                                </div>
                            </div>
                        </div>
                        <div className="custom section section-about-founded">
                            <div className="section-about-inprint">
                                <div className="container">
                                    <div className="col-md-12">
                                        <div className="jumbotron">
                                            <h2>Founded by the community <span style={{ whiteSpace: 'nowrap' }}>for the community</span></h2>
                                            <p>We started out as a modest medical school with 23 students in 1905, founded by a determined group of businessmen led by Tan Jiak Kim, to serve the needs of the local community. Today, more than 100 years on, as Singapore’s flagship university, we continue to be in service of country and society. Learn more about our rich heritage and leaders of this institution.</p>
                                        </div>
                                        <br />
                                        <br />
                                    </div>
                                    <div className="col-md-4 col-sm-6 tile-col">
                                        <div className="tile-item"><a href="/about/founded-by-the-community" title="History"><span>History</span></a></div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 tile-col">
                                        <div className="tile-item"><a href="/about/founded-by-the-community#chancellors" title="Chancellors"><span>Chancellors</span></a></div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 tile-col">
                                        <div className="tile-item"><a href="/about/founded-by-the-community#vice-chancellors" title="Vice Chancellors"><span>Vice Chancellors</span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a name="student-life" />
                        <div className="custom section section-about-video anchor|institutional-video">
                            <div className="container">
                                <div className="video-container">
                                    <iframe width={560} height={315} src="https://www.youtube.com/embed/iA7B06-3PM8" frameBorder={0} allow="autoplay; encrypted-media" />
                                </div>
                                <div className="jumbotron">
                                    <h2>The best campus life</h2>
                                    <p>You will study hard. You will play hard. You will make friends for life.</p>
                                </div>
                            </div>
                        </div>
                        <div className="custom section-about-utown" style={{ backgroundImage: 'url(https://nus.edu.sg/images/default-source/corporate/about/about-utown.jpg)' }}>
                            <div className="container">
                                <div className="jumbotron">
                                    <h2>University Town</h2>
                                    <p>Study. Live. Play. Learn. Do it all at the newest hangout on campus.</p>
                                    <p><a href="https://uci.nus.edu.sg/suu/about-us/about-suu-utown-non-residential-facilities/" target="_blank"><span className="fa fa-external-link" /> Learn more</a></p>
                                </div>
                            </div>
                        </div>
                        <a name="corporate-information" />
                        <div className="custom section section-about-numbers anchor|corporate-information">
                            <div id="in-numbers" className="container">
                                <div className="jumbotron">
                                    <h2>In numbers</h2>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-item">
                                    <div className="badge-content"><span id="number1" className="badge-large">3</span><span className="badge-small">Campuses:<br />
                Kent Ridge, Bukit Timah and Outram</span></div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-item">
                                    <div className="badge-content"><span id="number2" className="badge-large">13</span><span className="badge-small">Undergraduate Schools</span></div>
                                </div>
                                <div className="clearfix visible-sm-block visible-xs-block">&nbsp;</div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-item">
                                    <div className="badge-content"><span id="number3" className="badge-large">4</span><span className="badge-small">Graduate Schools</span></div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-item">
                                    <div className="badge-content"><span id="number4" className="badge-large">30</span><span className="badge-small">University-level Research Institutes and Centres</span></div>
                                </div>
                                <div className="clearfix visible-md-block visible-lg-block">&nbsp;</div>
                                <div className="clearfix visible-sm-block visible-xs-block">&nbsp;</div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-item">
                                    <div className="badge-content"><span id="number5" className="badge-large">60</span><span className="badge-small">Bachelor's degrees</span></div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-item">
                                    <div className="badge-content"><span id="number6" className="badge-large">54</span><span className="badge-small">Second majors</span></div>
                                </div>
                                <div className="clearfix visible-sm-block visible-xs-block">&nbsp;</div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-item">
                                    <div className="badge-content"><span id="number7" className="badge-large">24</span><span className="badge-small">Concurrent degrees</span></div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-item">
                                    <div className="badge-content"><span id="number8" className="badge-large">35</span><span className="badge-small">Joint degrees</span></div>
                                </div>
                                <div className="clearfix visible-md-block visible-lg-block">&nbsp;</div>
                                <div className="clearfix visible-sm-block visible-xs-block">&nbsp;</div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-item">
                                    <div className="badge-content"><span id="number9" className="badge-large">73</span><span className="badge-small">Double degrees</span></div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-item">
                                    <div className="badge-content"><span id="number10" className="badge-large">154</span><span className="badge-small">Master's degrees, Doctoral degrees, Graduate diplomas</span></div>
                                </div>
                                <div className="clearfix visible-sm-block visible-xs-block">&nbsp;</div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-item">
                                    <div className="badge-content"><span id="number11" className="badge-large">31.3K</span><span className="badge-small">Undergraduates</span></div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-item">
                                    <div className="badge-content"><span id="number12" className="badge-large">11.3K</span><span className="badge-small">Graduate students</span></div>
                                </div>
                                <div className="clearfix visible-md-block visible-lg-block">&nbsp;</div>
                                <div className="clearfix visible-sm-block visible-xs-block">&nbsp;</div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-item">
                                    <div className="badge-content"><span id="number13" className="badge-large">2.6K</span><span className="badge-small">Faculty</span></div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-item">
                                    <div className="badge-content"><span id="number14" className="badge-large">4.1K</span><span className="badge-small">Research Staff</span></div>
                                </div>
                                <div className="clearfix visible-sm-block visible-xs-block">&nbsp;</div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-item">
                                    <div className="badge-content"><span id="number15" className="badge-large">3.7K</span><span className="badge-small">Executive &amp; Professional Staff</span></div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 col-item">
                                    <div className="badge-content"><span id="number16" className="badge-large">1.9K</span><span className="badge-small">General Staff</span></div>
                                </div>
                            </div>
                        </div>
                        <a name="publications" />
                        <div className="custom section section-about-inprint anchor|publications">
                            <p><a name="in-print" /></p>
                            <div className="container">
                                <div className="jumbotron">
                                    <h2>More in print</h2>
                                </div>
                                <div className="tile-row">
                                    <div className="col-md-6 col-sm-6 tile-col">
                                        <div className="tile-item"><a onclick="ga('send', 'event', 'Link', 'Click', 'In Print - Annual Report');" href="/annualreport/?utm_source=corpsite&utm_medium=aboutpage&utm_campaign=NUS%2BAnnual%2BReport%2B2020" target="_blank" rel="noopener noreferrer" title="NUS Annual Report"><span><span className="fa fa-file-pdf-o" /> Annual Report</span></a></div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 tile-col">
                                        <div className="tile-item"><a onclick="ga('send', 'event', 'Link', 'Click', 'In Print - Welcome to NUS');" href="/docs/default-source/corporate-files/about/welcome-to-nus.pdf?t=20200623" target="_blank" rel="noopener noreferrer"><span><span className="fa fa-file-pdf-o" /> Welcome to NUS</span></a></div>
                                    </div>
                                    {/* <div class="col-md-4 col-sm-6 tile-col">
<div class="tile-item"><a onclick="ga('send', 'event', 'Link', 'Click', 'In Print - The NUS Story (English)');" href="/docs/default-source/corporate-files/about/The-NUS-Story.pdf" target="_blank" rel="noopener noreferrer"><span><span class="fa fa-file-pdf-o"></span> The NUS Story</span></a></div>
</div> */}
                                    <div className="col-md-6 col-sm-6 tile-col">
                                        <div className="tile-item"> <span><span className="fa fa-file-pdf-o" />The NUS Story</span>
                                            <p className="inprint-sub"><a onclick="ga('send', 'event', 'Link', 'Click', 'In Print - The NUS Story (English)');" href="/docs/default-source/corporate-files/about/The-NUS-Story.pdf?t=20210106" target="_blank" rel="noopener noreferrer">English</a> | <a onclick="ga('send', 'event', 'Link', 'Click', 'In Print - The NUS Story (Chinese)');" href="/docs/default-source/corporate-files/about/The-NUS-Story_CN.pdf?t=20210106" target="_blank" rel="noopener noreferrer">中文</a></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 tile-col">
                                        <div className="tile-item"><a onclick="ga('send', 'event', 'Link', 'Click', 'In Print - NUS Green Finance Framework');" href="/docs/default-source/corporate-files/about/nus_green_finance_framework.pdf" target="_blank" rel="noopener noreferrer"><span><span className="fa fa-file-pdf-o" />NUS Green Finance Framework</span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <nav className="nus-breadcrumbs">
                    <div className="container">
                        <ul>
                            <li><span className="icon faicon fa-location" /><a href="/" className="pathway">Home</a></li>
                            <li><span>About</span></li>
                        </ul>
                    </div>
                </nav>

                <div className="sfContentBlock"><footer className="nus-footer">
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
                                        <li className="bullet"><a href="/cn">中文</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER - COPYRIGHT - END */}
                </footer>
                </div>

            </div>
        )
    }
}

export default About