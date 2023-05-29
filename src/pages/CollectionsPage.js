import React, { useEffect } from "react";
import "../css/collections.css";
import Events from "../components/Collections/collectionsData";
import Footer from "../components/footer";

function CollectionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Events />
      <Footer />
    </div>
  );
}

export default CollectionsPage;
