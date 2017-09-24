import * as React from 'react';

const Shelf = (props: any) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.category}</h2>
            <div className="bookshelf-books">
                {/* List was already filtered in app.js, so here we're just gonna list out each book */}
                <ol className="books-grid">{props.filteredList
                        .map((element: any, index: number) => <li key={element.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover"><img
                                        style={{
                            width: 128,
                            height: 193
                        }}
                                        alt="The book cover"
                                        src={element.imageLinks.thumbnail}
                                    /></div>
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
                                {/* Give each author a random number as a quick way to keep the key unique */}
                                <div className="book-authors">{element
                                        .authors
                                        .map((author: any) => <p key={Math.random()}>{author}</p>)}</div>
                            </div>
                        </li>)}</ol>
            </div>
        </div>

    );
};

export default Shelf;