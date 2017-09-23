import React from 'react';

const GoHome = (props) => {
    return (
        <a className="close-search" onClick={props.goHome}>Close</a>
    );
}

export default GoHome;