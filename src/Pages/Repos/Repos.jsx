import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

//Components
import Loader from '../../Components/Custom/Loader/Loader'
import GitHubRepos from '../../Components/Custom/GitHubRepos/GitHubRepos'


const Repos = () => {
    //Hooks
    const {user} = useParams();
    //State
    const [repos, setRepos] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setRepos([]);
        setLoader(true);
        const handleUserRepos = async () => {
            const response = await fetch(
                `https://api.github.com/users/${user}/repos`
            );
            const result = await response.json();
            setRepos(result);
        };
        handleUserRepos();
        setLoader(false);
    }, [user]);

    return (
        <div> 
            {repos && repos.length > 0 && !loader ? (
             repos.map(user => (
                <GitHubRepos
                 avatar={user.owner.avatar_url ? user.owner.avatar_url : null}
                 repo={user.html_url}
                 github_name={user.owner.login}
                 public_repos={user.name}
                 estado={user.visibility}
          />
        ))
      ) : (
        <Loader />
      )}      
        </div>
    )
}

export default Repos
