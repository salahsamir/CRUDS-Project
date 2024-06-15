import { useEffect, useState } from "react";
import Ball from "../ui/Ball";
import Buttons from "../ui/Buttons";
import DescSlice from "../Utitls/DescSlice";
import formatPrice from "../Utitls/Price";
import Delete from "../ui/DialogDelete";
import DialogEdite from "../ui/EditeDialog";

function Product({ product, setProduct }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  function open(id) {
    setCurrentId(id);
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    setCurrentId(null);
  }

  const [isOpenEdite, setIsOpenEdite] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [editId, setEditId] = useState(null);

  function openEdite(item, id) {
    setEditItem(item);
    setEditId(id);
    setIsOpenEdite(true);
  }

  function closeEdite() {
    setIsOpenEdite(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://crud-backend-rho.vercel.app/api/product");
        let data = await response.json();
        setProduct(data.product);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setProduct]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2 m-2">
        {product.length ? product.map((item) => (
          <div
            key={item._id}
            className="w-full max-w-sm p-2 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-all cursor-pointer"
          >
            <div className="image">
              <img src={item.image} alt="product" className="w-full h-56 object-center" />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-3xl py-2 text-gray-700 font-md hover:text-gray-800">{item.name}</h3>
              <div className="flex items-center space-x-2">
                <h3 className="text-1xl py-2 text-gray-700 font-md hover:text-gray-800">{item.category.name}</h3>
                <img src={item.category.image} alt="category" className="w-10 h-10 rounded-full object-center" />
              </div>
            </div>
            <p><DescSlice desc={item.desc} /></p>
            <div className="flex gap-1 pt-2">
              {item.color ? item.color.map((color, index) => (
                <Ball key={index} bgColor={color} />
              )) : ""}
            </div>
            <div className="flex justify-between space-x-2">
              <h3 className="text-2xl py-2 text-green-700 hover:text-green-800">${formatPrice(item.price)}</h3>
              <h3 className="text-2xl py-2 text-yellow-700 hover:text-yellow-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                {item.rating}
              </h3>
            </div>
            <div className="flex py-2 space-x-2">
              <Buttons bgColor="bg-green-600 hover:bg-green-800" onClick={() => openEdite(item, item._id)}>Edit</Buttons>
              <Buttons bgColor="bg-red-600 hover:bg-red-800" onClick={() => open(item._id)}>Delete</Buttons>
            </div>
          </div>
        )) : <h1>Loading...</h1>}
      </div>
      <Delete title="Delete Product" isOpen={isOpen} close={close} product={product} setProduct={setProduct} id={currentId} />
      <DialogEdite item={editItem} title="Edit Product" isOpen={isOpenEdite} close={closeEdite} product={product} setProduct={setProduct} id={editId} />
    </>
  );
}

export default Product;
