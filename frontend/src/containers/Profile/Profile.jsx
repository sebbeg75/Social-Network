import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pic10 from './Pic10.jpg';
import Pic11 from './Pic11.jpg';
import Pic12 from './Pic12.jpg';
import Pic13 from './Pic13.jpg';



const Profile = () => {
    return (
        <section>
            <Container fluid>
                <Row>
                    <Col>
                    
                        <img className="picture" src={Pic13}></img>
                    
                    </Col>
                </Row>
                </Container>
                <Container>
                <Row>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {Pic10} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {Pic11} />
                        <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Pic12} />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <div>
                        <a href="#" className="btn btn-primary"><FontAwesomeIcon icon={faThumbsUp} /></a>
                    </div>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
                </Container>
        </section>
        
        
    );
};

export default Profile;