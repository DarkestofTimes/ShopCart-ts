import { ItemProp } from "../ItemInfoContainer.tsx";
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
import { useCartContext } from "../../../Context/ContextProvider";

export const MetaContainer = ({ details }: ItemProp) => {
  const { cart, setCart } = useCartContext();

  return (
    <section className="sm:col-span-2 col-span-full row-span-2  grid  sm:grid-cols-3 grid-cols-1 sm:grid-rows-[min-content] grid-rows-[min-content] items-center gap-1 h-min">
      <div className="grid sm:col-span-2 row-span-full gap-3">
        <div className="flex w-full sm:col-span-2">
          <ReleasedContainer details={details} />
          <ESRBContainer details={details} />
        </div>
        <div className="sm:col-span-2 flex w-full">
          <MetacritContainer details={details} />
          <RatingContainer details={details} />
        </div>
        <RatingBar details={details} />
        <PlatformsContainer details={details} />
      </div>
      <div className="grid sm:row-span-3 sm:grid-rows-2 justify-start grid-cols-1  h-full sm:pl-3 sm:col-start-3 sm:row-start-1">
        <div className=" w-full pt-2">
          {cart.results.some((item) => item.id === details.id) ? (
            <RemoveFromBtnContainer
              details={details}
              Cart={cart}
              setCart={setCart}
            />
          ) : (
            <AddToBtnContainer
              details={details}
              Cart={cart}
              setCart={setCart}
            />
          )}
        </div>
      </div>
    </section>
  );
};
