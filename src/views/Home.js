/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react"
// reactstrap components
import { Col, Row } from "reactstrap"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bigChartData: "data1",
    }
  }
  setBgChartData = (name) => {
    this.setState({
      bigChartData: name,
    })
  }
  render() {
    return (
      <>
        <div className="content">
          <Row lg="12">
            <Col lg="12">
              <h1>Sample Landing Page</h1>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

export default Home
