import React from "react";
import "./sidebarShop.css";

import SwitchBlock from "../inputBlocks/SwitchBlock";
import Slider from "../slider/Slider";
import InputList from "../input-list/InputList";
import SearchSidebar from "../SearchSidebar/SearchSidebar";

import { listCategories, listMaterials } from "../../filterProducts";

export default function Sidebar({
  product,
  filter,
  setFilter,
  setProductReturn,
  filterProducts,
  setFilterParameters,
}) {
  return (
    <nav className="sidebar">
      <h1>Shop The Latest</h1>
      <SearchSidebar />
      <div className="blockFilter">
        <InputList
          type={"category"}
          filter={filter}
          setFilter={setFilter}
          placeholder={"By category"}
          options={listCategories()}
        />
        <InputList
          type={"material"}
          filter={filter}
          setFilter={setFilter}
          placeholder={"By material"}
          options={listMaterials(product)}
        />
        <Slider
          setFilterParameters={setFilterParameters}
          filterProducts={filterProducts}
          setProductReturn={setProductReturn}
          product={product}
          filter={filter}
          setFilter={setFilter}
        />
        <SwitchBlock
          filter={filter}
          setFilter={setFilter}
          title={"On sale"}
          type={"onSale"}
        />
        <SwitchBlock
          filter={filter}
          setFilter={setFilter}
          title={"In stock"}
          type={"inStock"}
        />
      </div>
    </nav>
  );
}
