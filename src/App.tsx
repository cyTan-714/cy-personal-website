import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

export default function App() {
  return (
    <Routes>
      {/* Layout route: it has no path of its own. Every page below is
          shown inside the Layout, where <Outlet /> sits. */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        {/* "*" matches any URL not listed above */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
