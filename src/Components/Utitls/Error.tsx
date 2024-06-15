
interface IError{name:string,desc:string,price:string,image:string,rating:string}

let ValidateError = (data:IError)=>{
let error:IError={name:"",price:"",image:"",rating:"",desc:""}
if(!data.name.trim()){
    error.name="Name is required"
}
if(!data.desc.trim()){
    error.desc="Description is required"
}
if(!data.price||isNaN(Number(error.price))){
    error.price="Price is not valid"
}
if(!data.image.startsWith("http")){
    error.image="Image is not valid"
}
if(!data.rating){
    error.rating="Rating is required"
}
   return error
}
export default ValidateError