import React, { PureComponent } from 'react'
import Header from "../widgets/header"
import Navbar from "../widgets/navbar"
import Footer from "../widgets/footer"

class Admission extends PureComponent {
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
                        <div className="custom section section-admissions-programmes">
                            <div className="container">
                                <div className="jumbotron">
                                    <h1>Programmes</h1>
                                    <p>At NUS, we believe that knowledge and research can, and should, be used to improve lives. To empower our students, we've pioneered some of the most innovative programmes available today.</p>
                                    <p>Choose from our wide-ranging multi-disciplinary&nbsp;curricula, including over 70 joint, concurrent and double degree courses established with the world’s leading universities.</p>
                                </div>
                                <div>
                                    <div className="col-md-6 col-sm-6 tile-col">
                                        <div className="tile-item"><a href="//www.nus.edu.sg/oam" onclick="ga('send','event','NUS Admissions', 'click', 'Programmes - Undergraduate');" target="_blank"><span>Undergraduate</span></a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 tile-col">
                                        <div className="tile-item tile-item-orange"><a href="//www.nus.edu.sg/admissions/graduate-studies/" onclick="ga('send','event','NUS Admissions', 'click', 'Programmes - Graduate');" target="_blank"><span>Graduate</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom section-admissions-banner1" style={{ backgroundImage: 'url(https://nus.edu.sg/images/default-source/corporate/admissions/banner-1.jpg)' }}>
                            <div className="caption">USP students with their professors out at sea to experience the physics of sailing.</div>
                        </div>
                        <a name="scholarships" />
                        <div className="custom section section-admissions-scholarships anchor|scholarships">
                            <div className="container">
                                <div className="col-md-6">
                                    <div className="jumbotron">
                                        <h2>Scholarships</h2>
                                        <p>For students with outstanding academic achievements, leadership qualities and special talents, we offer a range of scholarships and awards.</p>
                                        <p><a href="//www.nus.edu.sg/oam/scholarships/" onclick="ga('send','event','NUS Admissions', 'click', 'Scholarships - Undergraduate');" target="_blank">Undergraduate <span className="fa fa-angle-right" /></a><br />
                                            <a href="//www.nus.edu.sg/admissions/graduate-studies/scholarships.php" onclick="ga('send','event','NUS Admissions', 'click', 'Scholarships - Graduate');" target="_blank">Graduate <span className="fa fa-angle-right" /></a>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="chart-content">
                                        <div className="chart-item"><span className="fa fa-check" />&nbsp;<span className="chart-label">Bond-free</span>
                                        </div>
                                        <div className="chart-item"><span className="fa fa-check" />&nbsp;<span className="chart-label">Covers all tuition fees</span>
                                        </div>
                                        <div className="chart-item"><span className="fa fa-check" />&nbsp;<span className="chart-label">Annual living allowances</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a name="financial-aid" />
                        <div className="custom section section-admissions-financial anchor|financial-aid">
                            <div className="container">
                                <div className="jumbotron">
                                    <h2>Financial aid</h2>
                                    <p>Our various financial aid packages are tailored to meet your needs.</p>
                                    <p><a href="//www.nus.edu.sg/oam/financial-aid" target="_blank">Undergraduate <span className="fa fa-angle-right" /></a><br />
                                        <a href="//www.nus.edu.sg/admissions/graduate-studies/financial-aid.php" target="_blank">Graduate <span className="fa fa-angle-right" /></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="custom section-admissions-banner2" style={{ backgroundImage: 'url(https://nus.edu.sg/images/default-source/corporate/admissions/banner-2.jpg)' }}>
                        </div>
                        <a name="staying-on-campus" />
                        <div className="custom section section-admissions-staying anchor|staying-on-campus">
                            <div className="container">
                                <div className="jumbotron">
                                    <h2>Staying on campus</h2>
                                    <p>Your friends at NUS will go on to become the architects, designers, doctors, engineers, entrepreneurs, lawyers, musicians, writers and politicians of their generation. You will bond with them over meals, sports, seminars and community activities. Living on campus is exciting and rewarding.</p>
                                    <p><a href="//nus.edu.sg/osa/has/non-graduating/hostel-options" target="_blank">Learn more <span className="fa fa-angle-right" /></a></p>
                                </div>
                                <div className="col-md-4 col-sm-4 image-col">
                                    <div className="image-container"><img alt="" src="https://nus.edu.sg/images/default-source/corporate/admissions/sheares.jpg" />
                                        <div className="image-caption">Sheares Hall</div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 image-col">
                                    <div className="image-container"><img alt="" src="https://nus.edu.sg/images/default-source/corporate/admissions/tembusu.jpg" />
                                        <div className="image-caption">Tembusu College</div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 image-col">
                                    <div className="image-container"><img alt="" src="https://nus.edu.sg/images/default-source/corporate/admissions/ridgeview.jpg" />
                                        <div className="image-caption">Ridge View Residential College</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="custom section section-admissions-apply">
                            <div className="container">
                                <div className="jumbotron">
                                    <h2>Apply</h2>
                                    <p>We look forward to learning about you.</p>
                                    <p><a href="//nus.edu/eviewbook" target="_blank"><span className="fa fa-file-pdf-o" /> Download "NUS Undergraduate Viewbook 2020/2021"</a></p>
                                </div>
                                <div className="col-md-6 col-sm-6 tile-col">
                                    <div className="tile-item"><a href="//www.nus.edu.sg/oam" onclick="ga('send','event','NUS Admissions', 'click', 'Apply - Undergraduate');" target="_blank"><span>Undergraduate</span></a></div>
                                </div>
                                <div className="col-md-6 col-sm-6 tile-col">
                                    <div className="tile-item tile-item-orange"><a href="//www.nus.edu.sg/admissions/graduate-studies/" onclick="ga('send','event','NUS Admissions', 'click', 'Apply - Undergraduate');" target="_blank"><span>Graduate</span></a></div>
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
                            <li><span>Admissions</span></li>
                        </ul>
                    </div>
                </nav>

                <Footer />
            </div>
        )
    }
}

export default Admission
