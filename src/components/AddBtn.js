import React from 'react';

export default class AddBtn extends React.Component{
    render(){
        return(
            <div className="open-search">
              <a onClick={this.props.showSearch}>Add a book</a>
            </div>
        );
    }
}