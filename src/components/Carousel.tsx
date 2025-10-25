import { useEffect, useRef, useState } from "react";
import "./Carousel.css";
import type { Item } from "../types/Item";
type CarouselProps = {
  listItems: Item[];
};
const Carousel: React.FC<CarouselProps> = ({ listItems }) => {
  const [buttonsDiabled, setButtonsDisabled] = useState(false);
  const [carouselClasslist, setCarouselClasslist] = useState(["carousel"]);
  const listRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  const carouselRef = useRef(null);
  useEffect(() => {
    document.addEventListener("keyup", handleKeyboardNavigation);
    return () => {
      document.removeEventListener("keyup", handleKeyboardNavigation);
    };
  }, []);
  const handleKeyboardNavigation = ({ code }: any) => {
    switch (code) {
      case "ArrowRight":
        showSlider("next");
        break;
      case "ArrowLeft":
        showSlider("prev");
        break;
      case "Escape":
        seeAll();
        break;
      case "Enter":
        !isShowingDetail() && seeMore();
        break;
      default:
        return;
    }
  };

  const resetCarousel = () => {
    setCarouselClasslist(["carousel"]);
  };

  const addClassToCarousel = (newClass: string) => {
    setCarouselClasslist((currentList: string[]) =>
      currentList.concat([newClass])
    );
  };

  const removeClassFromCarousel = (classToRemove: string) => {
    setCarouselClasslist((current: string[]) =>
      current.filter((l) => l != classToRemove)
    );
  };
  const showSlider = (type: string) => {
    setButtonsDisabled(true);
    resetCarousel();
    let items = document.querySelectorAll(".carousel .list .item");
    if (type === "next") {
      listRef.current?.appendChild(items[0]);
      addClassToCarousel("next");
    } else {
      listRef.current?.prepend(items[items.length - 1]);
      addClassToCarousel("prev");
    }
    setButtonsDisabled(false);
  };

  const seeMore = () => {
    addClassToCarousel("showDetail");
  };

  const seeAll = () => {
    removeClassFromCarousel("showDetail");
  };

  const isShowingDetail = () =>
    carouselClasslist.find((p) => p == "showDetail") != null;
  return (
    <div className={carouselClasslist.join(" ")} ref={carouselRef}>
      <div className="list" ref={listRef}>
        {listItems.map(({ title, desc, intro, id, src, subtitle }: any) => {
          return (
            <div className="item" key={id}>
              <img src={src} alt={title} />
              <div className="introduce">
                <div className="title">{title}</div>
                {subtitle && <div className="subtitle">{subtitle}</div>}
                <div className="des">{intro}</div>
                <button className="seeMore" onClick={seeMore}>
                  SEE MORE
                </button>
              </div>
              <div className="detail">
                <div className="title">{title}</div>
                {subtitle && <div className="subtitle">{subtitle}</div>}
                <div className="des">{desc}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="arrows">
        <button
          id="prev"
          ref={prevBtnRef}
          disabled={buttonsDiabled}
          onClick={() => showSlider("prev")}
        >
          {"<"}
        </button>
        <button
          id="next"
          ref={nextBtnRef}
          disabled={buttonsDiabled}
          onClick={() => showSlider("next")}
        >
          {">"}
        </button>
        {isShowingDetail() && (
          <button id="back" onClick={seeAll}>
            Back
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
