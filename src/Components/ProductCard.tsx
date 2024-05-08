import { IData } from "../Interfaces/data";
import Buttons from "./Ui/Buttons";
import ColorBall from "./Ui/ColorBall";


import Image from "./Ui/Image";
import { TextSlicer } from "./Utlits/funs";
interface IProduct {
  product: IData
}
function ProductCard({ product }: IProduct) {
  const text=TextSlicer(product.description)
  return (
    <div className="p-1 border border-gray-400 rounded-xl max-w-sm m-auto">
      <Image src={product.image} alt="Random" className='h-48 w-full rounded-t-lg object-center' />

      <h5 className="text-3xl text-gray-700 ">{product.name}</h5>
      <p className="text-sm">{text}</p>

      <div className="flex gap-2 py-2">
        {product.colors.map(color =>
          <ColorBall color={color} />
        )}
      </div>

      <div className="flex justify-between px-2 items-center">
        <h6 className="text-gray-700 text-2xl">${product.price}</h6>
        <Image src={product.category.image} alt="Random" className='rounded-full h-8 w-8 object-center' />

      </div>
      <div className="flex  space-x-2 justify-between items-center my-2">
     
        <Buttons width="w-fit" bgColor='bg-blue-700 hover:bg-blue-300'>Edite</Buttons>
        <Buttons bgColor='bg-red-700 hover:bg-red-300'>Delete</Buttons>



      </div>
    </div>
  );
}

export default ProductCard;