import { Usermodel } from "../Models/Usermodel.js"





export const Usercontrollers={

    GetAll:async (req,res)=>{

        let users= await Usermodel.find()

        res.send(users)
    },
    GetById:async (req,res)=>{

        let {id}=req.params

        let user = await Usermodel.findById(id)

        res.send({

            message:"success GetById",
            data:user
        })
    },
    Deleteuser:async (req,res)=>{

        let {id}=req.params

        await Usermodel.findByIdAndDelete(id)

        res.send({

            message:"success delete",
           
        })
    },
    postUser:async (req,res)=>{

        let postuser= await Usermodel(req.body)

       await postuser.save()

        res.send({

            message:"success post",
            data:req.body
        })
    },
    Updateuser:async (req,res)=>{

        let {id}=req.params

        let updateuser=req.body
        let updateduser = await Usermodel.findByIdAndUpdate({_id:id},updateuser,{new:true})

        res.send({

            message:"success Update",
            data:updateduser
        })
    }
}