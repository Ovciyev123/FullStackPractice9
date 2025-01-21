import React, { useContext, useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router';
import { FaHeart, FaInfo, FaTrash } from 'react-icons/fa';
import { FavoritesContext } from '../../Context/Favoritescontext';

function Adduser() {

  let [datas1,setDatas1]=useState([])

  let {favorites,setFavorites}=useContext(FavoritesContext)


  function GetDatas1() {

    axios.get("http://localhost:3000/users")
    .then(res=>setDatas1(res.data))
    
  }

  function handledata1(id){

    axios.delete(`http://localhost:3000/users/${id}`)


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


useEffect(()=>{

  GetDatas1()
},[datas1])


  
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  job: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    salary: Yup.number()
    .integer("integer")
    .required('Required'),
  image: Yup.string()
  .url("URL")
  .required('Required'),
});
  return (
    <>
    <div className="adduser">
    <h1>Signup</h1>
    <Formik
      initialValues={{
        name: '',
        job: '',
        salary:0,
        image: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {

       axios.post("http://localhost:3000/users",values)

      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" />
          {errors.name && touched.name ? (
            <div>{errors.name}</div>
          ) : null}
          <label htmlFor="job">Job</label>
          <Field name="job" />
          {errors.job && touched.job ? (
            <div>{errors.job}</div>
          ) : null}
          <label htmlFor="image">Image</label>
          <Field name="image" />
          {errors.image && touched.image ? (
            <div>{errors.image}</div>
          ) : null}
          <label htmlFor="salary">Salary</label>
          <Field name="salary" type="number" />
          {errors.salary && touched.salary ? <div>{errors.salary}</div> : null}
          <button className='btn btn-primary' type="submit">Add</button>
        </Form>
      )}
    </Formik>
    </div>
    <table class="table table-bordered table-light">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Job</th>
      <th scope="col">Salary</th>
      <th scope="col"></th>
    </tr>
  </thead>
  {
    datas1.map((data1,index)=>(
      <tbody>
    <tr>
      <th scope="row"><img src={data1.image} alt="" /></th>
      <td>{data1.name}</td>
      <td>{data1.job}</td>
      <td>{data1.salary}</td>
      <td>
        <button onClick={()=>handledata1(data1._id)} className='btn btn-danger'><FaTrash/></button>
        <Link to={`/${data1._id}`}><button className='btn btn-primary'><FaInfo/></button></Link>
        <button onClick={()=>Favorites(data1)} className='btn btn-success'><FaHeart/></button>
      </td>
    </tr>
   
  </tbody>
    ))
  }
</table>
    
    </>
  )
}

export default Adduser

