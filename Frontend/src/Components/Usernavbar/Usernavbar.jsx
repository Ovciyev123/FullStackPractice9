import React, { useContext } from 'react'
import {Link} from "react-router"
import {FaFacebook, FaHeart, FaLinkedinIn, FaTwitter} from "react-icons/fa"
import "./usernavbar.css"
import { FavoritesContext } from '../../Context/Favoritescontext'

function Usernavbar() {

  let {favorites,setFavorites}=useContext(FavoritesContext)
  return (
   <>
   <div className="navbarr">
   <div className="navbarr-bg">
   <div className="navbarr-left">
        <h2>Banker <span>.</span></h2>
    </div>
    <div className="navbarr-right">
        <Link className='navvlink'>Home</Link>
        <select name="" id="">
            <option value=""><Link className='navvlink'>Pricing</Link></option>
            <option value=""><Link className='navvlink'>Team pricing</Link></option>
            <option value=""><Link className='navvlink'>FAQ</Link></option>
            <option value=""><Link className='navvlink'>Gallery</Link></option>
            <option value=""><Link className='navvlink'>Services</Link></option>
            <option value=""><Link className='navvlink'>Testimonials</Link></option>
            <option value=""><Link className='navvlink'>More Links</Link></option>
        </select>
        <Link className='navvlink'>Blog</Link>
        <Link className='navvlink'>Contact</Link>
        <FaFacebook className='navvicon'/>
        <FaTwitter className='navvicon'/>
        <FaLinkedinIn className='navvicon'/>
       <Link className='navvlink1' to={"/adduser"} > <button>Add User</button></Link>
       <Link className='navvlink2' to={"/favorites"} ><button><FaHeart/><span>({favorites.length})</span></button></Link>
    </div>
   </div>
   </div>
   
   
   
   
   </>
  )
}

export default Usernavbar