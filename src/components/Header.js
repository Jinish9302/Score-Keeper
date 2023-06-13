import React from 'react'
import {Link} from 'react-router-dom'
export default function Header(props) {
    return (
        <div className="bg-gray-800 text-white">
            <div className="container mx-auto py-4 px-6 flex items-center justify-between">
                <div className="text-xl font-bold">{props.contest_name}</div>
                <div className="space-x-4">
                    <Link to="/" className="text-white hover:text-gray-200">Home</Link>
                    <Link to="/Judge" className="text-white hover:text-gray-200">Judge</Link>
                    <Link to="/Participant" className="text-white hover:text-gray-200">Participant</Link>
                </div>
            </div>
        </div>
    )
}
