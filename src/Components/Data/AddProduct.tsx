

export interface IProduct {
   label: string;
   name: "name" | "price" | "image" | "desc" | "rating";
   placeholder:string;
   type: string;
   id: string;
    
}

let dataInput: IProduct[] =[
  {
    label: "Product Name",
    name: "name",
    placeholder: "Enter Product Name",
    type: "text",
    id: "name",

  },
  {
    label: "Product Description",
    name: "desc",
    placeholder: "Enter Product Description",
    type: "text",
    id: "desc",
  },
  {
    label: "Product Price",
    name: "price",
    placeholder: "Enter Product Price",
    type:"string",
    id: "price",

  },
  {
    label: "Product Image",
    name: "image",
    placeholder: "Enter Product Image",
    type: "text",
    id: "image",
  },
  {
    label: "Product Rating",
    name: "rating",
    placeholder: "Enter Product Rating",
    type:"string",
    id: "rating",
  }
 
]
export default dataInput