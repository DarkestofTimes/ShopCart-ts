interface item {
  released: string | null;
  pricing: {
    price: number;
    onSale: boolean;
    salePrice: number | null;
    salePercent: string | null;
  };
}

interface data {
  results: item[];
}

export const fakePricing = (data: data) => {
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
