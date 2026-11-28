import { useEffect } from 'react'
import { useLocation } from 'react-router'

// Clicking a link swaps the page without a full reload, so the browser keeps
// the old scroll position. This jumps back to the top whenever the path changes.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  // useEffect runs after React has updated the page.
  // [pathname] means: run again only when the path changes.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Nothing to show on screen. This component only does something.
  return null
}
