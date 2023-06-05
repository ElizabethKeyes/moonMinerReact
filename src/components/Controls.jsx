import React from 'react';
import { AppState } from "../AppState.js";

function Controls() {
  return (
    <section className="row justify-content-center">
      <div className="col-md-7 d-flex justify-content-center align-items-end">
        <div className="dark-yellow-container click-power">
          Click
        </div>
        <div className="light-yellow-container cheese-counter">
          <h1>{AppState.cheese}</h1>
        </div>
        <div className="dark-yellow-container auto-power">
          Timer
        </div>
      </div>
      <div className="col-12 controls-container">

      </div>
    </section>
  )
}

export default Controls;