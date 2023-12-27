import { useState } from "react";

export const CollapseContainer = ({ children, value }) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div
      className={`${
        collapsed ? "h-8" : "h-full"
      } overflow-hidden transition-all duration-400`}>
      <h2
        className="bg-purple-800/50 w-full h-8 rounded transition-all duration-1000 border-2 border-purple-600 hover:border-[#f0f8ff] focus:border-[#f0f8ff] text-center font-bold text-xl hover:bg-[#f0f8ff] hover:text-purple-600 focus:bg-[#f0f8ff] focus:text-purple-600 cursor-pointer"
        onClick={() => setCollapsed(!collapsed)}
        role="button">
        {value}
      </h2>
      {children}
    </div>
  );
};
