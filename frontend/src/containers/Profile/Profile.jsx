import React from 'react';
import { Container, Card, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pic10 from './Pic10.jpg';
import Pic11 from './Pic11.jpg';
import Pic12 from './Pic12.jpg';
import Pic14 from './Pic14.jpeg';
import Pic15 from './Pic15.jpeg';
import Pic16 from './Pic16.jpeg';
import Pic17 from './Pic17.jpeg';




const Profile = () => {
    return (
        <Container>
            <Card>
                <Card.Img variant="top" src={Pic14} />
                <Card.Body>
                    <Card.Text>
                    <h3 className="absolute-center">Welcome to Polaroid, the social network from photografers to everybody!</h3>
                    </Card.Text>
                </Card.Body>
            </Card>

            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={Pic10} />
                        <Card.Body>
                            <Card.Title>Thailand</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, error culpa in alias adipisci quibusdam recusandae! Veritatis nam eius suscipit distinctio est. Magni pariatur repudiandae ea! Ea assumenda tenetur nam.
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <a href="#" className="btn btn-primary"><FontAwesomeIcon icon={faThumbsUp} /></a>
                        </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Pic11} />
                        <Card.Body>
                            <Card.Title>Gothenburg</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nemo numquam aut tenetur voluptatibus repellat quo dolores iusto nostrum molestias, architecto odit autem consequatur, natus veritatis porro doloremque quibusdam facilis.
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <a href="#" className="btn btn-primary"><FontAwesomeIcon icon={faThumbsUp} /></a>
                        </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Pic12} />
                        <Card.Body>
                            <Card.Title>Cologne</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, expedita. Veritatis blanditiis obcaecati quidem perferendis commodi voluptatem maxime iure quia optio, excepturi tempore laborum, adipisci perspiciatis ad provident et saepe!
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <a href="#" className="btn btn-primary"><FontAwesomeIcon icon={faThumbsUp} /></a>
                        </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={Pic15} />
                        <Card.Body>
                            <Card.Title>London</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptate architecto saepe qui perspiciatis doloribus consectetur, voluptatibus atque. Veritatis dolor minus qui laudantium! Quaerat ipsam rem eum quasi ea? Maxime!
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <a href="#" className="btn btn-primary"><FontAwesomeIcon icon={faThumbsUp} /></a>
                        </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Pic16} />
                        <Card.Body>
                            <Card.Title>Amsterdam</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure et, voluptate unde quisquam dolorum exercitationem suscipit aut pariatur doloremque eaque reprehenderit ad voluptates adipisci beatae earum enim? Repellat, delectus?
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <a href="#" className="btn btn-primary"><FontAwesomeIcon icon={faThumbsUp} /></a>
                        </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Pic17} />
                        <Card.Body>
                            <Card.Title>Buenos Aires</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eligendi, vitae voluptatibus ipsam doloremque architecto! Nemo illum dolores quibusdam odio illo debitis autem sint voluptates facilis omnis. Similique, autem maiores?
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <a href="#" className="btn btn-primary"><FontAwesomeIcon icon={faThumbsUp} /></a>
                        </Card.Footer>
                </Card>
            </CardGroup>

        </Container>
        
    );
};

export default Profile;