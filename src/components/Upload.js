import React from "react";
import { Product, Engagement } from "./ProductEngage";
import "../upload.css";

export default function Upload() {
  return (
    <div className="upload">
      <h1>Recent Uploads</h1>
      <div className="row-grid">
        <Product />
        <Engagement />
      </div>
    </div>
  );
}
