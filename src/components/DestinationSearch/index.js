// Write your code here
import {Component} from 'react'
import Item from '../DestinationItem/index'

import './index.css'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)
    const {destinationsList} = props
    this.state = {searchInput: '', originalList: destinationsList}
  }

  changeFunction = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, originalList} = this.state
    const filteredList = originalList.filter(item =>
      item.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <div className="box">
          <h1>Destination Search</h1>
          <div className="searchBox">
            <input
              type="search"
              placeholder="Search"
              className="search"
              onChange={this.changeFunction}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="img"
            />
          </div>
          <ul className="mini">
            {filteredList.map(items => (
              <Item item={items} key={items.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
