import PropTypes from "prop-types";
import { Item } from "../models/Item";
import "./ShopItemFunc.css";

export const ShopItemFunc = ({ item }) => (
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

ShopItemFunc.propTypes = {
  item: PropTypes.instanceOf(Item),
};