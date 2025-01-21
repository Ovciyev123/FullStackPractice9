import React, { useContext, useEffect, useState } from 'react'
import { FaHeart, FaInfo, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router'
import axios from "axios"
import { FavoritesContext } from '../../Context/Favoritescontext'
import { useFormik } from 'formik';
import "./sectionfour.css"

function Sectionfour() {

    let [datas, setDatas] = useState([])
    let [filtereddata, setFiltereddata] = useState([])
    let { favorites, setFavorites } = useContext(FavoritesContext)
    let [sortorder, setSortorder] = useState("default")

    function GetDatas() {

        axios.get("http://localhost:3000/users")
            .then(res => {
                setDatas(res.data)
                setFiltereddata(res.data)
            })
    }

    function handledelete(id) {

        axios.delete(`http://localhost:3000/users/${id}`)
    }

    function Favorites(data) {

        let favorite = favorites.find(item => item._id == data._id)

        if (favorite) {

            alert("Bu Mehsul Wishlistde Movcuddur")
        }

        else {

            setFavorites([...favorites, data])
        }
    }



    useEffect(() => {

        GetDatas()

    }, [])


    function handlesortchange(e) {

        let order = e.target.value

        setSortorder(order)

        if (sortorder == "default") {

            setFiltereddata(datas)
        }

        else {

            let sortUser = [...filtereddata]

            if (sortorder == "esc") {

                sortUser.sort((a, b) => a.salary - b.salary)
            }

            else if (sortorder == "desc") {

                sortUser.sort((a, b) => b.salary - a.salary)
            }

            setFiltereddata(sortUser)
        }
    }




    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: values => {

            let searchvalue = values.name.toLocaleLowerCase().trim()

            if (searchvalue == " ") {

                setFiltereddata(datas)
            }
            else {

                let filtered = datas.filter(item => item.name.toLocaleLowerCase().includes(
                    searchvalue
                ))

                setFiltereddata(filtered)
            }


        },
    });


    return (
        <>
            <div className="sectionfour">
                <h2>Meet Team</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary <br /> regelialia</p>
                <div className="sortseacrh">
                    <form className='formfour' onSubmit={formik.handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        <button type="submit">Submit</button>
                    </form>

                    <select className='selectfour' name="" id="select"
                        value={sortorder}
                        onChange={handlesortchange}>
                        <option value="default">Default</option>
                        <option value="esc"> More-Less salary</option>
                        <option value="desc">Less-More salary</option>
                    </select>
                </div>
                <div className="sectionfour-cards">
                    {

                        filtereddata.map((data, index) => (
                            <div className="sectionfour-card">
                                <img src={data.image} alt="" />
                                <div className="four-texts">
                                    <h3>Name:{data.name}</h3>
                                    <h4>Job:{data.job}</h4>
                                    <h3>Salary:{data.salary} $</h3>
                                </div>
                                <div className="four-btn">
                                    <button className='trash' onClick={() => handledelete(data._id)}><FaTrash /></button>
                                    <Link to={`/${data._id}`}><button className='info'><FaInfo /></button></Link>
                                    <button className='heart' onClick={() => Favorites(data)}><FaHeart /></button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}

export default Sectionfour