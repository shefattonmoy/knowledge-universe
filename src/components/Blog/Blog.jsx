import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css';
import Bookmark from '../Bookmark/Bookmark';
import { addToDb, getBookmark } from '../../utilities/fakedb';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmark, setBookmark] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, [])

    useEffect( () => {
        const storedBookmark = getBookmark();
        const savedBookmark = [];
        for(const _id in storedBookmark){
            const addedBookmark = blogs.find(blog => blog._id === _id)
            if(addedBookmark){
                const quantity = storedBookmark[_id];
                addedBookmark.quantity = quantity;
                savedBookmark.push(addedBookmark);
            }
        }
        setBookmark(savedBookmark);
    }, [blogs])

    const handleBookmark = (singleBlog) => {
        const newBookmark = [...bookmark, singleBlog];
        setBookmark(newBookmark);
        addToDb(singleBlog._id)
    }

    return (
        <div className='blog-container'>
            <div className="blogs">
                {
                    blogs.map(singleBlog => <SingleBlog
                        key={singleBlog._id}
                        singleBlog={singleBlog}
                        handleBookmark={handleBookmark}
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