import type Item from "./Item";

type CarouselOptions = {
    showSeeMoreButton?: boolean,
    seeMoreButtonText?: string | 'See More',
    showBackButton?: boolean,
    backButtonText?: string | 'Back',
    fullScreen?: boolean,
    showNavigationButtons?: boolean,
}

type CarouselProps = {
  listItems: Item[];
  options?: CarouselOptions,
};


export {CarouselOptions, CarouselProps}