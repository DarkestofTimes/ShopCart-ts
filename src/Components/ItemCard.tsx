import { Link } from "react-router-dom";

export const ItemCard = ({ item }) => {
  return (
    <Link to={`/${item.id}`}>
      <div className="border-solid border-2 border-black w-[max(220px,15vw)]">
        <img src={item.image} alt="" className="w-auto h-auto" />
        <div className="flex flex-row gap-2 text-2xl font-bold">
          <p className="w-full text-center">{item.rating.rate}</p>
          <p className="w-full text-center">{item.price}</p>
        </div>
      </div>
      <h3>{item.title}</h3>
    </Link>
  );
};
