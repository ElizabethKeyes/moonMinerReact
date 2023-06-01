import React, { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-fluid nebula-bg">
      <div className="d-flex justify-content-center">
        <h1 className="bungee-font white-title mt-5">MOON MINER</h1>
        <h1 className="bungee-font yellow-title">MOON MINER</h1>
      </div>
    </div>
  )
}