import React from 'react'
import '../styles/App.css'
import Shelf from '../components/Shelf.js'
import AddBtn from '../components/AddBtn.js'

export default class Shelves extends React.Component {
    // state = {     readBooks: [],     currentlyReadingBooks: [], wantToReadBooks:
    // [] } getReadBooks = () => {     this         .props .books .filter(element
    // => element.shelf === 'read') .map(filtered => this.setState({read:
    // [filtered]})); } getCurrentlyReadingBooks = () => { this         .props
    // .books     .filter(element => element.shelf === 'currentlyReading')
    // .map(filtered => this.setState({read: [filtered]})); } getWantToReadBooks =
    // () => {     this         .props         .books .filter(element =>
    // element.shelf === 'wantToRead')         .map(filtered => this.setState({read:
    // [filtered]})); } componentDidMount = () => { this.getReadBooks();
    // this.getCurrentlyReadingBooks(); this.getWantToReadBooks(); }
    componentDidMount = () => {
        console.log(this.props.books);
    }
    render = () => {
        return (
            <div className="list-books">
                <div className="list-books-content">
                    <div>
                        <Shelf
                            updateBooks={this.props.updateBooks}
                            title="Currently Reading"
                            whatShelf="currentlyReading"
                            allBooks={this.props.books}/>
                        <Shelf
                            updateBooks={this.props.updateBooks}
                            title="Read"
                            whatShelf="read"
                            allBooks={this.props.books}/>
                        <Shelf
                            updateBooks={this.props.updateBooks}
                            title="Want to Read"
                            whatShelf="wantToRead"
                            allBooks={this.props.books}/>
                    </div>
                </div>
                <AddBtn showSearch={this.props.showSearch}/>
            </div>
        );
    }
}