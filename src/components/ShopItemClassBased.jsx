import PropTypes from "prop-types";
import { Component } from "react";
import { Item } from "../models/Item";

export class ShopItemClassBased extends Component {
  static propTypes = {
    item: PropTypes.instanceOf(Item),
  };

  render() {
    const { item } = this.props;
    return (
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">{item.descriptionFull}</div>
        <div className="purchase-info">
          <div className="price">
            {item.currency}
            {item.price.toFixed(2)}
          </div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}