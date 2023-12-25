import { Link } from "react-router-dom";
import { DataItem } from "./Context/ContextProvider.tsx";
import { useParams } from "react-router-dom";
import { splitParams } from "../Functions/splitParams.ts";

interface PaginatorProps {
  data: DataItem;
  routeValue: string;
}
interface ButtonProps {
  num: number;
  bool: boolean;
  routeValue: string;
  path: string;
}

export const Paginator = ({ data, routeValue }: PaginatorProps) => {
  const { page } = useParams();
  const politeParams = splitParams(page!);
  const otherParams = Object.keys(politeParams).filter(
    (key) => key !== "pageIndex"
  );
  const path = otherParams.map((key) => politeParams[key]).join("");

  const pageNumber = Number(politeParams.pageIndex.slice(6));
  const numberOfPages = Math.ceil(data.count / 20);
  const pageNumbersArray = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1
  );
  const startIndex = Math.max(0, pageNumber - 3);
  const onlyFive = pageNumbersArray.slice(startIndex, startIndex + 5);

  return (
    <div className="flex col-span-full justify-center gap-2 h-1/2 items-center">
      {pageNumber > 3 && (
        <Link
          to={`/${routeValue}/1` + path}
          className="border-2 border-purple-600 rounded text-center p-2 font-semibold text-xl hover:scale-110 focus:scale-110 hover:border-[#f0f8ff] focus:border-[#f0f8ff]">
          ...
        </Link>
      )}
      {pageNumber > 1 && (
        <Link
          to={`/${routeValue}/${pageNumber - 1}` + path}
          className="border-2 border-purple-600 rounded text-center p-2 font-semibold text-xl hover:scale-110 focus:scale-110 hover:border-[#f0f8ff] focus:border-[#f0f8ff]">
          &lt;
        </Link>
      )}
      {onlyFive.map((item) => (
        <Button
          key={item}
          num={item}
          bool={item === pageNumber ? true : false}
          routeValue={routeValue}
          path={path}
        />
      ))}
      {pageNumber < pageNumbersArray.length - 1 && (
        <Link
          to={`/${routeValue}/${pageNumber + 1}` + path}
          className="border-2 border-purple-600 rounded text-center p-2 font-semibold text-xl hover:scale-110 focus:scale-110 hover:border-[#f0f8ff] focus:border-[#f0f8ff]">
          &gt;
        </Link>
      )}
      {pageNumber < pageNumbersArray.length - 2 && (
        <div className="border-2 border-purple-600 rounded text-center p-2 font-semibold text-xl ">
          ...
        </div>
      )}
    </div>
  );
};

const Button = ({ num, bool, routeValue, path }: ButtonProps) => {
  const toPath = `/${routeValue}/${num}` + path;
  return (
    <Link
      to={toPath}
      className={` ${
        bool ? "bg-purple-600" : ""
      } border-2 border-purple-600 rounded text-center p-2 font-semibold text-xl hover:scale-110 focus:scale-110 hover:border-[#f0f8ff] focus:border-[#f0f8ff]`}>
      {num}
    </Link>
  );
};
