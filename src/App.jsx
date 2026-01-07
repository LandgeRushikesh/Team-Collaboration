import { BrowserRouter } from "react-router-dom";
import Approutes from "./Components/routes/Approutes";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Approutes />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
