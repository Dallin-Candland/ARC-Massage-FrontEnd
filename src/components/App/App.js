import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Landing from '../Landing/Landing';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    </div>
  );
}

export default App;
