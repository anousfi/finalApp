import { Home } from "./home";
import Main from "./main";
import { Services } from "./services";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="main" element={<Main/>}></Route>
            <Route path='services' element={<Services/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
