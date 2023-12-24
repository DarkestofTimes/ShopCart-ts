import { platformsSVG } from "./platformsSVG.tsx";
import { Link } from "react-router-dom";
import { formatDate } from "./formatDate.ts";

export interface ItemProp {
  item: {
    id: number;
    background_image: string;
    name: string;
    esrb_rating?: {
      id: number;
      name: string;
      slug: string;
    };
    developers?: {
      id: number;
      name: string;
      slug: string;
    }[];
    rating?: number;
    ratings_count?: number;
    ratings?: {
      id: number;
      percent: number;
      title: string;
      count: number;
    }[];
    metacritic?: number;
    platforms?: {
      platform: {
        id: number;
        slug: string;
      };
    }[];
    genres?: {
      id: number;
      name: string;
      slug: string;
    }[];
    description?: string;
    released?: string;
    tba?: boolean;
  };
  page?: string;
}

export const ItemInfoContainer = ({ item, page }: ItemProp) => {
  return (
    <section className="col-span-3 grid grid-rows-[min-content] grid-cols-3  w-full">
      <MetaContainer item={item} page={page} />
      <div className="row-span-2  col-start-3 grid h-full pl-3">
        <DevelopersContainer item={item} />
        <GenreContainer item={item} />
      </div>
      <DescContainer item={item} />
    </section>
  );
};

const MetaContainer = ({ item, page }: ItemProp) => {
  return (
    <section className="col-span-2 row-span-2  grid  grid-cols-3 grid-rows-3 items-center gap-3 max-h-[35vh]">
      <ReleasedContainer item={item} />
      <ESRBContainer item={item} />
      <div className="grid row-span-3 grid-rows-2 justify-start grid-cols-1  h-full pl-3">
        <div className=" w-full pt-2">
          {page === "shop" ? (
            <AddToBtnContainer item={item} />
          ) : (
            <RemoveFromBtnContainer item={item} />
          )}
        </div>
        <PlatformsContainer item={item} />
      </div>
      <MetacritContainer item={item} />
      <RatingContainer item={item} />
      <RatingBar item={item} />
    </section>
  );
};

const ESRBContainer = ({ item }: ItemProp) => {
  if (!item.esrb_rating) {
    return;
  }
  const colorCode =
    item.esrb_rating.id == 4
      ? "text-[#8e000b]"
      : item.esrb_rating.id == 3
      ? "text-blue-800"
      : item.esrb_rating.id == 2
      ? "text-[#a66d00]"
      : item.esrb_rating.id == 1
      ? "text-[#00a562]"
      : "text-black";

  return (
    <section className="flex justify-center">
      {item.esrb_rating ? (
        <h2 className={`text-3xl font-bold `}>
          ESRB:{" "}
          <a
            href="https://www.esrb.org/ratings-guide/"
            target="_blank"
            rel="noreferrer"
            className={`${colorCode} rounded border-purple-800 border-2 p-1`}>
            {item.esrb_rating.name}
          </a>
        </h2>
      ) : (
        ""
      )}
    </section>
  );
};

