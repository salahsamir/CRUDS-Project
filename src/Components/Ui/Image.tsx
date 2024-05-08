

interface IAlerts {
    src:string,
    alt?:string,
    className?:string

}
function Image({src,alt,className}: IAlerts) {
  return (
    <>
        <img src={src}  className={className} alt={alt}/>
    </>
  )
}

export default Image