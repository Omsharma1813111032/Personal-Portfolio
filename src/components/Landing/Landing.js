import React from 'react'
import "./Landing.css"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {Container,Row,Col} from "react-bootstrap"

const Landing = () => {
  return (
    <div id='landing'>

        <Container>
          <Row>
            <Col sm={6} className='landing-up' >
                <img src="/Pic.png" alt="Pic" className='landing-i' />
            </Col>
            <Col sm={6} className='order-md-first  landing-down' >
              <div className='info-landing'>
                <div className='info-name'>
                    <h1 className='info-nm'>Om Sharma 🖐</h1>
                </div>

                <Box className='info-destination text-center'>
                    <Button variant="outlined" className="btn-dest" >Full Stack Developer 💻</Button>
                </Box>

              </div>
            </Col>
          </Row>
        </Container>

    </div>
  )
}

export default Landing