import React, { PureComponent } from 'react'

class Navbar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <nav style={{width:"100%", float: "left"}} className="navbar navbar-default nus-main-nav hidden-xs hidden-sm">
                <div className="container clearfix">
                    {/* MAIN MENU - NUS - START */}
                    <div id="container">
                        <div className="nus-megamenu hidden-sm hidden-xs">
                            <ul className="nav navbar-nav">
                                <li className="dropdown mega-menu-parent active">
                                    <a href="/" target="_self"><span>Home</span></a>
                                </li>
                                <li className="dropdown mega-menu-parent ">
                                    <a href="../innerComponents/admission" target="_self"><span>Admissions</span></a>
                                    <ul className="dropdown-menu mega-menu" style={{ display: 'none' }}>
                                        <li>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-3 no-pad large">
                                                        <ul>
                                                            <li className><a href="/admissions">Undergraduate &amp;<br />Graduate Programmes</a>
                                                                <ul style={{ marginBottom: '5px' }}>
                                                                    <li><a href="/admissions#scholarships">Scholarships</a></li>
                                                                    <li><a href="/admissions#financial-aid">Financial aid</a></li>
                                                                    <li><a href="/admissions#staying-on-campus">Staying on campus</a></li>
                                                                    <li><a href="#">Tuition Fees</a>
                                                                        <ul style={{ marginBottom: '5px' }}>
                                                                            <li><a href="http://www.nus.edu.sg/registrar/administrative-policies-procedures/undergraduate/undergraduate-fees" target="_blank">Undergraduate Tuition Fees</a></li>
                                                                            <li><a href="http://www.nus.edu.sg/registrar/administrative-policies-procedures/graduate/graduate-fees" target="_blank">Graduate Tuition Fees</a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="http://provost.nus.edu.sg/education/academic-cluster#executive-education" target="_blank" rel="noopener noreferrer">Executive &amp; Lifelong<br />education</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-8 no-pad hidden">
                                                        <a href="http://www.nus.edu.sg/oam/why-nus/nusbeyond/business" target="_blank"><img src="/images/default-source/corporate/homepage-refresh/mnu-admissions.jpg?sfvrsn=6c8476f5_2" className="img-responsive" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown mega-menu-parent ">
                                    <a href="../innerComponents/education" target="_self"><span>Education</span></a>
                                    <ul className="dropdown-menu mega-menu" style={{ display: 'none' }}>
                                        <li>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-3 no-pad" style={{ borderRight: '1px solid #eeeeee', paddingRight: '45px' }}>
                                                        <div className="large">
                                                            <ul>
                                                                <li><a href="/education">Faculties &amp; Schools</a></li>
                                                                <li><a href="/education#academic-calendar">Academic Calendar</a></li>
                                                                <li><a href="http://www.nus.edu.sg/gro/about-us/global-programmes" target="_blank" rel="noopener noreferrer">Global Programmes</a></li>
                                                                <li><a href="http://provost.nus.edu.sg/education/academic-cluster#executive-education" target="_blank" rel="noopener noreferrer">Executive &amp; Lifelong<br />education</a></li>
                                                            </ul>
                                                        </div>
                                                        <hr style={{ borderTop: '1px solid #eeeeee', margin: '15px 0' }} /><strong>Specialist teaching &amp; learning</strong>
                                                        <ul>
                                                            <li><a href="http://www.cdtl.nus.edu.sg/" target="_blank" rel="noopener noreferrer">Development of Teaching &amp; Learning</a></li>
                                                            <li><a href="http://www.nus.edu.sg/celc/" target="_blank" rel="noopener noreferrer">English Language Communication</a></li>
                                                            <li><a href="http://nus.edu.sg/alset/" target="_blank" rel="noopener noreferrer">Learning Science and Educational Technology</a></li>
                                                            <li><a href="http://www.iss.nus.edu.sg/" target="_blank" rel="noopener noreferrer">Systems Science</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3 no-pad"><strong>Student Resources and Support</strong>
                                                        <ul>
                                                            <li><a href="http://enterprise.nus.edu.sg/" target="_blank" rel="noopener noreferrer">Enterprise</a></li>
                                                            <li><a href="http://nus.edu.sg/cfg/" target="_blank" rel="noopener noreferrer">Future-ready Graduates</a></li>
                                                            <li><a href="http://www.nus.edu.sg/gro/" target="_blank" rel="noopener noreferrer">Global Relations Office</a></li>
                                                            <li><a href="http://www.nus.edu.sg/ohs/" target="_blank" rel="noopener noreferrer">Housing Services</a></li>
                                                            <li><a href="http://libportal.nus.edu.sg/" target="_blank" rel="noopener noreferrer">Libraries</a></li>
                                                            <li><a href="http://www.nus.edu.sg/registrar/" target="_blank" rel="noopener noreferrer">Registrar’s Office</a></li>
                                                            <li><a href="http://www.nus.edu.sg/osa/" target="_blank" rel="noopener noreferrer">Student Affairs</a></li>
                                                            <li><a href="http://www.nus.edu.sg/ILO" target="_blank" rel="noopener noreferrer">Technology Translation &amp; Commercialisation</a></li>
                                                            <li><a href="http://www.nus.edu.sg/uhc/" target="_blank" rel="noopener noreferrer">University Health Centre</a></li>
                                                            <li><a href="https://victimcare.nus.edu.sg/" target="_blank" rel="noopener noreferrer">Victim Care Unit</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown mega-menu-parent ">
                                    <a href="../innerComponents/about" target="_self"><span>About</span></a>
                                    <ul className="dropdown-menu mega-menu" style={{ display: 'none' }}>
                                        <li>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-3 no-pad"><strong>Overview</strong>
                                                        <ul>
                                                            <li><a href="/about">Vision, Mission and Values</a></li>
                                                            <li><a href="http://enterprise.nus.edu.sg/" target="_blank" rel="noopener noreferrer">Enterprise</a></li>
                                                            <li><a href="http://www.nus.edu.sg/gro/" target="_blank" rel="noopener noreferrer">Global</a></li>
                                                            <li><a href="/about#corporate-information">Corporate Information</a></li>
                                                            <li><a href="/about#institutional-video">Institutional Video</a></li>
                                                            <li><a href="/about#publications">Publications</a></li>
                                                            <li><a href="http://www.nus.edu.sg/registrar/administrative-policies-procedures/nus-statutes-and-regulations" target="_blank" rel="noopener noreferrer">Statutes &amp; Regulations</a></li>
                                                            <li><a href="/about/service-commitment">Service Commitment</a></li>
                                                            <li><a href="/docs/default-source/corporate-files/about/code-of-conduct-nus-staff.pdf">Code of Conduct for NUS Staff</a></li>
                                                            <li><a href="/about/departments">Departments A-Z</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3 no-pad1"><strong>Leadership</strong>
                                                        <ul>
                                                            <li><a href="/about/board-of-trustees">Board of Trustees</a></li>
                                                            <li><a href="http://president.nus.edu.sg/" target="_blank" rel="noopener noreferrer">NUS President</a></li>
                                                            <li><a href="/about/management">Management</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3 no-pad1"><strong>Our Heritage</strong>
                                                        <ul>
                                                            <li><a href="/about/founded-by-the-community">History</a></li>
                                                            <li><a href="/about/founded-by-the-community#chancellors">Chancellors</a></li>
                                                            <li><a href="/about/founded-by-the-community#vice-chancellors">Former Vice-Chancellors<br />&amp; Presidents</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3 no-pad1"><strong>Resources</strong>
                                                        <ul>
                                                            <li><a href="https://discovery.nus.edu.sg/" target="_blank" rel="noopener noreferrer">Academic and Research Staff Profile</a></li>
                                                            <li><a href="https://myaces.nus.edu.sg/CoE/" target="_blank" rel="noopener noreferrer">Calendar</a></li>
                                                            <li><a href="http://www.nus.edu.sg/careers/" target="_blank" rel="noopener noreferrer">Careers</a></li>
                                                            <li><a href="http://community.nus.edu.sg/ecards/" target="_blank" rel="noopener noreferrer">E-cards</a></li>
                                                            <li><a href="http://libportal.nus.edu.sg/" target="_blank" rel="noopener noreferrer">Library</a></li>
                                                            <li><a href="https://luminus.nus.edu.sg/" target="_blank" rel="noopener noreferrer">LumiNUS</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* MAIN MENU - NUS - END */}
                    {/* SEARCH BUTTON ICON - START */}
                    <div className="search-btn-box hidden-sm hidden-xs">
                        <a className="collapsed" data-toggle="collapse" data-target="#search-collapse" href="#"><img src="https://nus.edu.sg/images/default-source/icons/search.jpg?sfvrsn=3a24518d_4" className="img-search-btn" /></a>
                    </div>
                    {/* SEARCH BUTTON ICON - END */}
                </div>
            </nav>

        )
    }
}

export default Navbar