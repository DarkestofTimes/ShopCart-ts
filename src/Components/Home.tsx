import { RightSideLayout } from "./Layout";

export const Home = () => {
  return (
    <RightSideLayout>
      <section className="min-h-[93vh] flex flex-col items-center gap-4 p-4">
        <img src="" alt="" />
        <h1 className="text-4xl font-bold">Lorem ipsum dolor sit amet.</h1>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          veniam recusandae harum asperiores aperiam aliquam modi assumenda
          quasi. Architecto, sunt cum! Beatae quod hic blanditiis exercitationem
          nobis sed dolores placeat.
        </p>
      </section>
    </RightSideLayout>
  );
};
