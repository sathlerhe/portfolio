import Home from "./Pages/Home";
import { setConfiguration } from "react-grid-system";

setConfiguration({
  containerWidths: [540, 740, 960, 1140, 1250, 1540],
  breakpoints: [576, 768, 992, 1200, 1280, 1600],
});

function App() {
  return <Home />;
}

export default App;
