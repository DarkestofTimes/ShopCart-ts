import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { splitParams } from "../Functions/splitParams.ts";

interface SortProps {
  routeValue: string;
}

interface SelectProps {
  routeValue: string;
  path: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

interface OptionProps {
  routeValue: string;
  path: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
}

export const SortSelector = ({ routeValue }: SortProps) => {
  const { page } = useParams();
  const politeParams = splitParams(page!);
  const otherParams = Object.keys(politeParams).filter(
    (key) => key !== "pageIndex" && key !== "ordering"
  );
  const path = otherParams.map((key) => politeParams[key]).join("");
  const [selected, setSelected] = useState("Relevance");
  const [expand, setExpand] = useState(false);
  const handleExpand = (ev: React.MouseEvent) => {
    ev.stopPropagation();
    setExpand(true);
  };
  return (
    <div
      className="col-span-full flex justify-self-end mr-8 w-min flex-nowrap border-2 border-purple-600 rounded p-2 whitespace-nowrap gap-2 cursor-pointer hover:scale-110 focus:scale-110 transition-all duration-200 hover:border-[#f0f8ff] focus:border-[#f0f8ff] hover:text-purple-600 focus:text-purple-600 relative z-10"
      onClick={handleExpand}>
      <span className="">Sort By:</span>
      <span className="font-bold">{selected}</span>
      {expand && (
        <Select
          routeValue={routeValue}
          path={path}
          setSelected={setSelected}
          setExpand={setExpand}
        />
      )}
    </div>
  );
};

const Select = ({ routeValue, path, setSelected, setExpand }: SelectProps) => {
  const values = ["Popularity", "Rating", "Released", "Relevance"];
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(ev: MouseEvent) {
      if (divRef.current && !divRef.current.contains(ev.target as Node)) {
        setExpand(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef]);

  return (
    <div
      className="absolute w-[102%] h-min top-0 left-0 border-2 border-purple-600 rounded p-2 flex flex-col bg-[#0f0f0f] hover:border-[#f0f8ff] focus:border-[#f0f8ff]"
      ref={divRef}>
      {values.map((value) => (
        <Option
          key={value}
          routeValue={routeValue}
          path={path}
          setSelected={setSelected}
          setExpand={setExpand}
          value={value}
        />
      ))}
    </div>
  );
};

const Option = ({
  routeValue,
  path,
  setSelected,
  setExpand,
  value,
}: OptionProps) => {
  const ordering: { [key: string]: string } = {
    Popularity: "-added",
    Rating: "-rating",
    Released: "-released",
    Relevance: "-relevance",
  };
  const handleSelection = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    const target = ev.target as HTMLAnchorElement;
    ev.stopPropagation();
    setSelected(target.textContent || "");
    setExpand(false);
  };
  return (
    <Link
      to={`/${routeValue}/1&ordering=${ordering[value]}` + path}
      className="relative hover:text-[#f0f8ff] focus:text-[#f0f8ff] p-1"
      onClick={handleSelection}>
      {value}
    </Link>
  );
};
