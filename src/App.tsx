import Carousel from "../lib/components/Carousel";
import "./App.css";
import { items } from "./resources/items.json";
function App() {
  return (
    <>
      <Carousel listItems={items} />
    </>
  );
}

export default App;
