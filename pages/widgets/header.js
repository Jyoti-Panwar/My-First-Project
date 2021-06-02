import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Header extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <header className="nus-header" style={{ width: "100%" }}>
        <div className="container">
          <div className="row">
            {/* LOGO SECTION - START */}
            <div className="col-md-6 nus-logo clearfix">
              {/* NUS LOGO */}
              <a className="navbar-brand" href="/">
                <img src="https://nus.edu.sg/images/default-source/base/logo.png" alt="NUS" />
              </a>
            </div>
            {/* LOGO SECTION - END */}
            <div className="col-md-6 hidden-xs hidden-sm">
              {/* QUICKLINKS */}
              <div className="sfContentBlock"><div className="nus-quicklinks">
                <div className="pull-right">
                  <ul className="box nav nav-pills" style={{ right: '111px' }}>
                    <li>
                      <Button style={{ padding: "7.6px 8px" }} onClick={() => this.setState({ setOpen: true })}>
                        <a style={{ fontSize: "14px", textTransform: "initial" }} href="#" target="_self">Contact Us</a>
                      </Button>
                      <Menu
                        open={this.state.setOpen}
                        onClose={() => this.setState({ setOpen: false })}
                      >
                        <MenuItem onClick={() => this.setState({ setOpen: false })}>Whatsapp</MenuItem>
                        <MenuItem onClick={() => this.setState({ setOpen: false })}>Hangout</MenuItem>
                        <MenuItem onClick={() => this.setState({ setOpen: false })}>Instagram</MenuItem>
                      </Menu>
                    </li>
                    
                    <li><a href="#" target="_self">Library</a></li>
                    <li><a href="#" target="_self">Student</a></li>
                    <li><a href="#">Staff</a></li>
                    <li><a href="#" target="_self">Alumni</a></li>
                  </ul>
                </div>
                <div className="pull-right"><a href="/" target="_self" style={{ textDecoration: 'none' }}><img src="https://nus.edu.sg/images/default-source/logo/nus115-300x137.png" alt="NUS115" style={{ maxHeight: '53px', verticalAlign: 'text-top' }} /></a></div>
              </div>
              </div>
              {/* //QUICKLINKS */}
            </div>
            <div className="nus-mobile-nav hidden-lg hidden-md">
              <ul>
                <li><a href="http://www.nus115.sg/" target="_blank" alt="nus115sg" style={{ textDecoration: 'none', padding: '5px' }}><img src="https://nus.edu.sg/images/default-source/logo/nus115-300x137.png" alt="NUS115" style={{ maxHeight: '24px', cursor: 'pointer' }} /></a></li>
                <li><a className="faicon fa-search collapsed" data-toggle="collapse" data-target="#search-collapse" href="javascript:void(0)" style={{ padding: '10px' }}>&nbsp;</a></li>
                <li><a className="btn-toggle off-canvas-toggle" data-pos="right" data-effect="off-canvas-effect-4" data-nav="#nus-sidebar-off-canvas" href="javascript:void(0)" style={{ padding: '10px' }}><img src="/images/default-source/icons/ico-menu-14px.png?sfvrsn=c7bd87f4_2" /></a></li>
              </ul>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </header>
    )
  }
}

export default Header