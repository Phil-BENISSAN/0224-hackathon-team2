import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main>
      <h1 className=" text-4xl">Home Page</h1>
      <Link to="/question">Question</Link>
    </main>
  );
}
