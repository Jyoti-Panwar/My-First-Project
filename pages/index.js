import React, { PureComponent } from 'react'
import Header from "./widgets/header";
import Navbar from "./widgets/navbar";
import Footer from "./widgets/footer";
import Container from "./widgets/container"
import Slider from './widgets/slider';

class Index extends PureComponent {
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
        <div className="slider-box">
          <Slider />
        </div>
        <Container />
        <Footer />
      </div>
    )
  }
}

export default Index