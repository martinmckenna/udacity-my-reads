import * as React from 'react';
import { Link } from 'react-router-dom';

const GoHome = (props: any) => {
    return (
        <Link to="/" className="close-search">Close</Link>
    );
};

export default GoHome;