import { MetaContainer } from "./MetaContainer/MetaContainer";
import { DevelopersContainer } from "./DevelopersContainer";
import { GenreContainer } from "./GenreContainer";
import { DescContainer } from "./DescContainer";

export interface ItemProp {
  details: {
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
        name: string;
      };
    }[];
    genres?: {
      id: number;
      name: string;
      slug: string;
    }[];
    description?: string;
    released: string;
    tba?: boolean;
  };
  page?: string;
  pricing?: pricing;
}

interface pricing {
  id: number;
  price: number;
  onSale: boolean;
  salePrice: number;
  salePercent: string;
}

export const ItemInfoContainer = ({ details, page }: ItemProp) => {
  return (
    <section className="col-span-3 grid grid-rows-[min-content] grid-cols-3  w-full">
      <MetaContainer details={details} page={page} />
      <div className="row-span-2 grid h-full pl-3 col-start-3">
        <DevelopersContainer details={details} />
        <GenreContainer details={details} />
      </div>
      <DescContainer details={details} />
    </section>
  );
};
