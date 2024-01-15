import mongoose from "mongoose"

const userScheme= new mongoose.Schema({
  username :{
    type:String,
    unique:true,
    required:true,
    lowercase: true
  },
  email:{
    type :String,
    required:true,
    unique:true
  }
},{
  timestamps:true
})

export const User = mongoose.model("User", userScheme);