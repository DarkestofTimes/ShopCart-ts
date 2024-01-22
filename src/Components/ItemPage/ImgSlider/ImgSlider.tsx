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

export const ImgSlider = ({
  imgs,
  currentImg,
  slideLeft,
  slideRight,
  setCurrentImg,
}: ImgSliderProps) => {
  return (
    <section className="absolute h-full w-full flex flex-shrink-0 flex-grow-0 pointer-events-none">
      <button
        className="left-0 w-[5%] h-[10%] absolute top-1/2 -translate-y-1/2  bold text-3xl text-[#f0f8ff]  pointer-events-auto hover:scale-125 transition-all duration-200 focus:scale-110"
        onClick={slideRight}>
        &lt;
      </button>
      <div className="w-min h-2rem flex absolute bottom-10 left-1/2 -translate-x-1/2 gap-2 bg-purple-800/50 place-items-center justify-center p-1 rounded  ">
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
        className="right-0 w-[5%] h-[10%] absolute top-1/2 -translate-y-1/2 bold text-3xl text-[#f0f8ff]  pointer-events-auto hover:scale-125 transition-all duration-200 focus:scale-110"
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
