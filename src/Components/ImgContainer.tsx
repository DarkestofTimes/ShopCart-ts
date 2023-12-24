import { useState, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ImgContainerProps {
  imgs: {
    id: number;
    image?: string;
    name?: string;
    linkId?: number;
    routeValue?: string;
    data?: {
      max: string;
    };
  }[];
  children?: ReactNode;
}

interface ImgProps {
  screen: {
    id: number;
    image?: string;
    name?: string;
    linkId?: number;
    routeValue?: string;
    data?: {
      max: string;
    };
  };
  currentImg: number;
}

interface ImgSliderProps {
  imgs: {
    id: number;
    image?: string;
    name?: string;
    linkId?: number;
    routeValue?: string;
    data?: {
      max: string;
    };
  }[];

  currentImg: number;
  slideLeft: () => void;
  slideRight: () => void;
  setCurrentImg: React.Dispatch<React.SetStateAction<number>>;
}

interface SlideBtnProps {
  index: number;
  setCurrentImg: React.Dispatch<React.SetStateAction<number>>;
  currentImg: number;
  imgs: {
    id: number;
    image?: string;
    name?: string;
    linkId?: number;
    routeValue?: string;
    data?: {
      max: string;
    };
  }[];
}

interface IframeProps {
  vid: {
    id: number;
    image?: string;
    name?: string;
    linkId?: number;
    routeValue?: string;
    data?: {
      max: string;
    };
  };
  currentImg: number;
}

export const ImgContainer = ({ imgs, children }: ImgContainerProps) => {
  const [currentImg, setCurrentImg] = useState(0);
  const slideLeft = () => {
    setCurrentImg((index) => {
      if (index === imgs.length - 1) return 0;
      return index + 1;
    });
  };

  const slideRight = () => {
    setCurrentImg((index) => {
      if (index === 0) return imgs.length - 1;
      return index - 1;
    });
  };

  return (
    <div className="flex relative overflow-hidden border-2 border-purple-800 border-solid rounded">
      <figure className=" flex  relative max-h-[80vh] ">
        {children && children}
        {imgs.map((screen, index: number) =>
          screen.linkId ? (
            <DLCLink key={index} screen={screen} currentImg={currentImg} />
          ) : screen.data ? (
            <Iframe key={index} vid={screen} currentImg={currentImg} />
          ) : (
            <Img key={index} screen={screen} currentImg={currentImg} />
          )
        )}
      </figure>
      <ImgSlider
        imgs={imgs}
        currentImg={currentImg}
        slideLeft={slideLeft}
        slideRight={slideRight}
        setCurrentImg={setCurrentImg}
      />
    </div>
  );
};

const Img = ({ screen, currentImg }: ImgProps) => {
  return (
    <img
      src={screen.image}
      alt={screen.name ? screen.name : ""}
      title={screen.name ? screen.name : ""}
      className="w-auto h-full object-cover transition-all duration-200"
      style={{ translate: `${-100 * currentImg}%` }}
      loading="lazy"
    />
  );
};

const Iframe = ({ vid, currentImg }: IframeProps) => {
  return (
    <div
      className="w-full h-full flex flex-shrink-0 flex-grow-0 transition-all duration-200"
      style={{ translate: `${-100 * currentImg}%` }}>
      <iframe
        key={vid.id}
        src={vid.data ? vid.data.max : ""}
        allow="fullscreen"
        className="w-full h-full flex flex-shrink-0 flex-grow-0"></iframe>
    </div>
  );
};

const DLCLink = ({ screen, currentImg }: ImgProps) => {
  return (
    <Link
      to={`/items/${screen.routeValue}/${screen.linkId}`}
      className="w-full h-auto object-cover flex flex-shrink-0 flex-grow-0 transition-all duration-200"
      style={{ translate: `${-100 * currentImg}%` }}>
      <img
        src={screen.image}
        alt={screen.name ? screen.name : ""}
        className="w-full h-auto object-cover transition-all duration-200"
        loading="lazy"
        title={screen.name ? screen.name : ""}
      />
      <h2 className=" w-full h-6 flex justify-center absolute bottom-0 hover:scale-105  transition duration-200 bg-gradient-to-t from-purple-800/75 from-30% text-[#f0f8ff]">
        {screen.name}
      </h2>
    </Link>
  );
};

const ImgSlider = ({
  imgs,
  currentImg,
  slideLeft,
  slideRight,
  setCurrentImg,
}: ImgSliderProps) => {
  return (
    <section className="absolute h-full w-full flex flex-shrink-0 flex-grow-0 pointer-events-none">
      <button
        className="left-0  h-full w-[5%] absolute  bold text-3xl text-[#f0f8ff] bg-gradient-to-r from-purple-800/50 pointer-events-auto hover:scale-125 transition-all duration-200 focus:scale-110"
        onClick={slideRight}>
        &lt;
      </button>
      <div className="w-min h-2rem flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-2 bg-purple-800/50 place-items-center justify-center p-1 rounded  ">
        {imgs.map((_: object, index: number) => (
          <SlideBtn
            key={index}
            index={index}
            setCurrentImg={setCurrentImg}
            currentImg={currentImg}
            imgs={imgs}
          />
        ))}
      </div>
      <button
        className="right-0  h-full w-[5%] absolute  bold text-3xl text-[#f0f8ff] bg-gradient-to-l from-purple-800/50  pointer-events-auto hover:scale-125 transition-all duration-200 focus:scale-110"
        onClick={slideLeft}>
        &gt;
      </button>
    </section>
  );
};

const SlideBtn = ({
  index,
  setCurrentImg,
  currentImg,
  imgs,
}: SlideBtnProps) => {
  const current = currentImg === index ? "bg-purple-800" : "bg-[#f0f8ff]";
  const edges =
    (index > Math.max(3, currentImg) + 2 ||
      index < Math.min(imgs.length - 4, currentImg) - 2) &&
    index !== 0 &&
    index !== imgs.length - 1
      ? "scale-50"
      : "";
  const hidden =
    index > Math.max(3, currentImg) + 3 ||
    index < Math.min(imgs.length - 4, currentImg) - 3
      ? "scale-50 hidden"
      : "";
  return (
    <button
      onClick={() => setCurrentImg(index)}
      className={`w-5 h-5  rounded-full flex place-content-center ${current} ${edges} ${hidden}  pointer-events-auto hover:scale-125 transition-all duration-200  focus:scale-110`}></button>
  );
};
