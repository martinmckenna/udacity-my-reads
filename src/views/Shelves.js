import React from 'react'
import '../styles/App.css'
import Shelf from '../components/Shelf.js'
import AddBtn from '../components/AddBtn.js'

const Shelves = props => {
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

    return (
        <div className="list-books">
            <div className="list-books-content">
                <div>
                    <Shelf
                        updateBooks={props.updateBooks}
                        title="Currently Reading"
                        whatShelf="currentlyReading"
                        filteredList={props.currentlyReading}
                        allBooks={props.books}/>
                    <Shelf
                        updateBooks={props.updateBooks}
                        title="Read"
                        whatShelf="read"
                        filteredList={props.read}
                        allBooks={props.books}/>
                    <Shelf
                        updateBooks={props.updateBooks}
                        title="Want to Read"
                        whatShelf="wantToRead"
                        filteredList={props.wantToRead}
                        allBooks={props.books}/>
                </div>
            </div>
            <AddBtn showSearch={props.showSearch}/>
        </div>
    );
}

export default Shelves;