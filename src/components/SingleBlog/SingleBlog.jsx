import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './SingleBlog.css';


const SingleBlog = (props) => {
    const {img, name, title, estimatedTime, image} = props.singleBlog
    return (
        <div className='singleBlog'>
            <img src={img} alt="" />
            <button>{estimatedTime}<FontAwesomeIcon icon={faBookmark} /></button>
            <h4 className='singleBlog-title'>{title}</h4>
            <a href="">Mark as read</a>
        </div>
    );
};

export default SingleBlog;