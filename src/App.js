import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './styles/App.css'
import Search from './views/Search.js'
import Shelves from './views/Shelves.js'
import Header from './components/Header.js'
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: [],
    query: ''
  }
  updateQuery = (query) => {
    this.setState({query: query});
    if (query !== '') {
      BooksAPI
        .search(query, 20)
        .then(data => {
          if (!data.error) {
            this.setState({searchResults: data});
          } else {
            this.setState({searchResults: []});
          }
        });

    }
  }
  getBooks = () => {
    BooksAPI
      .getAll()
      .then(data => this.setState({books: data}))
      .catch(err => console.log('there was an error getting all the books!'));
  }
  updateBooks = (book, shelf) => {
    BooksAPI
      .update(book, shelf)
      .then(data => this.getBooks())
      .catch(err => console.log('there was an error updating the books!'));
  }
  componentDidMount = () => {
    this.getBooks();
    BooksAPI
      .getAll()
      .catch(err => console.log('there was an error getting all the books!'));
  }
  showSearch = () => {
    this.setState({showSearchPage: true});
  }
  goHome = () => {
    this.setState({showSearchPage: false});
  }
  render = () => {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (<Search
          updateQuery={this.updateQuery}
          query={this.state.query}
          searchResults={this.state.searchResults}
          updateBooks={this.updateBooks}/>)}/>
        <Route
          exact
          path="/"
          render={() => (
          <div><Header/><Shelves
            books={this.state.books}
            read={this
            .state
            .books
            .filter(data => data.shelf === 'read')}
            wantToRead={this
            .state
            .books
            .filter(data => data.shelf === 'wantToRead')}
            currentlyReading={this
            .state
            .books
            .filter(data => data.shelf === 'currentlyReading')}
            updateBooks={this.updateBooks}/></div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
