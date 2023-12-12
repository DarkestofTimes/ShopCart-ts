import { Link } from "react-router-dom";
import { DataItem } from "./ContextProvider";

interface PaginatorProps {
  data: DataItem[];
  pageIndex: string | undefined;
  routeValue: string;
  filter: string | undefined;
  search: string | undefined;
}
interface ButtonProps {
  num: number;
  bool: boolean;
  routeValue: string;
  filter: string | undefined;
  search: string | undefined;
}

export const Paginator = ({
  data,
  pageIndex,
  routeValue,
  filter,
  search,
}: PaginatorProps) => {
  const pageNumber = Number(pageIndex);
  const numberOfPages = Math.ceil(data.length / 10);
  const pageNumbersArray = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1
  );
  const startIndex = Math.max(0, pageNumber - 3);
  const onlyFive = pageNumbersArray.slice(startIndex, startIndex + 5);

  return (
    <div className="flex col-span-full justify-center">
      {pageNumber > 3 && (
        <Link
          to={`/${routeValue}${filter ? `/${filter}` : ""}${
            search ? `/${search}` : ""
          }/1`}>
          ...
        </Link>
      )}
      {onlyFive.map((item) => (
        <Button
          key={item}
          num={item}
          bool={item === pageNumber ? true : false}
          routeValue={routeValue}
          filter={filter}
          search={search}
        />
      ))}
      {pageNumber < pageNumbersArray.length - 2 && (
        <Link
          to={`/${routeValue}${filter ? `/${filter}` : ""}${
            search ? `/${search}` : ""
          }/${numberOfPages}`}>
          ...
        </Link>
      )}
    </div>
  );
};

const Button = ({ num, bool, routeValue, filter, search }: ButtonProps) => {
  const toPath = `/${routeValue}${filter ? `/${filter}` : ""}${
    search ? `/${search}` : ""
  }/${num}`;
  return (
    <Link to={toPath} className={`w-4 h-4 ${bool ? "bg-gray-500" : ""}`}>
      {num}
    </Link>
  );
};
