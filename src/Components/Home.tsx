import { NoSideLayout } from "./Layout";

export const Home = () => {
  return (
    <NoSideLayout>
      <section className="min-h-[88vh] flex flex-col items-center gap-4 p-4">
        <img src="" alt="" />
        <h1 className="text-4xl font-bold">Little pointless shop.</h1>
        <p className="text-2xl mt-6">
          Where prices are fake, items cannot be bought and font was never
          changed from default.
        </p>
      </section>
    </NoSideLayout>
  );
};
