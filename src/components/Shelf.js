import React from 'react';

//import * as BooksAPI from '../utils/BooksAPI'

const Shelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">{props
                        .filteredList
                        .map(element => <li key={element.title}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover"><img
                                        style={{
                            width: 128,
                            height: 193
                        }}
                                        alt="The book cover"
                                        src={element.imageLinks.thumbnail}/></div>
                                    <div className="book-shelf-changer">
                                        <select
                                            defaultValue={element.shelf}
                                            onChange={(event) => props.updateBooks(element, event.target.value)}>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{element.title}</div>
                                <div className="book-authors">{element
                                        .authors
                                        .map(element => <p key={element}>{element}</p>)}</div>
                            </div>
                        </li>)}</ol>
            </div>
        </div>

    );
}

export default Shelf;