const DevelopersContainer = ({ item }: ItemProp) => {
  if (!item.developers) {
    return;
  }
  return (
    <section className=" h-min">
      <h3 className="font-bold pb-2">By:</h3>
      <div className="flex gap-2 flex-wrap">
        {item.developers.map((dev) => (
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

const RatingContainer = ({ item }: ItemProp) => {
  if (!item.rating) {
    return;
  }
  const colorCode =
    item.rating < 4
      ? "text-[#a66d00]"
      : item.rating < 3
      ? "text-[#8e000b]"
      : item.rating < 1
      ? "text-black"
      : "text-[#00a562]";
  return (
    <section className="grid grid-rows-2 row-start-2 justify-items-center">
      <h3 className="text-3xl  p-1 whitespace-nowrap ">
        Score: <span className={`font-bold ${colorCode}`}>{item.rating}</span>
      </h3>
      <h4 className="text-2xl  p-1 whitespace-nowrap">
        Votes: <span className="font-bold">{item.ratings_count}</span>
      </h4>
    </section>
  );
};

const RatingBar = ({ item }: ItemProp) => {
  if (!item.ratings) {
    return;
  }
  return (
    <section className="grid grid-rows-2 col-span-2 h-full w-full items-end">
      <h3 className="h-min pb-3 font-bold">Score break down:</h3>
      <div className="flex flex-row-reverse rounded border-purple-800 border-2 overflow-hidden h-min w-full">
        {item.ratings.map((rating) => (
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

const MetacritContainer = ({ item }: ItemProp) => {
  if (!item.metacritic) {
    return;
  }
  const colorCode =
    item.metacritic < 75
      ? "text-[#a66d00]"
      : item.metacritic < 50
      ? "text-[#8e000b]"
      : item.metacritic < 20
      ? "text-black"
      : "text-[#00a562]";
  return (
    <section className=" place-content-center flex justify-start col-start-1 row-start-2">
      <Link
        to={`/shop/1&metacritic=${item.metacritic},100`}
        className="text-2xl w-full flex items-center justify-center font-bold rounded border-purple-800 border-2 p-2 whitespace-nowrap bg-purple-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-purple-800 hover:scale-110 focus:bg-[#f0f8ff] focus:text-purple-800 focus:scale-110">
        Metacritic:{" "}
        <span
          className={`text-5xl ${colorCode} [text-shadow:_2px_0_0_var(--tw-shadow-color)] transition-colors duration-200 -translate-y-1`}>
          {item.metacritic}
        </span>
      </Link>
    </section>
  );
};

const AddToBtnContainer = ({ item }: ItemProp) => {
  return (
    <section className="h-full w-full">
      <button className="text-4xl grid h-full grid-cols-2 font-bold rounded border-purple-800 border-2 p-4  bg-purple-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-purple-800 hover:scale-110 focus:bg-[#f0f8ff] focus:text-purple-800 focus:scale-110 place-items-center">
        <section className="text-[5rem] font-bold w-full ">50$</section>
        Add to Cart
      </button>
    </section>
  );
};

const RemoveFromBtnContainer = ({ item }: ItemProp) => {
  return (
    <section className="">
      <button className="text-4xl font-bold rounded border-purple-800 border-2 p-4 h-full w-1/2 bg-purple-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-purple-800 hover:scale-110 focus:bg-[#f0f8ff] focus:text-purple-800 focus:scale-110">
        Add to Cart
      </button>
    </section>
  );
};

const GenreContainer = ({ item }: ItemProp) => {
  if (!item.genres) {
    return;
  }
  return (
    <section className=" justify-start ">
      <h3 className="font-bold pb-2">Genres: </h3>
      <div className="flex gap-2 flex-wrap">
        {item.genres.map((genre) => (
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

const ReleasedContainer = ({ item }: ItemProp) => {
  const currentDate = new Date();
  const formatted = formatDate(currentDate);

  return (
    <section className="h-full w-full">
      <h3 className="font-bold pb-2"> Release Date: </h3>
      {item.tba ? (
        "TBA"
      ) : (
        <Link
          to={`/shop/1&dates=${item.released},${formatted}`}
          className="text-xl flex w-full font-bold rounded border-purple-800 border-2 p-1 whitespace-nowrap bg-purple-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-purple-800 hover:scale-110 focus:bg-[#f0f8ff] focus:text-purple-800 focus:scale-110 justify-center">
          {item.released}
        </Link>
      )}
    </section>
  );
};

const PlatformsContainer = ({ item }: ItemProp) => {
  if (!item.platforms) {
    return;
  }

  return (
    <section className="grid grid-rows-[min-content] h-full justify-start">
      <h3 className="font-bold pb-2">Available on: </h3>
      <div className="flex flex-wrap gap-1 justify-start h-min">
        {item.platforms.map((plat) => (
          <Link
            to={`/shop/1&platforms=${plat.platform.id}`}
            key={plat.platform.id}
            className="border-purple-800 border-2 p-1 rounded min-w-[3rem] transition-all duration-200 hover:scale-125 focus:scale-125">
            {platformsSVG[plat.platform.slug]}
          </Link>
        ))}
      </div>
    </section>
  );
};

const DescContainer = ({ item }: ItemProp) => {
  const replaceSymbols = (text: string) => {
    return text
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&nbsp;/g, " ")
      .replace(/&copy;/g, "©")
      .replace(/&reg;/g, "®")
      .replace(/&trade;/g, "™")
      .replace(/&euro;/g, "€")
      .replace(/&pound;/g, "£")
      .replace(/&yen;/g, "¥")
      .replace(/&sect;/g, "§")
      .replace(/&mdash;/g, "—")
      .replace(/&ndash;/g, "–")
      .replace(/&#39;/g, "'")
      .replace(/<br\s*\/?>/g, "\n");
  };
  if (!item.description) {
    return;
  }

  const regex = /<p>(.*?)<\/p>/gs;
  const matches = item.description.match(regex);
  const paragraphs = matches
    ? matches.map((match) => replaceSymbols(match.replace(/<\/?p>/g, "")))
    : [];
  return (
    <section className="col-span-3 ">
      <h1 className="font-bold text-5xl p-4">{item.name}</h1>
      {paragraphs.map((par, index) => (
        <p key={index} className="p-6 text-2xl whitespace-pre-line">
          {par}
        </p>
      ))}
    </section>
  );
};
