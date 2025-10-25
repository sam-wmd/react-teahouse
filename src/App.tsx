import "./App.css";
import Carousel from "./components/Carousel";
import { items } from "./resources/items.json";
function App() {
  return (
    <>
      <Carousel listItems={items} />
    </>
  );
}

export default App;
