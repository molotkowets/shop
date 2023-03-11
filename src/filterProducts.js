import { bd } from "./bd";

// export let priceRangeObj = {
//   min: "",
//   max: "",
// };
//main function - filter products

export function filterProducts(
  filterParameters,
  setProductReturn,
  setFilterParameters
) {
  let productPush = [];
  byCategories(productPush, filterParameters, setProductReturn);
  byMaterials(productPush, filterParameters, setProductReturn);
  bySale(productPush, filterParameters, setProductReturn);
  byStock(productPush, filterParameters, setProductReturn);

  priceRange(productPush, filterParameters, setFilterParameters);
  filterByPrice(productPush, filterParameters, setProductReturn);
  // setProductReturn(productPush);
}

// filter products by categories
function byCategories(productPush, filterParameters, setProductReturn) {
  if (filterParameters.category === "all") {
    for (let i = 0; i < Object.keys(bd("newProducts")).length; i++) {
      productPush.push(...bd("newProducts")[Object.keys(bd("newProducts"))[i]]);
    }
  } else if (filterParameters.category && filterParameters.category !== "all") {
    productPush.push(...bd("newProducts")[filterParameters.category]);
  }
  // setProductReturn(productPush);
}

// filter products by material
function byMaterials(productPush, filterParameters, setProductReturn) {
  let listProductByMat = [];

  if (filterParameters.material !== "all") {
    for (let i = 0; i < productPush.length; i++) {
      if (productPush[i].material === filterParameters.material) {
        listProductByMat.push(productPush[i]);
      }
    }
    productPush.length = 0;
    productPush.push(...listProductByMat);
  }
}

// filter product by sale
function bySale(productPush, filterParameters, setProductReturn) {
  let listProductBySale = [];

  if (filterParameters.onSale) {
    for (let i = 0; i < productPush.length; i++) {
      if (productPush[i].description.sale > 0) {
        listProductBySale.push(productPush[i]);
      }
    }
    productPush.length = 0;
    productPush.push(...listProductBySale);
  }
}

// filter product by stock
function byStock(productPush, filterParameters, setProductReturn) {
  let listProductByStock = [];

  if (filterParameters.inStock) {
    for (let i = 0; i < productPush.length; i++) {
      if (productPush[i].quantity > 0) {
        listProductByStock.push(productPush[i]);
      }
    }
    productPush.length = 0;
    productPush.push(...listProductByStock);
  }
}

// filter product by price
function filterByPrice(productPush, filterParameters, setProductReturn) {
  let productFilterPrice = [];
  productFilterPrice.push(...productPush);

  if (filterParameters.filterPrice.max || filterParameters.filterPrice.min) {
    productFilterPrice.length = 0;
    let min = filterParameters.filterPrice.min || filterParameters.Price.min;
    let max = filterParameters.filterPrice.max || filterParameters.Price.max;
    // console.log(min);
    for (let i = 0; i < productPush.length; i++) {
      if (
        productPush[i].description.price <= max &&
        productPush[i].description.price >= min
      ) {
        productFilterPrice.push(productPush[i]);
      }
    }
    console.log(productFilterPrice);
    // productPush.push(...productFilterPrice);
  }
  console.log(productFilterPrice);
  setProductReturn(productFilterPrice);
}

// returne list categories for sidebar input
let numberOfProducts = Object.keys(bd("newProducts")).length;
let listCate = ["all"];

export function listCategories() {
  for (let i = 0; i < numberOfProducts; i++) {
    let keysCategory = Object.keys(bd("newProducts"))[i];
    if (!listCate.includes(keysCategory)) {
      listCate.push(keysCategory);
    }
  }
  return [...listCate];
}

export function listMaterials() {
  let listMat = ["all"];
  for (let i = 0; i < numberOfProducts; i++) {
    let dbCategory = bd("newProducts")[listCate[i + 1]];
    for (let j = 0; j < dbCategory.length - 1; j++) {
      if (!listMat.includes(dbCategory[j].material)) {
        listMat.push(dbCategory[j].material);
      }
    }
  }
  return listMat;
}

export function priceRange(product, filterParameters, setFilterParameters) {
  let minPrice;
  let maxPrice;
  for (let i = 0; i < product.length; i++) {
    !minPrice && (minPrice = product[i].description.price);
    minPrice > product[i].description.price &&
      (minPrice = product[i].description.price);

    !maxPrice && (maxPrice = product[i].description.price);
    maxPrice < product[i].description.price &&
      (maxPrice = product[i].description.price);
  }
  if (
    !(
      filterParameters.price.min === minPrice &&
      filterParameters.price.max === maxPrice
    )
  ) {
    setFilterParameters({
      ...filterParameters,
      price: {
        min: minPrice,
        max: maxPrice,
      },
    });

    // return {
    //   price: {
    //     min: minPrice,
    //     max: maxPrice,
    //   },
    // };
  }
}
