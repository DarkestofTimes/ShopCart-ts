import { Link } from "react-router-dom";
import { ItemProp } from "../ItemInfoContainer";

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
    <section className=" place-content-center flex w-1/2 justify-start sm:col-start-1 sm:row-start-2 ">
      <Link
        to={`/shop/1&metacritic=${details.metacritic},100`}
        className="lg:text-2xl w-full flex items-center font-bold rounded border-purple-800 border-2 p-1 whitespace-nowrap bg-purple-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-purple-800 hover:scale-110 focus:bg-[#f0f8ff] focus:text-purple-800 focus:scale-110 justify-around ">
        Metacritic:{" "}
        <span
          className={`lg:text-5xl text-xl ${colorCode} [text-shadow:_2px_0_0_var(--tw-shadow-color)] transition-colors duration-200 -translate-y-1 bg-[#f0f8ff] rounded p-1 mt-1`}>
          {details.metacritic}
        </span>
      </Link>
    </section>
  );
};
