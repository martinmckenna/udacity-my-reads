import React from 'react'
import '../styles/App.css'
import * as BooksAPI from '../utils/BooksAPI'

import AddBtn from '../components/AddBtn.js'

export default class Shelves extends React.Component {
    state = {
        booksOnShelf: []
    }
    componentDidMount = () => {
        BooksAPI
            .getAll()
            .then(books => books.filter(element => element.shelf === this.props.whatShelf).map(filtered => this.setState({
                booksOnShelf: [
                    ...this.state.booksOnShelf,
                    filtered
                ]
            })));
    }
    render = () => {
        return (
            <div className="list-books">
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{this.props.title}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this
                                        .state
                                        .booksOnShelf
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
                                                        <select>
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
                                        </li>)}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <AddBtn showSearch={this.props.showSearch}/>
            </div>
        );
    }
}