import { useState } from "react";
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

export const ImgContainer = ({ imgs }: ImgContainerProps) => {
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
    <figure className="border-2 border-black border-solid col-span-2 row-span-1 flex overflow-hidden relative max-h-[80vh]">
      {imgs.map((screen, index: number) =>
        screen.linkId ? (
          <DLCLink key={index} screen={screen} currentImg={currentImg} />
        ) : screen.data ? (
          <Iframe key={index} vid={screen} currentImg={currentImg} />
        ) : (
          <Img key={index} screen={screen} currentImg={currentImg} />
        )
      )}
      <ImgSlider
        imgs={imgs}
        currentImg={currentImg}
        slideLeft={slideLeft}
        slideRight={slideRight}
        setCurrentImg={setCurrentImg}
      />
    </figure>
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
    <section className="absolute h-full w-full pointer-events-none">
      <button
        className="left-20 top-1/2 absolute -translate-y-1/2 bold text-3xl text-white bg-blue-500 pointer-events-auto"
        onClick={slideRight}>
        &lt;
      </button>
      <div className="w-min h-[4vh] flex relative top-[77%] translate-y-1/2 left-1/2 -translate-x-1/2 gap-2 bg-blue-950 place-items-center justify-center p-6 rounded">
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
        className="right-20 top-1/2 absolute -translate-y-1/2 bold text-3xl text-white bg-blue-500 pointer-events-auto"
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
  const current = currentImg === index ? "bg-blue-500" : "bg-white";
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
      ? " scale-0 absolute"
      : "";
  return (
    <button
      onClick={() => setCurrentImg(index)}
      className={`w-6 h-6 rounded-full flex place-content-center ${current} ${edges} ${hidden} transition-all duration-200 pointer-events-auto`}></button>
  );
};
