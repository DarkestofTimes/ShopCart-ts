import { Link } from "react-router-dom";
import { DataItem } from "./ContextProvider";
import { useParams } from "react-router-dom";
import { splitParams } from "./splitParams.ts";

interface PaginatorProps {
  data: DataItem;
  routeValue: string;
}
interface ButtonProps {
  num: number;
  bool: boolean;
  routeValue: string;
}

export const Paginator = ({ data, routeValue }: PaginatorProps) => {
  const { page } = useParams();
  const politeParams = splitParams(page!);

  const pageNumber = Number(politeParams.pageIndex.slice(6));
  const numberOfPages = Math.ceil(data.count / 20);
  const pageNumbersArray = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1
  );
  const startIndex = Math.max(0, pageNumber - 3);
  const onlyFive = pageNumbersArray.slice(startIndex, startIndex + 5);

  return (
    <div className="flex col-span-full justify-center">
      {pageNumber > 3 && <Link to={`/${routeValue}/1`}>...</Link>}
      {onlyFive.map((item) => (
        <Button
          key={item}
          num={item}
          bool={item === pageNumber ? true : false}
          routeValue={routeValue}
        />
      ))}
      {pageNumber < pageNumbersArray.length - 2 && (
        <Link to={`/${routeValue}/${numberOfPages}`}>...</Link>
      )}
    </div>
  );
};

const Button = ({ num, bool, routeValue }: ButtonProps) => {
  const toPath = `/${routeValue}/${num}`;
  return (
    <Link to={toPath} className={`w-4 h-4 ${bool ? "bg-gray-500" : ""}`}>
      {num}
    </Link>
  );
};
