import { ItemProp } from "../ItemInfoContainer/ItemInfoContainer";

export const ESRBContainer = ({ details }: ItemProp) => {
  if (!details.esrb_rating) {
    return;
  }
  const colorCode =
    details.esrb_rating.id == 4
      ? "text-[#8e000b]"
      : details.esrb_rating.id == 3
      ? "text-blue-800"
      : details.esrb_rating.id == 2
      ? "text-[#a66d00]"
      : details.esrb_rating.id == 1
      ? "text-[#00a562]"
      : "text-black";

  return (
    <section className="flex justify-center  col-start-2 row-start-1">
      {details.esrb_rating ? (
        <h2 className={`text-3xl font-bold `}>
          ESRB:{" "}
          <a
            href="https://www.esrb.org/ratings-guide/"
            target="_blank"
            rel="noreferrer"
            className={`${colorCode} rounded border-purple-800 border-2 p-1`}>
            {details.esrb_rating.name}
          </a>
        </h2>
      ) : (
        ""
      )}
    </section>
  );
};
