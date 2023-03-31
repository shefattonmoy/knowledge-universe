import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css';
import Bookmark from '../Bookmark/Bookmark';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const [watchTime, setWatchTime] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, [])

    const handleBookmark = (singleBlog) => {
        const newBookmark = [...bookmark, singleBlog];
        setBookmark(newBookmark);
    }

    const handleWatchTime = (singleBlog) => {
        const newWatchTime = [...watchTime, singleBlog];
        setWatchTime(newWatchTime);
    }

    return (
        <div className='blog-container'>
            <div className="blogs">
                {
                    blogs.map(singleBlog => <SingleBlog
                        key={singleBlog._id}
                        singleBlog={singleBlog}
                        handleBookmark={handleBookmark}
                        handleWatchTime = {handleWatchTime}
                    ></SingleBlog>)
                }
            </div>
            <div className="bookmarks">
                <Bookmark bookmark={bookmark}></Bookmark>
            </div>
        </div>
    );
};

export default Blog;