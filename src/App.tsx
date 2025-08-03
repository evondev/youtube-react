import "./App.css";
import Button from "./button";
import IconHeart from "./icon-heart";

function App() {
  return (
    <div className="flex flex-wrap items-center gap-5">
      {/* <Button size="sm" variant="primary">
        Button
      </Button>
      <Button size="lg" variant="secondary">
        Button
      </Button> */}
      <Button isLoading iconLeft={<IconHeart />} size="md" variant="primary">
        Button
      </Button>
    </div>
  );
}

export default App;
