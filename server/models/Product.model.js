import mongoose from 'mongoose';
import { type } from 'os';

const productSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true,

  },
  description:{
    type:String,
    required:true,
    trim:true,
  },
  price:{
    type:Number,
    required:true,
  },
  brand:{
    type:String,
    required:true,

  },
  category:{
    type:String,
    required:true,

  },
  countInStock:{
    type:Number,
    required:true,
    default:0,

  },
  image:{
    type:String,
    default: 'no-image.jpg',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },



});
export const Product = mongoose.model('Product', productSchema);

export default Product;