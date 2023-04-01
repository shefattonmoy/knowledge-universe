import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './SingleBlog.css';

import Cart from '../Cart/Cart';


const SingleBlog = (props) => {
    const { img, name, title, estimatedTime, authorImg } = props.singleBlog;

    const handleBookmark = props.handleBookmark;

    const [readTime, setReadTime] = useState(0);
    let sum = 0;
    const handleReadTime = (time) => {
        const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
        if(previousReadTime) {
            const sum = previousReadTime + time;
            localStorage.setItem('readTime', sum);
            setReadTime(sum);
        }
        else {
            localStorage.setItem('readTime', time);
            setReadTime(sum);
        }
    }
    return (
        <div className='singleBlog'>
            <img src={img} alt="" />
            <div>

            </div>
            <div className='d-flex justify-content-between fw-semibold'>
                <div className='singleBlog-info-child-1 d-flex'>
                    <img src={authorImg} alt="" />
                    <div className='nameinfo'>
                        <p className='fs-5'>{name}</p>
                        <p className='text-secondary'>March 14, 2023</p>
                    </div>
                </div>
                <div className='d-flex gap-2'>
                    <div>
                        <p className='text-secondary time'>{estimatedTime}</p>
                    </div>
                    <div>
                        <button onClick={() => handleBookmark(props.singleBlog)} className='btn btn-light time'><FontAwesomeIcon icon={faBookmark} /></button>
                    </div>
                </div>
            </div>
            <div className='singleBlog-info-child-2'>
                <h4 className='singleBlog-title'>{title}</h4>
                <button onClick={() => handleReadTime()}>Mark as read</button>
            </div>
        </div>
    );
};

export default SingleBlog;