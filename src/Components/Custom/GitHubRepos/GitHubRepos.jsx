import React from 'react'


const GitHubRepos = props => {

    const {
        avatar,
        github_name,
        public_repos,
        repo,
        estado

    } = props;

    return (
    <div className="w-3/5 rounded-xl border-2 border-red-800 my-5 m-auto bg-gray-100 shadow-lg">
        <div className="card-header flex flex-row justify-center items-center p-3">
            <img src={avatar} alt={github_name} className="w-16 h-16 rounded-full" />
            <h2 className="text-2xl font-bold text-red-800 mx-10">{github_name}</h2>
      </div>
        <div className="card-body flex justify-evenly items-center py-4">
            <p>
                 <span className="text-red-800 hover:bg-red-800 hover:text-white rounded-full p-1 text-xl font-bold"> Nombre: </span>{" "}
                  {public_repos}
            </p>
            <a href={repo} rel="noreferrer" target="_blank"
            className="text-red-800 hover:bg-red-800 hover:text-white rounded-full p-1 text-xl font-bold">
                Link
            </a>
            <p>
                <span className="text-red-800 hover:bg-red-800 hover:text-white rounded-full p-1 text-xl	font-bold	"> Estado: </span>{" "}
                {estado}
            </p>
        </div>
    </div>
    )
}

export default GitHubRepos
