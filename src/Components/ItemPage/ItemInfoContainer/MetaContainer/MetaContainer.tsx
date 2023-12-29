import { ItemProp } from "../ItemInfoContainer.tsx";
import { usePricingContext } from "../../../Context/ContextProvider.tsx";
import { ESRBContainer } from "./ESRBContainer.tsx";
import { RatingContainer } from "./RatingContainer.tsx";
import { RatingBar } from "./RatingBar.tsx";
import { MetacritContainer } from "./MetacritContainer.tsx";
import { ReleasedContainer } from "./ReleasedContainer.tsx";
import {
  AddToBtnContainer,
  RemoveFromBtnContainer,
} from "./AddToBtnContainer.tsx";
import { PlatformsContainer } from "./PlatformsContainer.tsx";

export const MetaContainer = ({ details, page }: ItemProp) => {
  const { pricing } = usePricingContext();
  return (
    <section className="col-span-2 row-span-2  grid  grid-cols-3 grid-rows-3 items-center gap-3 max-h-[35vh]">
      <ReleasedContainer details={details} />
      <ESRBContainer details={details} />
      <div className="grid row-span-3 grid-rows-2 justify-start grid-cols-1  h-full pl-3 col-start-3 row-start-1">
        <div className=" w-full pt-2">
          {page === "shop" ? (
            <AddToBtnContainer pricing={pricing} />
          ) : (
            <RemoveFromBtnContainer details={details} pricing={pricing} />
          )}
        </div>
        <PlatformsContainer details={details} />
      </div>
      <MetacritContainer details={details} />
      <RatingContainer details={details} />
      <RatingBar details={details} />
    </section>
  );
};
