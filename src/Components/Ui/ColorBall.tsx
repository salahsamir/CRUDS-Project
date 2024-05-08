interface IAlerts {
    color: string;
 }
 
 export default function ColorBall({ color }: IAlerts) {

   return (
     <>
        <div className={`h-5 w-5 ${color} rounded-full cursor-pointer`}></div>
     </>
   );
 }
 