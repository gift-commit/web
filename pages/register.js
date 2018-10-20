
import { Button, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import Head from '../components/head'

const Login = () => (
    <div>
        <Head title="Create Account"></Head>
        <div style={{height: '100vh'}}>
            <div class="row h-100 justify-content-center align-items-center bg-light">
                <Col lg={{ size: 4}}>
                    <div class="shadow p-3 mb-5 bg-white rounded text-center align-items-center">
                        <Form>
                            <FormGroup class="pt-4 form-group">
                                <Col lg={{ size: 10, offset: 1}}>
                                    <Row>
                                        <Col lg={{ size: 6}}>
                                            <Input type="text" placeholder="First Name"></Input>
                                        </Col>
                                        <Col lg={{ size: 6}}>
                                            <Input type="text" placeholder="Last Name"></Input>
                                        </Col>
                                    </Row>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col lg={{ size: 10, offset: 1}}>
                                    <Input type="te xt" placeholder="Email"></Input>
                                </Col> 
                            </FormGroup>
                            <FormGroup>
                                <Col lg={{ size: 10, offset: 1}}>
                                    <Input type="password" placeholder="Password"></Input>
                                </Col> 
                            </FormGroup>
                            <FormGroup class="pb-4">
                                <Col lg={{ size: 10, offset: 1}}>
                                    <Input type="password" placeholder="Confirm Password"></Input>
                                </Col> 
                            </FormGroup>
                            <FormGroup>
                                <Button style={{width: '60%'}}> Create Account </Button>
                            </FormGroup>
                        </Form>
                    </div>
                </Col>
            </div>
        </div>
    </div>
)

export default Login