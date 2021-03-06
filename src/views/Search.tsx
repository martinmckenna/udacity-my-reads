import * as React from 'react';
import '../styles/App.css';
import { Debounce } from 'react-throttle';

import GoHome from '../components/GoHome';

const Search = (props: any) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <GoHome goHome={props.goHome}/>
        <div className="search-books-input-wrapper">
          <Debounce time="200" handler="onChange">
            <input
              onChange={event => props.updateQuery(event.target.value.trim())}
              type="text"
              placeholder="Search by title or author"
            />
          </Debounce>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {/* Only if we have search results and there is no error do we want to render them */}
          {props.searchResults && !props.searchResults.error
            ? (props.searchResults.map((element: any, index: number) => <li key={element.id}>
              <div className="book">
                <div className="book-top">
                  {element.imageLinks
                    ? (
                      <div className="book-cover"><img
                        style={{
                        width: 128,
                        height: 193
                      }}
                        alt="The book cover"
                        src={(!!element.imageLinks.thumbnail) ? element.imageLinks.thumbnail : '/'}
                      /></div>
                    )
                    : <div/>}
                  <div className="book-shelf-changer">
                    <select
                      defaultValue={element.shelf}
                      onChange={(event) => props.updateBooks(element, event.target.value)}
                    >
                      <option value="none" disabled={true}>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{element.title}</div>
                {element.authors
                  ? (
                    <div className="book-authors">{element
                        .authors
                        .map((author: any) => <p key={Math.random()}>{author}</p>)}</div>
                  )
                  : <div/>}
              </div>
            </li>))
            : <li/>}
        </ol>
      </div>
    </div>
  );
};

export default Search;