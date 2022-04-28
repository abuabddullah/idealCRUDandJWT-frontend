import './Loading.css'
import React from 'react';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center vh-50'>
            <div className="loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Loading;