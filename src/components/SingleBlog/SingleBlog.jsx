import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './SingleBlog.css';


const SingleBlog = (props) => {
    const { img, name, title, estimatedTime, authorImg} = props.singleBlog;
    const handleBookmark = props.handleBookmark;
    return (
        <div className='singleBlog'>
            <img src={img} alt="" />
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
                        <button onClick={ () => handleBookmark(props.singleBlog)} className='btn btn-light time'><FontAwesomeIcon icon={faBookmark} /></button>
                    </div>
                </div>
            </div>
            <div className='singleBlog-info-child-2'>
                <h4 className='singleBlog-title'>{title}</h4>
                <button>Mark as read</button>
            </div>
        </div>
    );
};

export default SingleBlog;