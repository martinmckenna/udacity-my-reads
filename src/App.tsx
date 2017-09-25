import * as React from 'react';
import * as BooksAPI from './utils/BooksAPI';
import './styles/App.css';
import Search from './views/Search';
import Shelves from './views/Shelves';
import Header from './components/Header';
import { Route } from 'react-router-dom';

interface State {
  books: Array<{}>;
  searchResults: Array<{}>;
  query: string;
}

class BooksApp extends React.Component<{}, State> {
  state = {
    books: [],
    searchResults: [],
    query: ''
  };
  // updateQuery is updating the state with the typed input and searching the DB with that input
  updateQuery = (query: string): void => {
    this.setState({query: query});
    if (query !== '') {
      BooksAPI
        .search(query, 20)
        .then(data => {
          // if we have results, send them to the state
          // if not, just give us back an empty array
          if (!data.error) {
            this.setState({searchResults: data});
          } else {
            this.setState({searchResults: []});
          }
        });
    }
  }
  getBooks = (): void => {
    // simply get a list of all the books on the shelf and send them to the state
    BooksAPI
      .getAll()
      .then(data => this.setState({books: data}))
      .catch(err => console.log(`${err}: there was an error getting all the books!`));
      
  }
updateBooks = (book: {}, shelf: string): void => {
  // takes two arguments. The book in question and the shelf we want to send it to
    BooksAPI
      .update(book, shelf)
      .then((data: any) => this.getBooks())
      .catch((err: any) => console.log(`${err}: there was an error updating all the books!`));
  }
  componentDidMount(): void {
    // get the updated list of books on each render
    this.getBooks();
    BooksAPI
      .getAll()
      .catch((err: any) => console.log(`${err}: there was an error getting all the books!`));
  }
  render(): any {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <Search
              addedBooks={this.state.books}
              updateQuery={this.updateQuery}
              query={this.state.query}
              searchResults={this.state.searchResults}
              updateBooks={this.updateBooks}
            />
            )}
        />
        {/* We're going to filter the list of books on shelves inline here, 
        so that we can pass the filtered array to the correct shelf */}
        <Route
          exact={true}
          path="/"
          render={() => (
          <div>
            <Header/>
            <Shelves
              books={this.state.books}
              read={this
              .state
              .books
              .filter((data: any) => data.shelf === 'read')}
              wantToRead={this
              .state
              .books
              .filter((data: any) => data.shelf === 'wantToRead')}
              currentlyReading={this
              .state
              .books
              .filter((data: any) => data.shelf === 'currentlyReading')}
              updateBooks={this.updateBooks}
            />
          </div>
        )}
        />
      </div>
    );
  }
}

export default BooksApp;
