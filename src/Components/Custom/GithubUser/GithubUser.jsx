import React from "react";
import { Link } from "react-router-dom";


const GithubUser = props => {
  const {
    avatar,
    github,
    github_name,
    public_repos,
    followers,
    following
  } = props;


  return (
    <div className="w-3/5 rounded-xl border-2 border-red-800 my-16 m-auto bg-gray-100 shadow-lg">
      <div className="card-header flex flex-col justify-center items-center p-10">
        <img src={avatar} alt={github} className="w-24 h-24 rounded-full" />
        <h2 className="text-2xl font-bold text-red-800">{github_name}</h2>
      </div>

      <div className="card-body flex justify-evenly items-center py-4">
        <p><Link to={`/${github_name}/repos`}>
          <span className="text-red-800 hover:bg-red-800 hover:text-white rounded-full p-1 text-xl	font-bold"> Repos: </span>{" "}
          {public_repos}
        </Link>
        </p>
        <p>
          <Link to={`/${github_name}/followers`}>
            <span className="text-red-800 hover:bg-red-800 hover:text-white rounded-full p-1 text-xl	font-bold"> Followers: </span>{" "}
            {followers}
          </Link>
        </p>
        <p><Link to={`/${github_name}/following`}>
          <span className="text-red-800 hover:bg-red-800 hover:text-white rounded-full p-1 text-xl	font-bold	"> Following: </span>{" "}
          {following}
        </Link>
        </p>
      </div>
    </div>
  );
};

export default GithubUser;
