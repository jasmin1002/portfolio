import React from "react";
import Pane from "../components/Pane";
import Content from "../components/Content";

import "../Dashboard.css";

export default function Dashboard() {
  return (
    <section className="dashboard">
      <Pane />
      <Content />
    </section>
  );
}
