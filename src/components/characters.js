import React from 'react'
import Details from './details'
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";

const Characters = ({ item }) => {


    return (
        <Link to={{ pathname: "/details", state: item.char_id }}>
            <div className="card" >
                <div className="card-inner">

                    <div className="card-front">
                        <img src={item.img} alt='character_image' />
                    </div>
                    <div className="card-back">

                        <ul>
                            <li>
                                <strong>Name:</strong>{item.name}
                            </li>
                            <li>
                                <strong>Occupation:</strong>{item.occupation}
                            </li>
                            <li>
                                <strong>DOB:</strong>{item.birthday}
                            </li>
                            <li>
                                <strong>Status:</strong>{item.status}
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default Characters
