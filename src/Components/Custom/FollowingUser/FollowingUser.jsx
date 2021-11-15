import React from 'react'
import { Link } from "react-router-dom";

const FollowingUser = props => {
    const {
        avatar,
        github,
        github_name,
    } = props ;

    return (
        <div className="w-4/5 md:w-1/3 rounded-full border-2 hover:border-red-800 hover:bg-gray-100 my-3 flex flex-wrap justify-evenly m-auto">
            <div className="card-header flex flex-row flex-wrap justify-center items-center py-6">
                <img src={avatar} alt={github} className="w-24 h-24 rounded-full" />
                <h2 className="text-2xl font-bold text-red-800 mx-5">{github_name}</h2>
                <p><Link to={`/users/${github_name}`}><span className="font-bold text-lg mx-10 hover:bg-red-800 text-red-800 hover:text-white p-2 rounded-full">Ver mas</span></Link></p>
            </div>
        </div>
    )
}

export default FollowingUser
