import { NoSideLayout } from "./Layout";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <NoSideLayout>
      <section className="lg:min-h-[85vh] w-full items-center gap-4 p-4 sm:grid grid-cols-2">
        <h1 className="text-6xl font-bold col-span-2 text-center">
          Tiny Games Shop
        </h1>
        <div className="p-4 bg-purple-600/50 rounded">
          <img src="" alt="" />
          <p className="text-2xl mt-6">
            Where prices are made up and wares do not exist.
          </p>
        </div>
        <div className="p-4 flex flex-col gap-6">
          <p className=" grid grid-rows-1  content-center justify-center text-center">
            <span className="text-5xl font-bold text-purple-600">
              Only today!
            </span>
            (and every day after)
          </p>
          <div className=" font-bold sm:text-5xl text-3xl rounded border-2 border-purple-600 p-4 items-center flex justify-center">
            Up to
            <span className="font-bold lg:text-8xl  text-[#f0f8ff] bg-purple-600 rounded p-2 mr-2 ml-2">
              70%
            </span>
            off!
          </div>
          <Link
            to={"/shop/1"}
            className="rounded bg-purple-600 text-[#f0f8ff] p-4 text-3xl font-bold hover:bg-[#f0f8ff] hover:text-purple-600 focus:bg-[#f0f8ff] focus:text-purple-600 transition-colors duration-200 text-center ">
            Browse
          </Link>
        </div>
      </section>
    </NoSideLayout>
  );
};
