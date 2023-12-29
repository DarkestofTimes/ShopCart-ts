import { ItemProp } from "../ItemInfoContainer/ItemInfoContainer.tsx";
import { formatDateAddYear } from "../../../Functions/formatDateAddYear.ts";
import { Link } from "react-router-dom";

export const ReleasedContainer = ({ details }: ItemProp) => {
  const currentDate = new Date(details.released);
  const formatted = formatDateAddYear(currentDate, true);

  return (
    <section className="h-full w-full col-start-1 row-start-1">
      <h3 className="font-bold pb-2"> Release Date: </h3>
      {details.tba ? (
        "TBA"
      ) : (
        <Link
          to={`/shop/1&dates=${details.released},${formatted}`}
          className="text-xl flex w-full font-bold rounded border-purple-800 border-2 p-1 whitespace-nowrap bg-purple-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-purple-800 hover:scale-110 focus:bg-[#f0f8ff] focus:text-purple-800 focus:scale-110 justify-center">
          {details.released}
        </Link>
      )}
    </section>
  );
};
