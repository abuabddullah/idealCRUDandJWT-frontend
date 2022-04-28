import React from 'react';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
    const navigate = useNavigate();
    return (
        <section className='p-5'>
            <div className="container  d-flex justify-content-center align-items-center">
            <img onClick={() => navigate(`/home`)} src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="notFound" className='img-fluid img-thumbnail shadow-lg m-5 p-md-5' />
            </div>
        </section>
    );
};

export default NotFound;