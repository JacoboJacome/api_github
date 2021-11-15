import React, { useState } from "react";

//Components
import UserForm from "../../Components/Home/Form/UserForm";
import GithubUser from "../../Components/Custom/GithubUser/GithubUser";
import Loader from "../../Components/Custom/Loader/Loader";


//Views
import Error from "../Error/Error"

const Home = () => {

  //State
  const [userName, setUserName] = useState("");
  const [userInformation, setUserInformation] = useState(null);
  const [loader, setLoader] = useState(false);
  const [userStatus, setUserStatus] = useState(null)

  //Funciones
  const handleUserName = ({ value }) => {
    setUserName(value);
  };

  const handleSearchUser = async e => {
    e.preventDefault();
    setUserInformation(null);
    setLoader(true);
    const API = `https://api.github.com/users/${userName}`;
    const response = await fetch(API);
    const result = await response.json();
    setUserStatus(response.status)
    setUserInformation(result);
    setLoader(false);
  };

  return (
    <div className="">
      <UserForm
        handleUserName={handleUserName}
        handleSearchUser={handleSearchUser}
      />
      <div className="text-center">
      {userStatus === 200 ? ( 
          <GithubUser
            avatar={userInformation?.avatar_url}
            github={userInformation?.html_url}
            github_name={userInformation?.login}
            name={userInformation?.name}
            public_repos={userInformation?.public_repos}
            followers={userInformation?.followers}
            following={userInformation?.following}
          />
        ) : userStatus === 404?  <Error status={userStatus} />: null }
      </div>

      {loader && <Loader />}
    </div>
  );
};

export default Home;
