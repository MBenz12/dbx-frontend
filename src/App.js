import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterComponent from "./components/routerComponent/RouterComponent";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RouterComponent />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
