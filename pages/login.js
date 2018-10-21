
import { NavLink, Button, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import Link from 'next/link'
import Head from '../components/head'

const Login = () => (
    <div>
        <Head title="Login"></Head>
        <div style={{height: '100vh'}}>
            <div class="row h-100 justify-content-center align-items-center bg-light">
                <Col md={{ size: 4}}>
                    <div class="shadow p-3 mb-5 bg-white rounded text-center align-items-center">
                        <Form>
                            <FormGroup class="pt-4 pb-4">
                                <Col md={{ size: 10, offset: 1}}>
                                    <Input type="text" placeholder="Email"></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup class="pb-5">
                                <Col md={{ size: 10, offset: 1}}>
                                    <Input type="password" placeholder="Password"></Input>
                                </Col> 
                            </FormGroup>
                            <FormGroup>
                                <Link href="/home"><Button style={{width: '60%'}}>Sign In</Button></Link>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col md={2}/>
                                    <Col>
                                        <NavLink className="text-muted" preload href="/register"> Create Account </NavLink>
                                    </Col>
                                    <Col>
                                        <NavLink className="text-muted" preload href="/reset"> Forgot Password? </NavLink>
                                    </Col>
                                    <Col md={2}/>
                                </Row>
                            </FormGroup>
                        </Form>
                    </div>
                </Col>
            </div>
        </div>
    </div>
)

export default Login