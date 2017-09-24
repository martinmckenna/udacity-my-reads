import React from 'react';
import {Link} from 'react-router-dom';

const GoHome = (props) => {
    return (
        <Link to="/" className="close-search">Close</Link>
    );
}

export default GoHome;