import React from 'react'


const Error = ({status}) => {

    return (
        <div className="felx flex-col justify-center items-center p-20 font-bold text-red-600">
            <h2 className="text-4xl p-15">{`Error ${status}`}</h2>
        </div>
    )
}

export default Error
