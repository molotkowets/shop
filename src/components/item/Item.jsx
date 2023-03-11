import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./item.css";
import { ReactComponent as ShoppingCart } from "../../icon/shopping-cart.svg";
// import { ReactComponent as Eye } from '../../icon/eye_item.svg'
import { ReactComponent as Heart } from "../../icon/heart.svg";

export default function Item({ item }) {
  // console.log(item);
  const [img, setImg] = useState(item.pictures.main);
  function mouseEnter() {
    // при наведенні курсора на карту товару, відображається друга картинка

    setImg(item.pictures.additional[0]);
  }
  function mouseLeave() {
    // при наведенні курсора на карту товару, відображається перша картинка
    setImg(item.pictures.main);
  }
  return (
    <li
      className="item"
      onMouseEnter={() => mouseEnter()}
      onMouseLeave={() => mouseLeave()}
    >
      <Link to={`/product/${item.category + "/" + item.id}`} className="">
        <div className="containerImage">
          <img
            className="img"
            src={"./product/" + item.category + "/" + img}
            alt=""
          />
        </div>
        <h2>{item.title}</h2>
        {item.description.sale === 0 ? (
          <span>₴{item.description.price}</span>
        ) : (
          <div className="containerPrice">
            <span>
              ₴
              {(
                (1 - item.description.sale / 100) *
                item.description.price
              ).toFixed()}
            </span>
            <del className="delPrice">₴{item.description.price}</del>
          </div>
        )}
      </Link>
      <div className="hoverItem">
        <button className="buttonContainerIcon">
          <Heart
            onClick={() => addProductTo("Heart")}
            className="iconItemHover"
          />
        </button>
        <button className="buttonContainerIcon">
          <ShoppingCart
            onClick={() => addProductTo("ShoppingCart")}
            className="iconItemHover"
          />
        </button>
        {/* <Eye onClick={()=>addProductTo("Eye")} className='iconItemHover'/> */}
      </div>
    </li>
  );
}
function addProductTo(parameter) {
  console.log(parameter);
}
