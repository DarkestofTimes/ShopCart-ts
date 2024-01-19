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
    <section className="sm:col-span-3 col-span-full grid grid-rows-[min-content] sm:grid-cols-3 grid-cols-1 w-full">
      <MetaContainer details={details} page={page} />
      <div className="sm:row-span-2 grid h-full sm:pl-3 sm:col-start-3 col-span-full grid-rows-[min-content]">
        <DevelopersContainer details={details} />
        <GenreContainer details={details} />
      </div>
      <DescContainer details={details} />
    </section>
  );
};
