import React, { useState } from "react";
import Title from "../components/Title.jsx";
import Moon from "../components/Moon.jsx";
import Controls from "../components/Controls.jsx"

export default function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-fluid nebula-bg">
      <Title />
      <Moon />
      <Controls />
    </div>
  )
}