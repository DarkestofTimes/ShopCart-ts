import { useState, useRef } from "react";

interface img {
  id: number;
  image?: string;
  name?: string;
  linkId?: number;
  routeValue?: string;
  data?: {
    max: string;
  };
}

interface imgs {
  imgs: img[];
}

export const useSwipe = ({ imgs }: imgs) => {
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

  const figureRef = useRef<HTMLElement>(null);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const mouseStart = useRef(0);

  const mouseDown: React.EventHandler<
    React.SyntheticEvent<HTMLImageElement>
  > = (ev) => {
    if (!("touches" in ev)) {
      ev.preventDefault();
      mouseStart.current = (ev as React.MouseEvent<HTMLImageElement>).clientX;
    } else {
      mouseStart.current = (
        ev as React.TouchEvent<HTMLImageElement>
      ).touches[0].clientX;
    }

    setDragging(true);
  };

  const mouseMove: React.EventHandler<
    React.SyntheticEvent<HTMLImageElement>
  > = (ev) => {
    if (dragging) {
      if (!figureRef.current) return;
      if (!mouseStart.current) return;
      const figureRect = figureRef.current.getBoundingClientRect();
      const figureX = figureRect.width;
      const mouseX =
        ((ev as React.TouchEvent<HTMLImageElement>).touches
          ? (ev as React.TouchEvent<HTMLImageElement>).touches[0].clientX
          : (ev as React.MouseEvent<HTMLImageElement>).clientX) -
        mouseStart.current;
      const difference = Math.floor((mouseX * 100) / figureX);
      setDragOffset(difference);

      if (difference > 30) {
        slideRight();
        setDragging(false);
        setDragOffset(0);
      }
      if (difference < -30) {
        slideLeft();
        setDragging(false);
        setDragOffset(0);
      }
    }
  };

  const mouseUp = () => {
    setDragging(false);
    setDragOffset(0);
  };

  const mouseLeave = () => {
    setDragging(false);
    setDragOffset(0);
  };

  return {
    currentImg,
    setCurrentImg,
    slideLeft,
    slideRight,
    dragOffset,
    mouseDown,
    mouseMove,
    mouseUp,
    mouseLeave,
    figureRef,
  };
};
