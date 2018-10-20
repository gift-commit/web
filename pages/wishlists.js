import { ListGroup, ListGroupItem, Table, Row, Col } from 'reactstrap'
import Head from '../components/head'

const Wishlists = () => (
    <div style={{height: '100vh'}}>
        <Head loggedIn={true} title="Wishlists"></Head>
        <Row>
            <Col md={2} style={{ 'padding-left': 0, 'padding-right': 0 }}>
                <div class="border-right border-top">
                    <ListGroup flush style={{"textAlign": "center"}}>
                        <ListGroupItem tag="a" href="#">Person A</ListGroupItem>
                        <ListGroupItem tag="a" href="#">Person B</ListGroupItem>
                        <ListGroupItem tag="a" href="#">Person C</ListGroupItem>
                        <ListGroupItem tag="a" href="#">Person D</ListGroupItem>
                        <ListGroupItem tag="a" href="#">Person F</ListGroupItem>       
                    </ListGroup>
                </div>
            </Col>
            <Col md={10} style={{ 'padding-left': 0, 'padding-right': 0 }}>
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Notes</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>PlayStation 4</td>
                        <td>$299.99</td>
                        <td>I would like the black one!</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>PlayStation 4</td>
                        <td>$299.99</td>
                        <td>I would like the black one!</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>PlayStation 4</td>
                        <td>$299.99</td>
                        <td>I would like the black one!</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>PlayStation 4</td>
                        <td>$299.99</td>
                        <td>I would like the black one!</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>PlayStation 4</td>
                        <td>$299.99</td>
                        <td>I would like the black one!</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>PlayStation 4</td>
                        <td>$299.99</td>
                        <td>I would like the black one!</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>PlayStation 4</td>
                        <td>$299.99</td>
                        <td>I would like the black one!</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>PlayStation 4</td>
                        <td>$299.99</td>
                        <td>I would like the black one!</td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>PlayStation 4</td>
                        <td>$299.99</td>
                        <td>I would like the black one!</td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>PlayStation 4</td>
                        <td>$299.99</td>
                        <td>I would like the black one!</td>
                    </tr>
                    <tr>
                        <th scope="row">11</th>
                        <td>PlayStation 4</td>
                        <td>$299.99</td>
                        <td>I would like the black one!</td>
                    </tr>
                    <tr>
                        <th scope="row">12</th>
                        <td>PlayStation 4</td>
                        <td>$299.99</td>
                        <td>I would like the black one!</td>
                    </tr>
                    </tbody>
                </Table>    
            </div>
            </Col>
        </Row>
    </div>
)

export default Wishlists