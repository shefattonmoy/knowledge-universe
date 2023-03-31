import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './SingleBlog.css';


const SingleBlog = (props) => {
    const { img, name, title, estimatedTime, authorImg } = props.singleBlog
    return (
        <div className='singleBlog'>
            <img src={img} alt="" />
            <div className='d-flex justify-content-between fs-6 fw-semibold'>
                <div className='singleBlog-info-child-1'>
                    <img src={authorImg} alt="" />
                    <p>{name}</p>
                    <p className='text-secondary'>March 14, 2023</p>
                </div>
                <div className='d-flex gap-2'>
                    <div>
                        <p className='text-secondary'>{estimatedTime}</p>
                    </div>
                    <div>
                        <button className='btn btn-light'><FontAwesomeIcon icon={faBookmark} /></button>
                    </div>
                </div>
            </div>
            <div className='singleBlog-info-child-2'>
                <h4 className='singleBlog-title'>{title}</h4>
                <a href="">Mark as read</a>
            </div>
        </div>
    );
};

export default SingleBlog;