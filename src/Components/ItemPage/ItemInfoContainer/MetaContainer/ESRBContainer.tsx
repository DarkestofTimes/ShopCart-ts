import { ItemProp } from "../ItemInfoContainer";

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
    <section className="flex h-full sm:col-start-2 sm:row-start-1  text-center w-full justify-center">
      {details.esrb_rating ? (
        <h2 className={`lg:text-3xl text-xl  font-bold grid `}>
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
