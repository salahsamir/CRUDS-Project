import {InputHTMLAttributes} from'react'

interface IInputForm extends InputHTMLAttributes<HTMLInputElement>{

}

function Input({...rest}:IInputForm) {
  return (
   
     <input className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"{...rest} />
  
  )
}

export default Input