import { useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";

export const ProgressBar = () => {
  const { state } = useNavigation();
  const [width, setWidth] = useState("w-full");

  useEffect(() => {
    if (state === "loading") {
      setWidth("w-full");
    } else {
      const timeoutId = setTimeout(() => {
        setWidth("w-0");
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [state]);

  return (
    <div>
      <div className="h-2 fixed w-full left-0">
        {state === "loading" && (
          <span
            className={`flex bg-purple-600 transition-all duration-500 h-full ${width} `}></span>
        )}
      </div>
    </div>
  );
};
