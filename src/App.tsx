import { Toaster } from "react-hot-toast";
import Index from "./Components/Pages/Index";
import Product from "./Components/Pages/Product";
import { useState } from "react";
import IProduct from "./Components/Interfaces/ProductinterFace";



export default function App() {
  let[product,setProduct]=useState<IProduct[]>([])
  return (
   <div className="container p-2  ">
       <Index product={product} setProduct={setProduct}/>
      <Product product={product} setProduct={setProduct}/>
      <div><Toaster/></div>
   </div>
  )
}