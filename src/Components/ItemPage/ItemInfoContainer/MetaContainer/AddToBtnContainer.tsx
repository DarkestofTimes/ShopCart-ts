import { ItemProp } from "../ItemInfoContainer";

interface pricingProp {
  pricing: {
    id: number;
    price: number;
    onSale: boolean;
    salePrice: number;
    salePercent: string;
  };
}

export const AddToBtnContainer = ({ pricing }: pricingProp) => {
  if (!pricing) {
    return;
  }
  return (
    <section className="h-full w-full ">
      <button className="text-4xl grid h-full grid-cols-2 font-bold rounded border-purple-800 border-2 p-4  bg-purple-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-purple-800 hover:scale-110 focus:bg-[#f0f8ff] focus:text-purple-800 focus:scale-110 place-items-center">
        {pricing.onSale ? (
          <div className="grid grid-cols-2 grid-rows-2 place-items-center h-full w-full">
            <span className="col-start-1 text-2xl font-normal">
              -{pricing.salePercent}
            </span>
            <span className="text-base pr-2">
              <s>{pricing.price}$</s>
            </span>
            <span className="row-span-2 w-full pl-2">{pricing.salePrice}$</span>
          </div>
        ) : (
          <span className="text-4xl font-bold w-full ">{pricing.price}$</span>
        )}
        Add to Cart
      </button>
    </section>
  );
};

export const RemoveFromBtnContainer = ({ details }: ItemProp) => {
  return (
    <section className="">
      <button className="text-4xl font-bold rounded border-purple-800 border-2 p-4 h-full w-1/2 bg-purple-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-purple-800 hover:scale-110 focus:bg-[#f0f8ff] focus:text-purple-800 focus:scale-110">
        Remove From Cart
      </button>
    </section>
  );
};
