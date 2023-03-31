import React from 'react';
import './Bookmark.css';

const Bookmark = (props) => {
    const {bookmark} = props;
    console.log(bookmark);
    return (
        <div className='bookmark'>
            <h4>Bookmarked Blogs: {bookmark.length}</h4>
            <h5>Spent time on read: {}</h5>
        </div>
    );
};

export default Bookmark;