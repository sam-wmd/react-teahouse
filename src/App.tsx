import Carousel from "../lib/components/Carousel";
import "./App.css";
import { items } from "./resources/items.json";
function App() {
  return (
    <>
      <Carousel
        listItems={items}
        options={{
          fullScreen: true,
          showBackButton: true,
          backButtonText: "Go back, go back !",
          showSeeMoreButton: false,
          seeMoreButtonText: "blabla",
          showNavigationButtons: false,
        }}
      />
    </>
  );
}

export default App;
