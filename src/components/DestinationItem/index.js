// Write your code here
import './index.css'

// Component for Destination items

const Item = props => {
  const {item} = props
  const {id, name, imgUrl} = item
  return (
    <li>
      <img src={imgUrl} alt={name} className="itemImage" />
      <p className="itemHeading">{name}</p>
    </li>
  )
}

export default Item
