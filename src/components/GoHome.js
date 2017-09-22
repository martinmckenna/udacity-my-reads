import React from 'react';

export default class AddBtn extends React.Component{
    render(){
        return(
            <a className="close-search" onClick={this.props.goHome}>Close</a>
        );
    }
}