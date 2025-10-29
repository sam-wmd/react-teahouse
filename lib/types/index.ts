export type CarouselOptions = {
    showSeeMoreButton?: boolean;
    seeMoreButtonText?: string | 'See More';
    showBackButton?: boolean;
    backButtonText?: string | 'Back';
    fullScreen?: boolean;
    showNavigationButtons?: boolean;
    titleColor?: string;
    subtitleColor?:string;
    descriptionColor?:string;
}

export type CarouselProps = {
  listItems: Item[];
  options?: CarouselOptions;
};

export type Item = {
  id: number;
  title: string;
  subtitle?: string;
  intro: string;
  desc: string;
  src: string;
};
