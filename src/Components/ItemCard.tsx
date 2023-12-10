import { Link } from "react-router-dom";

export const ItemCard = ({ item }) => {
  return (
    <Link>
      <div className="border-solid border-2 border-black w-[max(220px,15vw)]">
        <img src="" alt="" className="w-auto h-auto" />
        <div className="flex flex-row gap-2 text-2xl font-bold">
          <p className="w-full text-center">4.5/5</p>
          <p className="w-full text-center">300$</p>
        </div>
      </div>
      <h3>prod name</h3>
    </Link>
  );
};
