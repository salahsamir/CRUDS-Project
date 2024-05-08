

export interface IData{
    id?: string|undefined;
    name: string;
    description: string
    image:string;
    colors:string[],
    price:number
    category:{
        id: string,
        name: string
        image:string
    }
}