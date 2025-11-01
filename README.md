<a id="readme-top"></a>

<br />
<div align="center">
  <h3 align="center">Smooth Carousel</h3>
  <a href="https://github.com/sam-wmd/smooth-carousel">
    <img src="public/smooth-carousel.gif" alt="Logo" >
  </a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A simple react carousel

<!-- GETTING STARTED -->

## Getting Started

This is a simple carousel component to be used in react

### Install the package

```sh
npm install smooth-carousel
```

### Prepare a list of items of the following type

```ts
export type Item = {
  id: number;
  title: string;
  subtitle?: string;
  intro: string;
  desc: string;
  src: string;
};
```

> `src` could be either a path to an image in the /public folder (example: some_path/my_image.png) or a url to a transparent image

### Try out your first component

```js
import { Carousel } from "smooth-carousel";
import { items } from "./resources/items.json";
export const App = () => {
return (
     <Carousel listItems={items}/>
 )
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Add Changelog
- [ ] Add text position options

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star if you find it useful. Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

Samuel - https://linkedin.com/in/samwmd

Github Link: https://github.com/samwmd/smooth-carousel

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

The OG creator 🐐: [Lundev](https://www.youtube.com/watch?v=hfGz5AgHT-E)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
