import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='blog-container'>
            <div className="blogs">
                {
                    blogs.map(singleBlog => <SingleBlog
                        key={singleBlog._id}
                        singleBlog={singleBlog}
                    ></SingleBlog>)
                }
            </div>
            <div className="bookmarks">
                <h4>Bookmarked Blogs: {}</h4>
            </div>
        </div>
    );
};

export default Blog;