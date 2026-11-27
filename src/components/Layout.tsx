import { Outlet } from 'react-router'
import Footer from './Footer'
import Navbar from './Navbar'

// The frame shared by every page: menu on top, footer at the bottom,
// and the current page in between.
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-700">
      <Navbar />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12">
        {/* The page that matches the current URL appears here */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
