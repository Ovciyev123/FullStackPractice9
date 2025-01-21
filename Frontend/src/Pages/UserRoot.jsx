import React from 'react'
import Usernavbar from '../Components/Usernavbar/Usernavbar'
import { Outlet } from 'react-router'
import Userfooter from '../Components/Userfooter/Userfooter'

function UserRoot() {
  return (
    <>
    <Usernavbar/>
    <Outlet/>
    <Userfooter/>
    </>
  )
}

export default UserRoot