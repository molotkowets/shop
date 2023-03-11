import React, { useEffect, useState } from "react";
import Item from "../../item/Item";
import Sidebar from "../../sidebarShop/SidebarShop";
import "./shopPage.css";
import { filterProducts } from "../../../filterProducts";
import { ButtonAddMore } from "../../auxiliary/ButtonAddMore";

export default function ShopPage() {
  const [filterParameters, setFilterParameters] = useState({
    search: "",
    category: "all",
    material: "all",
    price: {
      min: "",
      max: "",
    },
    filterPrice: {
      min: "",
      max: "",
    },
    onSale: false,
    inStock: false,
  });
  console.log(filterParameters.price.max);

  const [productReturn, setProductReturn] = useState([]);

  useEffect(() => {
    filterProducts(filterParameters, setProductReturn, setFilterParameters);
  }, [filterParameters]);
  return (
    <>
      {filterParameters.price.min ? (
        <div className="mainWrapper">
          <Sidebar
            setFilterParameters={setFilterParameters}
            filterProducts={filterProducts}
            product={productReturn}
            setProductReturn={setProductReturn}
            filter={filterParameters}
            setFilter={setFilterParameters}
          />
          <div className="productCards">
            <ul className="goods">
              {productReturn.slice(0, 6).map((x) => (
                <Item item={x} key={x.id} />
              ))}
            </ul>

            <div className="">
              <ButtonAddMore quantity={productReturn.length} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

function resultPage() {}
