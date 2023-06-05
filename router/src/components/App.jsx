import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import HomePage from "./Pages/HomePage";
import Nfp from "./Pages/Nfp";
import OnePost from "./Pages/OnePost";
import GoodPage from "./Pages/Favorite";

function App() {
    return (
      <Router>
        <Nav></Nav>

        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/posts/:id" element={<OnePost></OnePost>}></Route>
          <Route path="/bests" element={<GoodPage></GoodPage>}></Route>
          <Route path="*" element={<Nfp></Nfp>}></Route>
        </Routes>
      </Router>
    );
}

export default App;
