
import EployerListItem from "./employers-list-item/empoyers-list-item"
import "./employers-list.css"

const EployerList=({data, onDelete, onToggleProp}) => {

  const elements = data.map(item => {
      const {id, ...itemProps} = item;
      return (
          <EployerListItem 
              key={id} 
              {...itemProps}
              onDelete={() => onDelete(id)}
              onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
      )
  })

  return (
      <ul className="app-list list-group">
          {elements}
      </ul>
  )
}

export default EployerList;