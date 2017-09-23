import React from 'react'
<<<<<<< HEAD
import * as BooksAPI from './utils/BooksAPI'
=======
//import * as BooksAPI from './utils/BooksAPI'
>>>>>>> 8088e60f270956d21e03578dae3b61952142b2b9
import './styles/App.css'
import Search from './views/Search.js'
import Shelves from './views/Shelves.js'
import Header from './components/Header.js'

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  getBooks = () => {
    BooksAPI
      .getAll()
      .then(data => this.setState({books: data}))
      .catch(err => console.log('there was an error getting all the book!'));
  }
  updateBooks = (book, shelf) => {
    BooksAPI
      .update(book, shelf)
      .then(data => this.getBooks())
      .catch(err => console.log('there was an error updating the books!'));
  }
  componentDidMount = () => {
    this.getBooks();
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
          ? (<Search goHome={this.goHome}/>)
          : (
            <div>
              <Header/>
<<<<<<< HEAD
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
=======
              <Shelves title="Read" whatShelf="read" showSearch={this.showSearch}/>
              <Shelves
                title="Currently Reading"
                whatShelf="currentlyReading"
                showSearch={this.showSearch}/>
              <Shelves
                title="Want to Read"
                whatShelf="wantToRead"
                showSearch={this.showSearch}/></div>
>>>>>>> 8088e60f270956d21e03578dae3b61952142b2b9
          )}
      </div>
    )
  }
}

export default BooksApp
