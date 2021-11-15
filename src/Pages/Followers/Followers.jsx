import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import Loader from "../../Components/Custom/Loader/Loader";
import FollowersUser from "../FollowersUser/FollowersUser";

const Followers = () => {
  //Hooks
  const { user } = useParams();
  //State
  const [followers, setFollowers] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setFollowers([]);
    setLoader(true);
    const handleUserFollowers = async () => {
      const response = await fetch(
        `https://api.github.com/users/${user}/followers`
      );
      const result = await response.json();
      setFollowers(result);
    };
    handleUserFollowers();
    setLoader(false);
  }, [user]);

  return (
    <div className="flex flex-row flex-wrap">
      {followers && followers.length > 0 && !loader ? (
        followers.map(user => (
          <FollowersUser
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
  );
};

export default Followers;