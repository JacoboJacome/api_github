import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';


import GithubUser from "../GithubUser/GithubUser"
import Loader from "../Loader/Loader"


const GitHubFollow = () => {
    const [gitHubFollow, setGitHubFollow] = useState({})
    const [loader, setLoader] = useState(false);
    const follow = useParams();

    useEffect (() => {

        const handleSearchUserFollow = async () => {
            setGitHubFollow(null);
            setLoader(true);
            const API = `https://api.github.com/users/${follow.user}`;
            const response = await fetch(API);
            const result = await response.json();
            console.log(response)
            console.log(result)
            setGitHubFollow(result);
            setLoader(false);
          };
          handleSearchUserFollow();
    }, [follow])
    

    return (
        <div>
            {
                gitHubFollow &&
                <GithubUser
                avatar={gitHubFollow?.avatar_url}
                github={gitHubFollow?.html_url}
                github_name={gitHubFollow?.login}
                name={gitHubFollow?.name}
                public_repos={gitHubFollow?.public_repos}
                followers={gitHubFollow?.followers}
                following={gitHubFollow?.following}
              />
            }
            {loader && <Loader />}  
        </div>
    )
}

export default GitHubFollow;
