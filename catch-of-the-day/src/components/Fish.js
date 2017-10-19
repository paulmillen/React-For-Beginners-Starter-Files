import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {
    const { details } = this.props;
    return(
      <li className="menu-fish">
        <img src={details.image} alt={details.name}/>
        <h3 className="fish-name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
          <p>{details.desc}</p>
          <button>Add To Order</button>
        </h3>
      </li>
    );
  };
}

export default Fish;
