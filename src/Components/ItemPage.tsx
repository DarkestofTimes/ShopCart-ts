import { useParams } from "react-router-dom";
import { Items } from "./ContextProvider";
import { NoSideLayout } from "./Layout";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

interface item {}

interface ImgContainerProps {
  item: Items | undefined;
}

export const ItemPage = () => {
  const { page, itemId } = useParams();
  const { item, screens, additions, trailers, series } = useLoaderData();
  const imgs = [{ id: 1, image: item.background_image }, ...screens.results];
  return (
    <NoSideLayout>
      <section className="min-h-[93vh] grid grid-cols-3 grid-rows-4 p-4 ">
        <ImgContainer item={item} screens={imgs} />
      </section>
    </NoSideLayout>
  );
};

const ImgContainer = ({ item, screens }: ImgContainerProps) => {
  const [currentImg, setCurrentImg] = useState(0);
  const slideLeft = () => {
    setCurrentImg((index) => {
      if (index === screens.length - 1) return 0;
      return index + 1;
    });
  };

  const slideRight = () => {
    setCurrentImg((index) => {
      if (index === 0) return screens.length - 1;
      return index - 1;
    });
  };

  if (!item) {
    return;
  }
  return (
    <figure className="border-2 border-black border-solid col-span-2 row-span-3 flex overflow-hidden relative">
      {screens.map((screen, index) => (
        <Img key={index} screen={screen} currentImg={currentImg} />
      ))}
      <ImgSlider
        screens={screens}
        currentImg={currentImg}
        slideLeft={slideLeft}
        slideRight={slideRight}
        setCurrentImg={setCurrentImg}
      />
    </figure>
  );
};

const Img = ({ screen, currentImg }) => {
  return (
    <img
      src={screen.image}
      alt=""
      className="w-full h-full object-cover transition-all duration-200"
      style={{ translate: `${-100 * currentImg}%` }}
      loading="lazy"
    />
  );
};

const ImgSlider = ({
  screens,
  currentImg,
  slideLeft,
  slideRight,
  setCurrentImg,
}) => {
  return (
    <section className="absolute h-full w-full">
      <button
        className="left-20 top-1/2 absolute -translate-y-1/2 bold text-3xl text-white bg-blue-500"
        onClick={slideRight}>
        &lt;
      </button>
      <div className="w-min h-12 flex relative top-3/4 translate-y-1/2 left-1/2 -translate-x-1/2 gap-2 bg-blue-950 place-items-center justify-center p-6 rounded">
        {screens.map((_, index) => (
          <SlideBtn
            key={index}
            index={index}
            setCurrentImg={setCurrentImg}
            currentImg={currentImg}
            screens={screens}
          />
        ))}
      </div>
      <button
        className="right-20 top-1/2 absolute -translate-y-1/2 bold text-3xl text-white bg-blue-500"
        onClick={slideLeft}>
        &gt;
      </button>
    </section>
  );
};

const SlideBtn = ({ index, setCurrentImg, currentImg, screens }) => {
  const current = currentImg === index ? "bg-blue-500" : "bg-white";
  const edges =
    (index > Math.max(3, currentImg) + 2 ||
      index < Math.min(screens.length - 4, currentImg) - 2) &&
    index !== 0 &&
    index !== screens.length - 1
      ? "scale-50"
      : "";
  const hidden =
    index > Math.max(3, currentImg) + 3 ||
    index < Math.min(screens.length - 4, currentImg) - 3
      ? "hidden"
      : "";
  return (
    <button
      onClick={() => setCurrentImg(index)}
      className={`w-6 h-6 rounded-full flex place-content-center ${current} ${edges} ${hidden} transition-all duration-200 `}></button>
  );
};
