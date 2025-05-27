// src/components/Orchids/Orchids.jsx
import React from 'react';
import OrchidCard from './OrchidCard.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import orchids from './ListOrchids';

export default function Orchids() {
  return (
    <Container className="mt-4">
     <div className="text-center" >
       <img src='https://www.xpressflower.com/Sitefinity/WebsiteTemplates/Xpressflower/App_Themes/Xpressflower/Images/branding.png' ></img>
     </div>
      <Row>
        {orchids.map((orchid) => (
          <Col key={orchid.id} xs={12} sm={6} md={4} lg={3}>
            <OrchidCard orchid={orchid} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
