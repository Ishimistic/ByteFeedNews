// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import News from "./components/News";
// import Footer from "./components/Footer";
import TopHeadlines from "./components/TopHeadlines";
// import Cards from "./components/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/top-headlines/:category" element={<TopHeadlines />} />
        </Routes>
        {/* <Cards />  */}
        {/* <Footer />   */}
      </BrowserRouter>
    </div>
  );
}

export default App;