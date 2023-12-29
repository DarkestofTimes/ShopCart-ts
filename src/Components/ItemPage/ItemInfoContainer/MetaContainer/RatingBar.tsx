import { ItemProp } from "../ItemInfoContainer";

export const RatingBar = ({ details }: ItemProp) => {
  if (!details.ratings) {
    return;
  }
  return (
    <section className="grid grid-rows-2 col-span-2 h-full w-full items-end">
      <h3 className="h-min pb-3 font-bold">Score break down:</h3>
      <div className="flex flex-row-reverse rounded border-purple-800 border-2 overflow-hidden h-min w-full">
        {details.ratings.map((rating) => (
          <span
            key={rating.id}
            className="h-12 flex items-center justify-center
              text-white"
            style={{
              width: `${rating.percent}%`,
              backgroundColor: `${
                rating.id == 1
                  ? "black"
                  : rating.id == 2
                  ? "#8e000b"
                  : rating.id == 3
                  ? "#a66d00"
                  : rating.id == 4
                  ? "#00a562"
                  : rating.id == 5
                  ? "#1e3a8a"
                  : ""
              }`,
            }}
            title={rating.title}>
            {rating.percent > 10 ? rating.percent + "%" : ""}
          </span>
        ))}
      </div>
    </section>
  );
};
