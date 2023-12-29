import { ItemProp } from "../ItemInfoContainer/ItemInfoContainer.tsx";
import { Link } from "react-router-dom";
import { platformsSVG } from "../../platformsSVG.tsx";

export const PlatformsContainer = ({ details }: ItemProp) => {
  if (!details.platforms) {
    return;
  }

  return (
    <section className="grid grid-rows-[min-content] h-full justify-start">
      <h3 className="font-bold pb-2">Available on: </h3>
      <div className="flex flex-wrap gap-1 justify-start h-min">
        {details.platforms.map((plat) => (
          <Link
            title={plat.platform.name}
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
