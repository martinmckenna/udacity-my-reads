import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './styles/App.css'
import Search from './views/Search.js'
import Shelves from './views/Shelves.js'
import Header from './components/Header.js'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: [],
    query: '',
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
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
        {this.state.showSearchPage
          ? (<Search
            updateQuery={this.updateQuery}
            query={this.state.query}
            searchResults={this.state.searchResults}
            updateBooks={this.updateBooks}
            goHome={this.goHome}/>)
          : (
            <div>
              <Header/>
              <Shelves
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
                updateBooks={this.updateBooks}
                showSearch={this.showSearch}/>
            </div>
          )}
      </div>
    )
  }
}

export default BooksApp
