import {v4 as uuid} from 'uuid'
import { IData } from "../../Interfaces/data";

export const Products:IData[]=[
    {
        id:uuid(),
        name:"Car Model1",
        description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.",
        image:"https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=612x612&w=0&k=20&c=ecrvXZhimUHnYES-kx7L5b-TDtRU5kAFPpNm0ZtAp1Y=",
        colors:["bg-red-600","bg-blue-600","bg-gray-600"],
        price:9800.00,
        category:{
            id:uuid(),
            name:"SUV",
            image:"https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=612x612&w=0&k=20&c=ecrvXZhimUHnYES-kx7L5b-TDtRU5kAFPpNm0ZtAp1Y="

        }
    
    },
    {
        id:uuid(),
        name:"Laptop Model1",
        description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.",
        image:"https://media.istockphoto.com/id/1023428598/photo/3d-illustration-laptop-isolated-on-white-background-laptop-with-empty-space-screen-laptop-at.jpg?s=612x612&w=0&k=20&c=ssK6er5v1fGpSghGiqySwoD8tn5blC7xgefQJI2xU38=",
        colors:["bg-slate-600","bg-blue-600","bg-gray-600"],
        price:900.00,
        category:{
            id:uuid(),
            name:"Laptop",
            image:"https://media.istockphoto.com/id/1023428598/photo/3d-illustration-laptop-isolated-on-white-background-laptop-with-empty-space-screen-laptop-at.jpg?s=612x612&w=0&k=20&c=ssK6er5v1fGpSghGiqySwoD8tn5blC7xgefQJI2xU38="

        }
    
    },
    {
        id:uuid(),
        name:"Smart Phone",
        description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.",
        image:"https://media.istockphoto.com/id/1471193257/vector/minimal-design-phone-mockup-similar-to-iphone-template.jpg?s=612x612&w=0&k=20&c=FQrLIRCDFsEg5CRCyLEKwUPAbpMC0UIxQj6hbtwcpQg=",
        colors:["bg-red-600","bg-blue-600","bg-gray-600"],
        price:800.00,
        category:{
            id:uuid(),
            name:"Phone",
            image:"https://media.istockphoto.com/id/1471193257/vector/minimal-design-phone-mockup-similar-to-iphone-template.jpg?s=612x612&w=0&k=20&c=FQrLIRCDFsEg5CRCyLEKwUPAbpMC0UIxQj6hbtwcpQg="

        }
    
    },  {
        id:uuid(),
        name:"Car Model1",
        description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.",
        image:"https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=612x612&w=0&k=20&c=ecrvXZhimUHnYES-kx7L5b-TDtRU5kAFPpNm0ZtAp1Y=",
        colors:["bg-red-600","bg-blue-600","bg-gray-600"],
        price:9800.00,
        category:{
            id:uuid(),
            name:"SUV",
            image:"https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=612x612&w=0&k=20&c=ecrvXZhimUHnYES-kx7L5b-TDtRU5kAFPpNm0ZtAp1Y="

        }
    
    }
    , {
        id:uuid(),
        name:"Laptop Model1",
        description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.",
        image:"https://media.istockphoto.com/id/1023428598/photo/3d-illustration-laptop-isolated-on-white-background-laptop-with-empty-space-screen-laptop-at.jpg?s=612x612&w=0&k=20&c=ssK6er5v1fGpSghGiqySwoD8tn5blC7xgefQJI2xU38=",
        colors:["bg-slate-600","bg-blue-600","bg-gray-600"],
        price:900.00,
        category:{
            id:uuid(),
            name:"Laptop",
            image:"https://media.istockphoto.com/id/1023428598/photo/3d-illustration-laptop-isolated-on-white-background-laptop-with-empty-space-screen-laptop-at.jpg?s=612x612&w=0&k=20&c=ssK6er5v1fGpSghGiqySwoD8tn5blC7xgefQJI2xU38="

        }
    
    },
    {
        id:uuid(),
        name:"Smart Phone",
        description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.",
        image:"https://media.istockphoto.com/id/1471193257/vector/minimal-design-phone-mockup-similar-to-iphone-template.jpg?s=612x612&w=0&k=20&c=FQrLIRCDFsEg5CRCyLEKwUPAbpMC0UIxQj6hbtwcpQg=",
        colors:["bg-red-600","bg-blue-600","bg-gray-600"],
        price:800.00,
        category:{
            id:uuid(),
            name:"Phone",
            image:"https://media.istockphoto.com/id/1471193257/vector/minimal-design-phone-mockup-similar-to-iphone-template.jpg?s=612x612&w=0&k=20&c=FQrLIRCDFsEg5CRCyLEKwUPAbpMC0UIxQj6hbtwcpQg="

        }
    
    },  {
        id:uuid(),
        name:"Car Model1",
        description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas.",
        image:"https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=612x612&w=0&k=20&c=ecrvXZhimUHnYES-kx7L5b-TDtRU5kAFPpNm0ZtAp1Y=",
        colors:["bg-red-600","bg-blue-600","bg-gray-600"],
        price:9800.00,
        category:{
            id:uuid(),
            name:"SUV",
            image:"https://media.istockphoto.com/id/1157655660/photo/generic-red-suv-on-a-white-background-side-view.jpg?s=612x612&w=0&k=20&c=ecrvXZhimUHnYES-kx7L5b-TDtRU5kAFPpNm0ZtAp1Y="

        }
    
    }

]