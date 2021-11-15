import React ,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

//Components
import Loader from '../../Components/Custom/Loader/Loader';
import FollowingUser from '../../Components/Custom/FollowingUser/FollowingUser';

const Following = () => {
    //Hooks
    const {user} = useParams();
    //State
    const [following, setFollowing] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setFollowing([]);
        setLoader(true);
        const handleUserFollowing = async () => {
            const response = await fetch(
                `https://api.github.com/users/${user}/following`
            );
            const result = await response.json();
            setFollowing(result);
        };
        handleUserFollowing();
        setLoader(false);
    }, [user]);

    return (
        <div className="flex flex-row flex-wrap">
            {following && following.length > 0 && !loader ? (
                following.map(user => (
                  <FollowingUser
                  avatar={user.avatar_url ? user.avatar_url : null}
                  github={user.html_url}
                  github_name={user.login}
                  public_repos={user.public_repos}
                  followers={user.followers}
                  />
                ))
            ) : (
               <Loader />
               )}
        </div>
    )
}

export default Following;