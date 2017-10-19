import React from 'react';
import AddFishForm from './AddFishForm';
import { formatPrice } from '../helpers';

class Inventory extends React.Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];
    return(
      <div className="fish-edit" key={key}>
        <input type="text" name="name" value={fish.name} placeholder="Fish Name"/>
        <input type="text" name="price" value={formatPrice(fish.price)} placeholder="Fish Price"/>
        <select name="status" value={fish.status} placeholder="Fish Status">
          <option type="text" value="available">Fresh!</option>
          <option type="text" value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" name="desc" value={fish.desc} placeholder="Fish Desc"></textarea>
        <input type="text" name="image" value={fish.image} placeholder="Fish Image"/>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
