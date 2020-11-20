
import { Button, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import Head from '../components/head'
import GiftCommitClient from '../client/gift-commit'
import Link from 'next/link'

export default class Register extends React.Component {

    state = {
        firstName: null, 
        lastName: null, 
        email: null, 
        password: null
    }

    createAccount = () => {
        GiftCommitClient.createAccount(this.state)

        document.location = "/login"
    }

    render() {
        return (
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
                                                    <Input type="text" 
                                                        placeholder="First Name" 
                                                        required
                                                        onChange={ (event) => {
                                                            this.setState({firstName: event.target.value})
                                                        }}></Input>
                                                </Col>
                                                <Col lg={{ size: 6}}>
                                                    <Input type="text" 
                                                        placeholder="Last Name" 
                                                        onChange={ (event) => {
                                                            this.setState({lastName: event.target.value})
                                                        }}></Input>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col lg={{ size: 10, offset: 1}}>
                                            <Input type="text" 
                                                placeholder="Email" 
                                                onChange={ (event) => {
                                                    this.setState({email: event.target.value})
                                                }}></Input>
                                        </Col> 
                                    </FormGroup>
                                    <FormGroup>
                                        <Col lg={{ size: 10, offset: 1}}>
                                            <Input type="password" 
                                                placeholder="Password" 
                                                onChange={ (event) => {
                                                    this.setState({password: event.target.value})
                                                }}></Input>
                                        </Col> 
                                    </FormGroup>
                                    <FormGroup class="pb-4">
                                        <Col lg={{ size: 10, offset: 1}}>
                                            <Input type="password" 
                                                placeholder="Confirm Password" 
                                                onBlur={ (event) => {
                                                    this.state.password == event.target.value
                                                }}></Input>
                                        </Col> 
                                    </FormGroup>
                                    <FormGroup>
                                        <Button style={{width: '60%'}} onClick={() => this.createAccount()}>Create Account</Button>
                                    </FormGroup>
                                </Form>
                            </div>
                        </Col>
                    </div>
                </div>
            </div>
        )
    }
}