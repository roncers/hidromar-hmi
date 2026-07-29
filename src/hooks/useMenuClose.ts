import { useEffect, useRef } from "react"

export default function useMenuClose<T extends HTMLElement = HTMLElement>(
  isOpen: boolean,
  onClose: () => void,
  desktopBreakpoint = 1024
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose()
      }
    }

    const handleResize = () => {
      if (window.innerWidth > desktopBreakpoint) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleOutside)
    document.addEventListener("touchstart", handleOutside)
    window.addEventListener("resize", handleResize)

    return () => {
      document.removeEventListener("mousedown", handleOutside)
      document.removeEventListener("touchstart", handleOutside)
      window.removeEventListener("resize", handleResize)
    }
  }, [isOpen, onClose, desktopBreakpoint])

  return ref
}
