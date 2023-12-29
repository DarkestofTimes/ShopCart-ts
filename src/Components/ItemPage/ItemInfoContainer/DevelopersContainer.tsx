import { ItemProp } from "./ItemInfoContainer";
import { Link } from "react-router-dom";

export const DevelopersContainer = ({ details }: ItemProp) => {
  if (!details.developers) {
    return;
  }
  return (
    <section className=" h-min">
      <h3 className="font-bold pb-2">By:</h3>
      <div className="flex gap-2 flex-wrap">
        {details.developers.map((dev) => (
          <Link
            to={`/shop/1&developers=${dev.slug}`}
            key={dev.id}
            className="font-bold rounded border-purple-800 border-2 p-1 h-min bg-purple-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-purple-800 hover:scale-110 focus:bg-[#f0f8ff] focus:text-purple-800 focus:scale-110 ">
            {dev.name}
          </Link>
        ))}
      </div>
    </section>
  );
};
