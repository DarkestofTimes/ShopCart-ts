import { Link } from "react-router-dom";
import { ItemProp } from "../ItemInfoContainer/ItemInfoContainer";

export const MetacritContainer = ({ details }: ItemProp) => {
  if (!details.metacritic) {
    return;
  }
  const colorCode =
    details.metacritic < 75
      ? "text-[#a66d00]"
      : details.metacritic < 50
      ? "text-[#8e000b]"
      : details.metacritic < 20
      ? "text-black"
      : "text-[#00a562]";
  return (
    <section className=" place-content-center flex justify-start col-start-1 row-start-2 ">
      <Link
        to={`/shop/1&metacritic=${details.metacritic},100`}
        className="text-2xl w-full flex items-center justify-center font-bold rounded border-purple-800 border-2 p-2 whitespace-nowrap bg-purple-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-purple-800 hover:scale-110 focus:bg-[#f0f8ff] focus:text-purple-800 focus:scale-110">
        Metacritic:{" "}
        <span
          className={`text-5xl ${colorCode} [text-shadow:_2px_0_0_var(--tw-shadow-color)] transition-colors duration-200 -translate-y-1`}>
          {details.metacritic}
        </span>
      </Link>
    </section>
  );
};
