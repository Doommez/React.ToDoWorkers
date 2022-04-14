
import EployerListItem from "./employers-list-item/empoyers-list-item"
import "./employers-list.css"

const EployerList=({data})=>{

  const elements=data.map(item=>{
    const {id, ...itemProps}=item
    return(
      <EployerListItem  key={id} {...itemProps}/>
    )
  })

  return(
    <ul className="app-list list-group">
      {elements}


    </ul>
  )
}


export default EployerList