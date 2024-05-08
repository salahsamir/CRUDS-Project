import { ButtonHTMLAttributes, ReactNode } from "react";

interface IAlerts extends ButtonHTMLAttributes<HTMLButtonElement> {
   bgColor?: string;
   children:ReactNode,
   width?:"w-full "|'w-fit'

}
function Buttons({bgColor,children,width,...rest}: IAlerts) {
  return (
  <>
  <button className={`${bgColor} ${width} text-white w-full font-bold py-2 px-4 rounded-xl hover:text-gray-900`} {...rest}>{children}</button>
  
  </>
  )
}

export default Buttons
