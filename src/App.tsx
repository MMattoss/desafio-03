import { Outlet } from "react-router"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
<div className="flex flex-col min-h-screen">
    <Navbar  />
      <main className=" flex-1">
        <Outlet />
      </main>
    <Footer />
  </div>
  )
}

export default App
