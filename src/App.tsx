import { ChangeEvent, useState } from "react"
import { Form, Products } from "./Components/Data/Data"
import ProductCard from "./Components/ProductCard"
import Model from "./Components/Ui/Dialog"
import Buttons from "./Components/Ui/Buttons"
import Input from "./Components/Ui/Input"



function App() {
 let [Data,setData]=useState({
  title:'',
  desc:"",
  image:"",
  price:''
 })
  const CollectData:(event:ChangeEvent<HTMLInputElement>)=>void=(event)=>{
    setData({...Data,[event.target.name]:event.target.value})
    // console.log(Data)
  }
  let HandleSubmit=(e:ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    setIsOpen(false)
    

  }
  const RanderList=Products.map((product)=> <ProductCard product={product} key={product.id}/>)
  const RanderForm=Form.map((product)=><div className="flex flex-col " >
     <div className="mb-1 px-3 focus:ring-2">
  <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor={product.id}>
    {product.labal}
  </label>
 <Input type={product.type} id={product.id} name={product.name} onChange={CollectData}/>
</div>

    </div>)

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
      <Buttons className="bg-blue-700 hover:bg-blue-300 px-2 text-white rounded-md"  onClick={openModel}>ADD NEW</Buttons>
     <Model isOpen={isOpen} closeModel={closeModel} title="ADD NEW PRODUCT">
      <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded-md  space-y-2" >
  {RanderForm}

 <Buttons type="submit" bgColor="bg-blue-700 hover:bg-blue-300" >Submit</Buttons>

</form>


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