import React, { Component } from 'react';
import retreat from '../assets/WinterRetreat.png'
import soup from '../assets/SOUP.png'
import extravagenza from '../assets/Extravagenza.png'
import worship from '../assets/WorshipNight.png'
import '../css/events.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'



class Events extends Component {
  state = {
  };



  render() {
    return (
      <div>
        <Row>
          <div className='event-banner'>
            <img className='event-banner-img' src={retreat} />
          </div>
        </Row>

        <div className='event-container'>
          <Container fluid>
            <Row>
              
            <Col>
              <div className='event'>
                <img classname='event-img' height={'100%'} width={'100%'} src={soup} />
              </div>
            </Col>
            <Col>
              <div className='event'>
                <img classname='event-img' height={'100%'} width={'100%'} src={extravagenza} />
              </div>
            </Col>
            <Col>
              <div className='event'>
                <img classname='event-img' height={'100%'} width={'100%'} src={worship} />
              </div>
            </Col>
            
            </Row>
          </Container>

        </div>
      </div>
    )
  }
};


export default Events