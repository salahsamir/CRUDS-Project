
import { useState } from 'react'
import Buttons from '../ui/Buttons'
import DialogAdd from '../ui/DialogAdd'
import IProduct from '../Interfaces/ProductinterFace'


function Index({ product, setProduct }: { product: IProduct[], setProduct: React.Dispatch<React.SetStateAction<IProduct[]>> }) {

    let [isOpen, setIsOpen] = useState(false)

    function open() {
      setIsOpen(true)
    }
  
    function close() {
      setIsOpen(false)
    }

  return (
    <div className="flex justify-between mb-2">
    <h2 className="text-3xl font-bold"><span className="text-blue-600">L</span>asted <span className="text-blue-600">P</span>roudcts</h2>
    <Buttons bgColor="bg-blue-700 hover:bg-blue-800" width="w-fit" onClick={() => open()}>Add New Product</Buttons>
    <DialogAdd isOpen={isOpen} close={close} title="Add New Product"  product={product} setProduct={setProduct} />
  </div>
  )
}

export default Index
