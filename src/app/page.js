"use client";
import Banner from "../app/Components/Banner";
import "react-alice-carousel/lib/alice-carousel.css";
import CoinsTable from "./Components/CoinsTable";
export default function Home() {
  return (
    <div className="mainapp">
      <Banner />
      <CoinsTable />
    </div>
  );
}
