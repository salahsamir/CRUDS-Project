interface IAlerts {
    desc:string

}
function DescSlice({desc}: IAlerts) {
  return (
    <div>{desc.slice(0, 100)}</div>
  )
}

export default DescSlice