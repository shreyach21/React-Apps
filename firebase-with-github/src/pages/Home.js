import React, { useState, useContext } from "react";
import { Axios } from "axios";

import { Container, Input, InputGroup, Row, Col, Button } from "reactstrap";

import { Usercontext } from "../context/Usercontext";
import { redirect } from "react-router-dom"
import { toast } from "react-toastify"
import UserCard from "../components/UserCard";
import Repos from "../components/Repos";

const Home = () => {
    const context = useContext(Usercontext);
    const [query, setQuery] = useState("");
    const [user, setUser] = useState(null);
    const fetchDetails = async () => {
        try {
            const { data } = await Axios.get(`https://api.github.com/users/${query}`)
            setUser(data)
            console.log(data);
        } catch (error) {
            toast("Not able to locate the user", {
                type: "error"
            })
        }
    }
    // if(!context.user?.uid){
    //     return <redirect to="/Signin"/>
    // }
    return (
        <Container>
            <Row className="mt-3">
                <Col md="5">
                    <InputGroup>
                        <Input
                            type="text"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            placeholder="Please provide the username"
                        />
                        <Button color="primary" onClick={fetchDetails}>Fetch User</Button>
                    </InputGroup>
                    {user ? <UserCard user={user} /> : null}
                </Col>
                <Col md="7">
                    {user ? <Repos repos_url={user.repos_url} /> : null}
                </Col>
            </Row>
        </Container>
    )
}

export default Home;