import React from 'react';
import './Bookmark.css';

const Bookmark = (props) => {
    const { bookmark } = props;

    let quantity = 0;

    for (const singleBlog of bookmark) {
        singleBlog.quantity = singleBlog.quantity || 1;
        quantity = quantity + singleBlog.quantity;
    }
    return (
        <div className='bookmark'>
            <h4>Bookmarked Blogs: {bookmark.length}</h4>
            <h5>Spent time on read: {}</h5>
        </div>
    );
};

export default Bookmark;