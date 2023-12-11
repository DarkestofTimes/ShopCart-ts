import { ItemCard } from "./ItemCard";

export const ItemList = ({ data, pageIndex }) => {
  const dataArray = [...data];
  const atIndex = dataArray.splice(
    Number(pageIndex) === 1 ? 0 : (Number(pageIndex) - 1) * 10,
    10
  );
  return atIndex.map((item) => <ItemCard key={item.id} item={item} />);
};
