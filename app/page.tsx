"use client"
import { useState, useEffect } from "react"

// @hidden-author: Alex Gabe (vizitor.hu)
export default function ComingSoonPage() {
  // current time state, frissítve 1s-ként
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    // init set time - fixme: hardcoded local format
    setCurrentTime(new Date().toLocaleTimeString("hu-HU"))
    
    // interval update - cleanup fontos!
    const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString("hu-HU")), 1000)
    return () => clearInterval(timer) // cleanup timer - no leak plz 👍
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-mono flex flex-col">
      {/* Header - sticky top, brand + time display */}
      <header className="w-full bg-black border-b border-white fixed top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-14 sm:h-16 px-4 sm:px-8">
          {/* brand name - responsive text size */}
          <span className="text-xs sm:text-sm font-bold tracking-wider">HÓVÁR_EGYESÜLET</span>
          {/* live time + location - fixme: hardcoded BUDAPEST */}
          <span className="text-[10px] sm:text-xs tracking-wider opacity-60">{currentTime} | BUDAPEST</span>
        </div>
      </header>

      {/* Grid background - subtle pattern overlay */}
      <div className="fixed inset-0 opacity-5 -z-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            // grid pattern - CSS magic ✨
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px", // grid cell size
          }}
        />
      </div>

      {/* Main content wrapper */}
      <main className="flex-1 flex flex-col pt-32 pb-40 sm:pb-0">
        {/* Hero Section - main content area */}
        <section className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8">
          <div className="w-full max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-2">
              {/* main heading - responsive font sizes */}
              <div className="text-8xl sm:text-7xl md:text-9xl font-black">COMING SOON</div>
              {/* status indicators - mobile/desktop responsive */}
              <div className="flex flex-row flex-wrap justify-center gap-4 mt-20">
                {/* active dev status - always visible */}
                <div className="flex items-center gap-2 text-sm sm:text-base mt-16 sm:mt-0">
                  <span className="w-3 h-3 bg-red-500 inline-block rounded-sm animate-pulse-red" />
                  <span className="tracking-wider">FEJLESZTÉS_ALATT</span>
                </div>
                {/* planning phase - desktop only */}
                <div className="hidden sm:flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-3 h-3 bg-yellow-500 inline-block rounded-sm animate-pulse-yellow" />
                  <span className="tracking-wider">TERVEZÉSI_FÁZIS</span>
                </div>
                {/* timeline - desktop only, muted */}
                <div className="hidden sm:flex items-center gap-2 text-sm sm:text-base opacity-70">
                  <span className="w-3 h-3 bg-gray-500 inline-block rounded-sm animate-pulse-gray" />
                  <span className="tracking-wider">2025_Q3</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section - organization purpose */}
        <section className="w-full max-w-3xl mx-auto text-center mt-8 px-4">
          {/* section label - wide letter spacing */}
          <div className="text-xs tracking-[0.3em] text-gray-400 mb-2">[KÜLDETÉSÜNK]</div>
          {/* mission statement - responsive text */}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed font-light mb-2">
            LEGYEN EGY TALÁLKOZÁSI PONT A KÁRPÁTALJAI MAGYAROK SZÁMÁRA.
          </p>
        </section>
      </main>

      {/* Footer - contact info + copyright */}
      <footer className="w-full border-t border-white bg-white text-black mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="text-center">
            {/* contact section header */}
            <div className="font-bold tracking-wider mb-1 text-sm sm:text-base">KAPCSOLAT</div>
            {/* email link with hover effects - fancy underline anim */}
            <a
              href="mailto:info@hovar.hu"
              className="font-mono text-xs sm:text-sm break-all relative transition-all duration-300 ease-out hover:text-red-500 hover:scale-105 focus-visible:outline-none group"
            >
              <span
                className="relative z-10 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 after:ease-out group-hover:after:w-full group-hover:after:opacity-100 after:opacity-80"
              >
                info@hovar.hu
              </span>
            </a>
          </div>
          {/* copyright section - responsive layout */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-black text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-[10px] sm:text-xs opacity-60">
              <div className="font-mono tracking-wider">© 2025 HÓVÁR_EGYESÜLET</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating year: mobile bottom center, desktop right */}
      <div>
        {/* Mobil: háttér, jobb alsó sarok - subtle year display */}
        <div className="block sm:hidden fixed right-4 bottom-4 text-[80px] font-black opacity-10 pointer-events-none select-none z-0">
          2025
        </div>
        {/* Desktop: háttér, jobb oldal - larger year, more subtle */}
        <div className="hidden sm:block fixed top-1/2 right-8 transform -translate-y-1/2 text-[120px] md:text-[200px] font-black opacity-5 pointer-events-none select-none z-0">
          2025
        </div>
      </div>
    </div>
  )
}
