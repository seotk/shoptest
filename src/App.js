import { Link, Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Section1 from "./pages/section1";
import Section2 from "./pages/section2";
import Section3 from "./pages/section3";
import Section4 from "./pages/section4";
import Section5 from "./pages/section5";
import data from "./pages/data";
import { useState } from "react";
import Details from "./pages/Details";
function App() {
  let nav = useNavigate();

  let [pd, setpd] = useState(data);
  console.log("app", pd);
  return (
    <div className="App">
      <header className="AppHeader mw">
        <Link to="/" className="logo">
          <img src="/img/logo.svg" />
        </Link>
        <nav className="gnb">
          <Link to="/sec2">Каталог</Link>
          <Link to="/sec3">О компании</Link>
          <Link to="/sec">Доставка и оплата</Link>
        </nav>
        <button
          onClick={() => {
            nav(-2);
          }}
          className="person"
        >
          Купить
        </button>
      </header>
      <Routes>
        <Route path="*" element={<div>페이지 없음 (404)</div>} />
        <Route path="/" element={<Section1 />} />
        <Route path="/sec2" element={<Section2 data={pd} />} />
        <Route path="/sec3" element={<Section3 />}>
          <Route path="member" element={<div>회사소개</div>} />
          <Route path="location" element={<div>회사위치</div>} />
          <Route path="hello" element={<div>CEO인사말</div>} />
        </Route>
        <Route path="/sec4" element={<Section4 />} />
        <Route path="/detail/:id" element={<Details data={pd} />} />
      </Routes>
      {/* <Section2 />
      <Section3 />
      <Section4 />
      <Section5 /> */}
      <footer className="ft">
        <div>
          <a href="#">HOME</a>
          <a href="#">О НАС</a>
          <a href="#">ОФЕРТА</a>
          <a href="#">КОРЗИНА</a>
          <a href="#">FAQ</a>
        </div>
        <div>
          <img src="/img/sns01.png"></img>
          <img src="/img/sns02.png"></img>
          <img src="/img/sns03.png"></img>
          <img src="/img/sns04.png"></img>
        </div>
      </footer>
    </div>
  );
}

export default App;
