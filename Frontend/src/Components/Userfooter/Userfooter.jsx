import React from 'react'
import { FaFacebook, FaHeart, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router'

function Userfooter() {
    return (
        <>
            <div className="footerr">
                <div className="footerr-top">
                    <div className="footer-top-sec"><h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p></div>
                    <div className="footer-top-sec">
                        <h3>Quick Links</h3>
                        <Link>Terms</Link>
                        <Link>Policy</Link>
                        <Link>About Us</Link>
                        <Link>Services</Link>
                        <Link>Testimonials</Link>
                        <Link> Contact Us</Link>
                    </div>
                    <div className="footer-top-sec">
                        <h3>follow us </h3>
                        <div className="sec-icons">
                            <FaFacebook/>
                            <FaTwitter/>
                            <FaInstagram/>
                            <FaLinkedin/>
                        </div>
                    </div>
                    <div className="footer-top-sec">
                        <h3>Subscribe Newsletter</h3>
                        <div className="input-footer">
                            <input type="email"  placeholder='Enter Email'/>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright ©2025 All rights reserved | This template is made with  <FaHeart/> by <Link>Colorlib</Link></p>
                </div>
            </div>



        </>
    )
}

export default Userfooter