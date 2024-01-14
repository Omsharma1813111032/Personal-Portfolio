import React from 'react'
import "./Landing.css"
import {Container,Row,Col} from "react-bootstrap"

const Landing = () => {
  return (
    <div id='landing'>

        <Container>
          <Row>
            <Col lg={8} >
              <div className='info-landing'>
                <div className='info-name'>
                    <h1 className='info-nm'>Om Sharma 🖐</h1>
                </div>
                <div className='info-destination'>
                    <h6 className='info-dest'>Full-Stack Developer 💻 </h6>
                </div>
              </div>
            </Col>
            <Col lg={4} >hi</Col>
          </Row>
        </Container>

    </div>
  )
}

export default Landing