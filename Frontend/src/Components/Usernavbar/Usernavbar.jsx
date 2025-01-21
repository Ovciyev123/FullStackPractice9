import React from 'react'
import {Link} from "react-router"
import {FaFacebook, FaHeart, FaLinkedinIn, FaTwitter} from "react-icons/fa"

function Usernavbar() {
  return (
   <>
   <div className="navbarr">
    <div className="navbarr-left">
        <h2>Banker <span>.</span></h2>
    </div>
    <div className="navbarr-right">
        <Link>Home</Link>
        <select name="" id="">
            <option value=""><Link></Link></option>
            <option value=""><Link>Team pricing</Link></option>
            <option value=""><Link>FAQ</Link></option>
            <option value=""><Link>Gallery</Link></option>
            <option value=""><Link>Services</Link></option>
            <option value=""><Link>Testimonials</Link></option>
            <option value=""><Link>More Links</Link></option>
        </select>
        <Link>Blog</Link>
        <Link>Contact</Link>
        <FaFacebook/>
        <FaTwitter/>
        <FaLinkedinIn/>
       <Link to={"/adduser"} > <button>Add User</button></Link>
       <Link to={"/favorites"} ><button><FaHeart/><span>(0)</span></button></Link>
    </div>
   </div>
   
   
   
   
   </>
  )
}

export default Usernavbar