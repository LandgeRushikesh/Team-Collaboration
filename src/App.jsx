import { BrowserRouter } from "react-router-dom";
import Approutes from "./Components/routes/Approutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Approutes />
      </BrowserRouter>
    </>
  );
}

export default App;
