import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Offer from "../components/Offer"


const Layout = () => {
  return (
    <>
      <Offer />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Layout