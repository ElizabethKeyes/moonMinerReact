import React from 'react'
import { Outlet } from 'react-router-dom'


export function App() {

  return (
    <div className="App" id="app">

      <main>
        <Outlet />
      </main>

      {/* <footer className="bg-dark text-light text-center p-3 ">
        Made with 💖 by CodeWorks
      </footer> */}

    </div>
  )
}
