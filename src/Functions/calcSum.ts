import { Item } from "../Components/Context/CartContext";

export const calcSum = (array: Item[]) => {
  const sum = array.reduce((accumulator, item) => {
    const price = item.pricing.onSale
      ? item.pricing.salePrice
      : item.pricing.price;
    return accumulator + price;
  }, 0);
  return Number(sum.toFixed(2));
};
