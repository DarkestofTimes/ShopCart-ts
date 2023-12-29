import { formatDateAddYear } from "../../Functions/formatDateAddYear";
import { Link } from "react-router-dom";

export const PremadeLinks = () => {
  return (
    <section className="w-full p-2 border-2 border-purple-600 rounded flex gap-2 flex-wrap">
      <BestOfTheYear />
      <LastThirty />
      <AllTimeBest />
    </section>
  );
};

const BestOfTheYear = () => {
  const currentDate = new Date();
  const yearMinus = formatDateAddYear(currentDate, false);
  currentDate.setFullYear(currentDate.getFullYear() + 1);
  const currentYear = formatDateAddYear(currentDate, false);
  return (
    <Link
      to={`/shop/1&dates=${yearMinus},${currentYear}`}
      className="text-xl flex w-full font-bold rounded border-purple-800 border-2 p-1 whitespace-nowrap bg-purple-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-purple-800  focus:bg-[#f0f8ff] focus:text-purple-800  justify-center">
      Best of the Year
    </Link>
  );
};

const LastThirty = () => {
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() + 1);
  const currentMonth = formatDateAddYear(currentDate, false);
  currentDate.setMonth(currentDate.getMonth() - 1);
  const monthMinus = formatDateAddYear(currentDate, false);

  return (
    <Link
      to={`/shop/1&dates=${monthMinus},${currentMonth}`}
      className="text-xl flex w-full font-bold rounded border-purple-800 border-2 p-1 whitespace-nowrap bg-purple-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-purple-800  focus:bg-[#f0f8ff] focus:text-purple-800  justify-center">
      Last 30 days
    </Link>
  );
};

const AllTimeBest = () => {
  return (
    <Link
      to={`/shop/1`}
      className="text-xl flex w-full font-bold rounded border-purple-800 border-2 p-1 whitespace-nowrap bg-purple-800 text-[#f0f8ff] transition-all duration-200 hover:bg-[#f0f8ff] hover:text-purple-800  focus:bg-[#f0f8ff] focus:text-purple-800  justify-center">
      Most Popular
    </Link>
  );
};
