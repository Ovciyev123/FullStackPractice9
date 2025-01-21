import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FaHeart, FaTrash } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router'
import { FavoritesContext } from '../../Context/Favoritescontext'
import "./details.css"

function Details() {

    let { id } = useParams()
    let navigate = useNavigate()

    let [data, setData] = useState({})
    let {favorites,setFavorites}=useContext(FavoritesContext)

    function GetData(id) {

        axios.get(`http://localhost:3000/users/${id}`)
            .then(res => setData(res.data.data))
    }

    function handledelfav(id){

        axios.delete(`http://localhost:3000/users/${id}`)
        .then(navigate("/"))
    }

    function Favorites(data){

        let favorite=favorites.find(item=>item._id==data._id)

        if(favorite){

            alert("Bu Mehsul Wishlistde Movcuddur")
        }

        else{

            setFavorites([...favorites,data])
        }
    }

    useEffect(() => {

        GetData(id)

    }, [id])

    return (
        <>
            <div className="detailspage">
                <h1>Details User</h1>
                <div className="detailscard">

                    <div class="col">
                        <div class="card">
                            <img src={data.image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3>Name:{data.name}</h3>
                                <h4>Job:{data.job}</h4>
                                <h3>Salary:{data.salary} $</h3>
                            </div>
                            <div className="favoritebtn">
                                <button className='btn btn-danger' onClick={() => handledelfav(data._id)}><FaTrash /></button>
                             <button className='btn btn-success' onClick={()=>Favorites(data)}><FaHeart/></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Details