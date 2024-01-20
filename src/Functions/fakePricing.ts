/* interface item {
  released: string | null;
  id: number;
  pricing: {
    price: number;
    onSale: boolean;
    salePrice: number | null;
    salePercent: string | null;
  };
} */

/* interface data {
  results: item[];
} */

/* export const fakePricing = (data: data) => {
  const makePrice = (releaseDate: string | null) => {
    const price = Math.floor(Math.random() * (120 - 8 + 1)) + 8;
    if (releaseDate) {
      const currentYear = new Date().getFullYear();
      const releasedIn = Number(releaseDate.slice(0, 4));
      const years = currentYear - releasedIn > 0 ? currentYear - releasedIn : 1;
      const stalePrice = Math.floor(price * (years * 4 * 0.01));
      return stalePrice + 0.99;
    }

    return price + 0.99;
  };

  const makeOnSale = () => {
    const random = Math.floor(Math.random() * 4) + 1;
    return random < 3 ? true : false;
  };

  const makeSalePrice = (price: number, onSale: boolean) => {
    if (onSale) {
      const randomDiscount = Math.floor(Math.random() * (70 - 8) + 8) * 0.01;
      const salePrice = Math.floor(price * randomDiscount);
      return salePrice + 0.99;
    }
    return null;
  };

  const calcPercent = (price: number, salePrice: number | null) => {
    if (salePrice) {
      const difference = price - salePrice;
      const percent = Math.round((difference * 100) / price);
      return percent + "%";
    }
    return null;
  };

  const pricedData = data.results.map((item: item) => {
    const price = makePrice(item.released);
    const onSale = makeOnSale();
    const salePrice = makeSalePrice(price, onSale);
    const salePercent = calcPercent(price, salePrice);

    return {
      ...item,
      pricing: {
        price,
        onSale,
        salePrice,
        salePercent,
      },
    };
  });
  data.results = pricedData;
  return data;
};

 */

interface Item {
  id: number;
  released: string;
}

export const fakePricing = (item: Item) => {
  const idString = item.id.toString();
  const makePrice = (releaseDate: string | null) => {
    const lastTwoInts = Number(idString.slice(-2));
    const price = lastTwoInts < 10 ? 5 : lastTwoInts > 90 ? 90 : lastTwoInts;
    if (releaseDate) {
      const currentYear = new Date().getFullYear();
      const releasedIn = Number(releaseDate.slice(0, 4));
      const years = currentYear - releasedIn > 0 ? currentYear - releasedIn : 1;
      const stalePrice = Math.floor(price * (years * 4 * 0.01));
      return stalePrice + 0.99;
    }
    return price + 0.99;
  };

  const makeOnSale = () => {
    const idString = item.id.toString();
    const firstTwoInts = Number(idString.slice(0, 2));
    const result = firstTwoInts > 70 ? true : false;
    return result;
  };

  const makeSalePrice = (price: number, onSale: boolean) => {
    const idString = item.id.toString();
    const firstInt = Number(idString.charAt(0));
    if (onSale) {
      const discount =
        firstInt > 2
          ? 0.85
          : firstInt > 3
          ? 0.8
          : firstInt > 4
          ? 0.7
          : firstInt > 5
          ? 0.6
          : firstInt > 6
          ? 0.5
          : firstInt > 7
          ? 0.4
          : firstInt > 8
          ? 0.3
          : 0.9;
      const salePrice = Math.floor(price * discount);
      return salePrice + 0.99;
    }
    return null;
  };

  const calcPercent = (price: number, salePrice: number | null) => {
    if (salePrice) {
      const difference = price - salePrice;
      const percent = Math.round((difference * 100) / price);
      return percent + "%";
    }
    return null;
  };

  const price = makePrice(item.released);
  const onSale = makeOnSale();
  const salePrice = makeSalePrice(price, onSale);
  const salePercent = calcPercent(price, salePrice);

  return {
    ...item,
    pricing: {
      price,
      onSale,
      salePrice,
      salePercent,
    },
  };
};
