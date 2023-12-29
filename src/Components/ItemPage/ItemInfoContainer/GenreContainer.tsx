import { ItemProp } from "./ItemInfoContainer";
import { Link } from "react-router-dom";

export const GenreContainer = ({ details }: ItemProp) => {
  if (!details.genres) {
    return;
  }
  return (
    <section className=" justify-start ">
      <h3 className="font-bold pb-2">Genres: </h3>
      <div className="flex gap-2 flex-wrap">
        {details.genres.map((genre) => (
          <Link
            to={`/shop/1&genres=${genre.slug}`}
            key={genre.id}
            className=" font-bold rounded border-purple-800 border-2 p-1 h-min whitespace-nowrap bg-purple-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-purple-800 hover:scale-110 focus:bg-[#f0f8ff] focus:text-purple-800 focus:scale-110">
            {genre.name}
          </Link>
        ))}
      </div>
    </section>
  );
};
