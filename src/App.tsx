import * as React from 'react';
import * as BooksAPI from './utils/BooksAPI';
import './styles/App.css';
import Search from './views/Search';
import Shelves from './views/Shelves';
import Header from './components/Header';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component<{}, {}> {
  state = {
    books: [],
    searchResults: [],
    query: ''
  };
  updateQuery = (query: string): void => {
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
  getBooks = (): any => {
    return BooksAPI
      .getAll()
      .then(data => this.setState({books: data}))
      .catch(err => console.log(`${err}: there was an error getting all the books!`));
      
  }
updateBooks = (book: {}, shelf: string): void => {
    BooksAPI
      .update(book, shelf)
      .then((data: any) => this.getBooks())
      .catch((err: any) => console.log(`${err}: there was an error updating all the books!`));
  }
  componentDidMount(): void {
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
              updateQuery={this.updateQuery}
              query={this.state.query}
              searchResults={this.state.searchResults}
              updateBooks={this.updateBooks}
            />
            )}
        />
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
