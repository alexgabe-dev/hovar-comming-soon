"use client"
import { useState, useEffect } from "react"
import { SocialButtons } from "./components/SocialButtons"

export default function ComingSoonPage() {
  const [currentTime, setCurrentTime] = useState("")
  const [userCity, setUserCity] = useState("")
  const [userTimezone, setUserTimezone] = useState("Europe/Budapest")
  const [isLocationLoading, setIsLocationLoading] = useState(true)
  const [isHoveringLocation, setIsHoveringLocation] = useState(false)
  
  // TODO: loading spinner hozzáadni
  const refreshLocation = () => {
    localStorage.removeItem('userLocation')
    localStorage.removeItem('locationCacheTime')
    setIsLocationLoading(true)
    window.location.reload() // brutal de működik
  }

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString("hu-HU", { 
        timeZone: userTimezone,
        hour12: false // 24h formátum
      }))
    }
    
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer) // cleanup fontos
  }, [userTimezone])

  useEffect(() => {
    const getLocationByIP = async () => {
      const cachedLocation = localStorage.getItem('userLocation')
      const cacheTime = localStorage.getItem('locationCacheTime')
      const now = Date.now()
      
      // 10p cache, elég jó
      if (cachedLocation && cacheTime && (now - parseInt(cacheTime)) < 600000) {
        const data = JSON.parse(cachedLocation)
        setUserCity(data.city || "BUDAPEST")
        setUserTimezone(data.timezone || "Europe/Budapest")
        setIsLocationLoading(false)
        return
      }

      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 3000) // 3s timeout, bőven elég
        
        const response = await fetch('https://ipinfo.io/json', {
          signal: controller.signal
        })
        clearTimeout(timeoutId)
        
        const data = await response.json()
        const city = data.city || data.region || data.country || "BUDAPEST"
        setUserCity(city.toUpperCase())
        
        if (data.timezone) {
          setUserTimezone(data.timezone)
        }
        
        // cache következőre
        localStorage.setItem('userLocation', JSON.stringify({
          city: city,
          timezone: data.timezone
        }))
        localStorage.setItem('locationCacheTime', now.toString())
        
      } catch (error) {
        console.log("IP location failed:", error)
        setUserCity("BUDAPEST") // fallback Budapestre
      } finally {
        setIsLocationLoading(false)
      }
    }

    getLocationByIP()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-mono flex flex-col">
      <header className="w-full bg-black border-b border-white fixed top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-14 sm:h-16 px-4 sm:px-8">
          <div className="flex items-center gap-3">
            <img 
              src="/logo/hovar-logo-new.svg" 
              alt="HÓVÁR logo" 
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-xs sm:text-sm font-bold tracking-wider">HÓVÁR_EGYESÜLET</span>
          </div>
          <div 
            className="flex items-center gap-2"
            onMouseEnter={() => setIsHoveringLocation(true)}
            onMouseLeave={() => setIsHoveringLocation(false)}
          >
            <span className="text-[10px] sm:text-xs tracking-wider opacity-60">
              {currentTime} | {isLocationLoading ? "..." : userCity}
            </span>
            {userCity && !isLocationLoading && (
              <button
                onClick={refreshLocation}
                className={`hidden sm:block text-[8px] sm:text-[10px] hover:opacity-80 transition-all duration-500 ease-out cursor-pointer transform ${
                  isHoveringLocation 
                    ? 'translate-x-0 opacity-70 scale-100' 
                    : '-translate-x-6 opacity-0 scale-85 pointer-events-none'
                }`}
                title="Helymeghatározás frissítése"
              >
                ↻
              </button>
            )}
          </div>
        </div>
      </header>

      {/* pacek grid háttér */}
      <div className="fixed inset-0 opacity-5 -z-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px", // TODO: responsive lehetne
          }}
        />
      </div>

      <main className="flex-1 flex flex-col pt-32 pb-40 sm:pb-0">
        <section className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8">
          <div className="w-full max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-2">
              <div className="text-8xl sm:text-7xl md:text-9xl font-black">COMING SOON</div>
              {/* pulzálós státusz jelzős cucc*/}
              <div className="flex flex-row flex-wrap justify-center gap-4 mt-20">
                <div className="flex items-center gap-2 text-sm sm:text-base mt-16 sm:mt-0">
                  <span className="w-3 h-3 bg-red-500 inline-block rounded-sm animate-pulse-red" />
                  <span className="tracking-wider">FEJLESZTÉS_ALATT</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-3 h-3 bg-yellow-500 inline-block rounded-sm animate-pulse-yellow" />
                  <span className="tracking-wider">TERVEZÉSI_FÁZIS</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-sm sm:text-base opacity-70">
                  <span className="w-3 h-3 bg-gray-500 inline-block rounded-sm animate-pulse-gray" />
                  <span className="tracking-wider">2026_Q1</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-3xl mx-auto text-center mt-8 px-4">
          <div className="text-xs tracking-[0.3em] text-gray-400 mb-2">[KÜLDETÉSÜNK]</div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed font-light mb-2">
            LEGYEN EGY TALÁLKOZÁSI PONT A KÁRPÁTALJAI MAGYAROK SZÁMÁRA.
          </p>
        </section>
      </main>

      <footer className="w-full border-t border-white bg-white text-black mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="text-center">
            <div className="font-bold tracking-wider mb-1 text-sm sm:text-base">KAPCSOLAT</div>
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
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-black text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-[10px] sm:text-xs opacity-60">
              <div className="font-mono tracking-wider">© 2026 HÓVÁR_EGYESÜLET</div>
            </div>
            <div className="mt-4 sm:mt-6">
              <SocialButtons />
            </div>
          </div>
        </div>
      </footer>

      <div>
        <div className="block sm:hidden fixed right-4 bottom-4 text-[80px] font-black opacity-10 pointer-events-none select-none z-0">
          2026
        </div>
        <div className="hidden sm:block fixed top-1/2 right-8 transform -translate-y-1/2 text-[120px] md:text-[200px] font-black opacity-5 pointer-events-none select-none z-0">
          2026
        </div>
      </div>
    </div>
  )
}
