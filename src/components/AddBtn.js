import React from 'react';

const AddBtn = (props) => {
    return (
        <div className="open-search">
            <a onClick={props.showSearch}>Add a book</a>
        </div>
    );
}

export default AddBtn;