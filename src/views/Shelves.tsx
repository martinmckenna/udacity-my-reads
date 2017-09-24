import * as React from 'react';
import '../styles/App.css';
import Shelf from '../components/Shelf';
import AddBtn from '../components/AddBtn';

const Shelves = (props: any) => {
    return (
        <div className="list-books">
            <div className="list-books-content">
                <div>
                    <Shelf
                        updateBooks={props.updateBooks}
                        category="Currently Reading"
                        filteredList={props.currentlyReading}
                    />
                    <Shelf
                        updateBooks={props.updateBooks}
                        category="Read"
                        filteredList={props.read}
                    />
                    <Shelf
                        updateBooks={props.updateBooks}
                        category="Want to Read"
                        filteredList={props.wantToRead}
                    />
                </div>
            </div>
            <AddBtn />
        </div>
    );
};

export default Shelves;
