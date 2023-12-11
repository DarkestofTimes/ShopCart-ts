import { Link } from "react-router-dom";

export const Paginator = ({ data, pageIndex, routeValue, sort, search }) => {
  const numberOfPages = Math.ceil(data.length / 10);
  const pageNumbersArray = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1
  );
  const startIndex = Math.max(0, pageIndex - 3);
  const onlyFive = pageNumbersArray.slice(startIndex, startIndex + 5);

  return (
    <div className="flex col-span-full justify-center">
      {pageIndex > 3 && (
        <Link
          to={`/${routeValue}${sort ? `/${sort}` : ""}${
            search ? `/${search}` : ""
          }/1`}>
          ...
        </Link>
      )}
      {onlyFive.map((item) => (
        <Button
          key={item}
          num={item}
          bool={item === Number(pageIndex) ? true : false}
          routeValue={routeValue}
          sort={sort}
          search={search}
        />
      ))}
      {pageIndex < pageNumbersArray.length - 2 && (
        <Link
          to={`/${routeValue}${sort ? `/${sort}` : ""}${
            search ? `/${search}` : ""
          }/${numberOfPages}`}>
          ...
        </Link>
      )}
    </div>
  );
};

const Button = ({ num, bool, routeValue, sort, search }) => {
  const toPath = `/${routeValue}${sort ? `/${sort}` : ""}${
    search ? `/${search}` : ""
  }/${num}`;
  return (
    <Link to={toPath} className={`w-4 h-4 ${bool ? "bg-gray-500" : ""}`}>
      {num}
    </Link>
  );
};
