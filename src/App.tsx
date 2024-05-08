import { useState } from "react"
import { Products } from "./Components/Data/Data"
import ProductCard from "./Components/ProductCard"
import Model from "./Components/Ui/Dialog"
import Buttons from "./Components/Ui/Buttons"



function App() {
  const RanderList=Products.map((product)=> <ProductCard product={product} key={product.id}/>)
  let [isOpen,setIsOpen]=useState<boolean>(false)
  let closeModel:()=>void=()=>{
    setIsOpen(false)
  }
  let openModel:()=>void=()=>{
    setIsOpen(true)
  }
  return (
   <>
  
  <div className="container ">
    <div className="div flex justify-between my-2">
    <h1 className=" text-center text-slate-500 text-5xl ">Product</h1>
      <Buttons className="bg-blue-700 hover:bg-blue-300 px-2 text-white rounded-md"  onClick={openModel}>Build New</Buttons>
     <Model isOpen={isOpen} closeModel={closeModel} title="Build Now">
      <div className="flex w-full gap-2">
      <Buttons bgColor='bg-blue-700 hover:bg-blue-300'>Submit</Buttons>
      <Buttons bgColor='bg-gray-700 hover:bg-gray-300' onClick={closeModel}>Cancle</Buttons>

      </div>
      
      </Model>
    </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3   ">
    {RanderList}
 </div>
  </div>

   </>
  )



}

export default App