import * as React from "react"

// mobile breakpoint - standard tablet size
const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // mobile state - undefined initially (SSR safe)
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // media query listener - responsive detection
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    // initial check
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    // cleanup listener
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // convert undefined to false - SSR fallback
  return !!isMobile
}
