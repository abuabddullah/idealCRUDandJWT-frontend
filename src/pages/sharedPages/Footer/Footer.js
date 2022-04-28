import './Footer.css'
import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-success text-white py-5 p-md-5 pb-4'>
            <div className="container">
                <div className="rounded-3 p-4 bg-footer-subscribeField row justify-content-between mb-5">
                    <div className="col-12 col-md-6">
                        <h3 className='m-3 m-md-0 text-md-center'>Subscribe My Chanel</h3>
                    </div>
                    <div className='col-12 col-md-5 mb-4 mb-md-0'>
                        <InputGroup className="">
                            <FormControl
                                required
                                type='email'
                                className='rounded-pill position-relative'
                                placeholder="enter your email"
                                aria-label="enter your email"
                                aria-describedby="basic-addon2"
                            />
                            <Button className='rounded-pill bg-danger border-0 text-white position-absolute end-0 py-2 px-4 z-20' variant="danger">Subscribe</Button>
                        </InputGroup>
                    </div>
                </div>

                <div className="row">

                    <div className="col-12 col-md-4 order-3 order-md-1">
                        <h3 className="my-3">About</h3>
                        <hr className='w-50' style={{ color: "#F98080", height: "2px" }} />
                        <p className='text-justify w-75'>Passionate about medication and find always your well wisher. Spread the moto of, "Be healthy, Be happy, Be rich"</p>

                        <div className=''>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                            <Link to='/facebook' className='icons'><FaFacebookSquare /></Link></li>
                                <li className="list-inline-item">
                                <Link to='/twitter' className='icons'><FaTwitterSquare /></Link></li>
                                <li className="list-inline-item">
                                <Link to='/youtube' className='icons'><FaYoutubeSquare /></Link></li>
                                <li className="list-inline-item">
                                <Link to='/instagram' className='icons'><FaInstagramSquare /></Link></li>
                            </ul>
                            
                            
                            

                        </div>
                    </div>
                    <div className="col-12 col-md-4 order-2">
                        <h3 className="my-3">Quick Links</h3>
                        <hr className='w-50' style={{ color: "#F98080", height: "2px" }} />
                        <ul className="list-unstyled">
                            <li><Link className='text-decoration-none text-white' to='/onlinecouch'>About online Couch</Link></li>
                            <li><Link className='text-decoration-none text-white' to='/blogs'>Read my blogs</Link></li>
                            <li><Link className='text-decoration-none text-white' to='/signup'>Sign up</Link></li>
                            <li><Link className='text-decoration-none text-white' to='/updateprofile'>Add your Profiles</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 order-1 order-md-3">
                        <h3 className="my-3">Contacts</h3>
                        <hr className='w-50' style={{ color: "#F98080", height: "2px" }} />
                        <ul className="list-unstyled">
                            <li>Bangladesh</li>
                            <li>+880-1939032974</li>
                            <li>asifaowadud@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-top mt-5 pt-4 text-muted">
                    <p className="text-center m-0">
                        Copyright {(new Date().getFullYear())} | CRUD-JWT. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;