import mongoose from "mongoose"

const todoScheme =new mongoose.Schema({
   content :{
     type:String, 
     required :true
   },
   subtodo :[{
     type:mongoose.Schema.Types.ObjectId ,
     ref:'SubTodo'
   }]
},{
  timestamps:true
})


export const Todo = mongoose.model("Todo", todoScheme)