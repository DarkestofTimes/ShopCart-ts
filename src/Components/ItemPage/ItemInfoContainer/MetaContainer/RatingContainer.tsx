import { ItemProp } from "../ItemInfoContainer";

export const RatingContainer = ({ details }: ItemProp) => {
  if (!details.rating) {
    return;
  }
  const colorCode =
    details.rating < 4
      ? "text-[#a66d00]"
      : details.rating < 3
      ? "text-[#8e000b]"
      : details.rating < 1
      ? "text-black"
      : "text-[#00a562]";
  return (
    <section className="sm:grid sm:grid-rows-2 flex flex-wrap w-1/2 justify-center  justify-items-center sm:col-start-2 sm:row-start-2">
      <h3 className="lg:text-3xl text-xl p-1 whitespace-nowrap ">
        Score:{" "}
        <span className={`font-bold ${colorCode}`}>{details.rating}</span>
      </h3>
      <h4 className="lg:text-2xl text-xl p-1 whitespace-nowrap">
        Votes: <span className="font-bold">{details.ratings_count}</span>
      </h4>
    </section>
  );
};
