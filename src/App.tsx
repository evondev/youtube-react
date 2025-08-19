import { useState } from "react";
import "./App.css";
import Button from "./button";
import IconHeart from "./icon-heart";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex flex-wrap items-center gap-5">
      {/* <Button size="sm" variant="primary">
        Button
      </Button>
      <Button size="lg" variant="secondary">
        Button
      </Button> */}
      <Button
        size="sm"
        variant="primary"
        onClick={() => setIsLoading(!isLoading)}
      >
        Toggle loading
      </Button>
      <Button
        isLoading={isLoading}
        iconLeft={<IconHeart />}
        size="lg"
        variant="primary"
      >
        Button
      </Button>
    </div>
  );
}

export default App;
