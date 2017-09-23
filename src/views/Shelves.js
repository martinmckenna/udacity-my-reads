import React from 'react'
import '../styles/App.css'
import Shelf from '../components/Shelf.js'
import AddBtn from '../components/AddBtn.js'

const Shelves = props => {
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