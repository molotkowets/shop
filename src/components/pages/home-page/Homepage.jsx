import React from "react";
import { Link } from "react-router-dom";
import Item from "../../item/Item";
import "./homepage.css";
import { bd } from "../../../bd";
import { filterProducts } from "../../../filterProducts";

export default function Homepage() {
  return (
    <>
      <div className="presentation">
        <h1>Gold big hoops </h1>
        <p>$ 68,00</p>
        <Link to={"/shop"} className="btn-product">
          View Product
        </Link>
      </div>
      <div className="headStore">
        <h2>Shop The Latest</h2>
        <Link to={"/shop"} className="btnViveAll">
          View All
        </Link>
      </div>
      <ul className="goods">
        {/* {bd("products").slice(0, 6).map((x) => <Item item={x} key={x.id}/>)} */}
        {filterProducts(bd, "all")
          .slice(0, 6)
          .map((x) => (
            <Item item={x} key={x.id} />
          ))}
      </ul>
    </>
  );
}
