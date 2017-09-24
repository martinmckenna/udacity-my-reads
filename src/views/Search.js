import React from 'react'
import '../styles/App.css'

import GoHome from '../components/GoHome.js'

const Search = (props) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <GoHome goHome={props.goHome}/>
        <div className="search-books-input-wrapper">
          <input
            onChange={event => props.updateQuery(event.target.value.trim())}
            type="text"
            placeholder="Search by title or author"/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {props.searchResults && !props.searchResults.error
            ? (props.searchResults.map(element => <li key={element.id}>
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
                        src={element.imageLinks.thumbnail}/></div>
                    )
                    : <div></div>}
                  <div className="book-shelf-changer">
                    <select
                      defaultValue="none"
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
                {element.authors
                  ? (
                    <div className="book-authors">{element
                        .authors
                        .map(element => <p key={element}>{element}</p>)}</div>
                  )
                  : <div></div>}
              </div>
            </li>))
            : <li></li>}
        </ol>
      </div>
    </div>
  )
}

export default Search;