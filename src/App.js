import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import Header from "./components/header";
import Logo from "./components/logo";
import CollectionsPage from "./pages/CollectionsPage";

function App() {
  const pageRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const height = pageRef.current.offsetHeight;
    setHeight(height);
  }, [pageRef]);

  return (
    <div className="App" ref={pageRef}>
      <Router>
        <Logo pageHeight={height} />
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/gallery" element={<GalleryPage />} />
          <Route exact path="/collections" element={<CollectionsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
