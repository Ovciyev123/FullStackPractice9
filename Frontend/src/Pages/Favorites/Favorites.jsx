import React, { useContext } from 'react'
import { FavoritesContext } from '../../Context/Favoritescontext'
import { FaInfo, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';

function Favorites() {

    let {favorites,setFavorites}=useContext(FavoritesContext)


    function handlefav(id){

        let newfavorite=favorites.filter(item=>item._id!==id)

        setFavorites([...newfavorite])
    }

    
  return (
   <>
   <div className="favoritespage">
    {
        favorites.length==0 ?(

            <h1>Sizin Wishlistiniz Bosdur</h1>
        )
        :(
<div className="favoritessec">
    <h1>Favorites</h1>
    
    <div class="row row-cols-1 row-cols-md-3 g-4">
  {

    favorites.map((favorite,index)=>(
        <div class="col">
    <div class="card">
      <img src={favorite.image} class="card-img-top" alt="..."/>
      <div class="card-body">
       <h3>{favorite.name}</h3>
       <h4>{favorite.job}</h4>
       <h3>{favorite.salary}</h3>
      </div>
      <div className="favoritebtn">
        <button className='btn btn-danger' onClick={()=>handlefav(favorite._id)}><FaTrash/></button>
        <Link to={`/${favorite._id}`}><button className='btn btn-primary'><FaInfo/></button></Link>
      </div>
    </div>
  </div>
    ))
  }
</div>
</div>
        )
    }
   </div>
   
   </>
  )
}

export default Favorites