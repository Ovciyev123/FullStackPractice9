import { Router } from "express";
import { Usercontrollers } from "../Controllers/Usercontrollers.js";


export const route=new Router()


route.get(("/"),Usercontrollers.GetAll)
route.get("/:id",Usercontrollers.GetById)
route.delete("/:id",Usercontrollers.Deleteuser)
route.post(("/"),Usercontrollers.postUser)
route.put("/:id",Usercontrollers.Updateuser)