import mongoose from "mongoose"

const subtodoScheme =new mongoose.Schema({
   content :{
     type:String, 
     required :true
   }

},{
  timestamps:true
})


export const SubTodo = mongoose.model("SubTodo", todoScheme)