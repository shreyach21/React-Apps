import React, { useState, useEffect } from "react";
import axios from "axios"
import { ListGroup, ListGroupItem } from "reactstrap"

const Repos = ({ repos_url }) => {
    const [repos, setRepos] = useState([]);
    const fetchRepos = async () => {
        const { data } = await axios.get(repos_url);
        setRepos(data)
    }
    useEffect(() => {
        fetchRepos()
    }, [repos_url])
    return (
        <ListGroup>
            {repos.map((repo)=>(
                <ListGroupItem key={repo.id}>
                    <div className="text-primary">{repo.full_name}</div>
                    <div className="text-primary">Visibility: {repo.visibility}</div>
                    <div className="text-secondary">{repo.language}</div>
                    <div className="text-info">{repo.description}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Repos;