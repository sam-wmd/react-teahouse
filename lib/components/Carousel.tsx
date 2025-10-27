import { useEffect, useRef, useState } from "react";
import "./Carousel.css";
import type { CarouselOptions, CarouselProps } from "../types/Carousel";

const defaultOptions: CarouselOptions = {
  showSeeMoreButton: true,
  seeMoreButtonText: "See more",
  showBackButton: true,
  backButtonText: "Back",
  fullScreen: false,
  showNavigationButtons: true,
};
const Carousel: React.FC<CarouselProps> = ({ listItems, options }) => {
  const carouselOptions = { ...defaultOptions, ...options };
  const defaultClassList = options?.fullScreen
    ? ["carousel", "fullscreen"]
    : ["carousel"];

  const [buttonsDiabled, setButtonsDisabled] = useState(false);
  const [carouselClasslist, setCarouselClasslist] = useState(defaultClassList);
  const listRef = useRef(null);

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
    setCarouselClasslist(defaultClassList);
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
    <div className={carouselClasslist.join(" ")}>
      <div className="list" ref={listRef}>
        {listItems.map(({ title, desc, intro, id, src, subtitle }: any) => {
          return (
            <div className="item" key={id}>
              <img src={src} alt={title} />
              <div className="introduce">
                <div className="title">{title}</div>
                {subtitle && <div className="subtitle">{subtitle}</div>}
                <div className="des">{intro}</div>
                {carouselOptions.showSeeMoreButton && (
                  <button className="seeMore" onClick={seeMore}>
                    {carouselOptions.seeMoreButtonText.toUpperCase()}
                  </button>
                )}
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
        {carouselOptions.showNavigationButtons && (
          <>
            <button
              id="prev"
              disabled={buttonsDiabled}
              onClick={() => showSlider("prev")}
            >
              {"<"}
            </button>
            <button
              id="next"
              disabled={buttonsDiabled}
              onClick={() => showSlider("next")}
            >
              {">"}
            </button>
          </>
        )}

        {isShowingDetail() && carouselOptions.showBackButton && (
          <button id="back" onClick={seeAll}>
            {carouselOptions.backButtonText.toUpperCase()}
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
