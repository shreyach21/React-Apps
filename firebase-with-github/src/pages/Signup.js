import React, { useContext, useState } from "react";
import {
    Container,
    Form,
    FormGroup,
    Button,
    Label,
    Input,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    CardHeader
} from "reactstrap"

import firebase from "firebase/compat/app";
import { redirect } from "react-router-dom";
import { Usercontext } from "../context/Usercontext";
import { toast } from "react-toastify";


const Signup = () => {
    const context = useContext(Usercontext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignup = () => {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res);
                context.setUser({email:res.user.email,uid:res.user.uid})
            })
            .catch(error => {
                console.log(error);
                toast(error.message, {
                    type: "error"
                })
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignup();
    }
    if (context.user?.uid) {
        return <redirect to="/" />
    }
    return (
        <Container className="text-center">
            <Row>
                <Col lg={6} className="offset-lg-3 mt-5">
                    <Card>
                        <Form onSubmit={handleSubmit}>
                            <CardHeader className="">Sign Up here</CardHeader>
                            <CardBody>
                                <FormGroup row>
                                    <Label for="email" sm={3}>
                                        Email
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Provide your email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="password" sm={3}>
                                        Password
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Your Password here"
                                            value={password}
                                            onChange={e => setPassword(e.target.password)}
                                        />
                                    </Col>
                                </FormGroup>
                            </CardBody>
                            <CardFooter className=""><Button type="submit" block color="primary">Sign Up</Button></CardFooter>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup;