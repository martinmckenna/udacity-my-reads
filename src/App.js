import React from 'react'
//import * as BooksAPI from './utils/BooksAPI'
import './styles/App.css'
import Search from './views/Search.js'
import Shelves from './views/Shelves.js'
import Header from './components/Header.js'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
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
              <Shelves title="Read" whatShelf="read" showSearch={this.showSearch}/>
              <Shelves
                title="Currently Reading"
                whatShelf="currentlyReading"
                showSearch={this.showSearch}/>
              <Shelves
                title="Want to Read"
                whatShelf="wantToRead"
                showSearch={this.showSearch}/></div>
          )}
      </div>
    )
  }
}

export default BooksApp
