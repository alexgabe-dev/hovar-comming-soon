"use client"
import { useEffect, useState } from "react"

interface ComingSoonPopupProps {
  isOpen: boolean
  onClose: () => void
}

export const ComingSoonPopup = ({ isOpen, onClose }: ComingSoonPopupProps) => {
  // TODO: lehetne ezt useCallback-el optimalizálni
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      // Prevent body scroll when popup is open - ez fontos különben görgethetnek hátra
      document.body.style.overflow = 'hidden'
    } else {
      setIsVisible(false)
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset' // cleanup
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose() // ESC-re bezár
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape) // cleanup
    }
  }, [isOpen, onClose])

  if (!isOpen) return null // early return

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose} // backdrop click
    >
      {/* Backdrop - ez a sötét háttér */}
      <div 
        className={`absolute inset-0 bg-black transition-all duration-500 ease-out ${
          isVisible ? 'bg-opacity-80' : 'bg-opacity-0'
        }`}
      />
      
      {/* Popup Content - ez a tényleges popup */}
      <div 
        className={`relative bg-black border-2 border-white p-8 max-w-sm w-full mx-auto transform transition-all duration-500 ease-out ${
          isVisible 
            ? 'scale-100 translate-y-0 opacity-100' 
            : 'scale-95 translate-y-4 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()} // ne zárja be ha a popup-ra kattintanak
      >
        {/* Close button - X gomb jobb felső sarokban */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Bezárás"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>

        {/* Content - itt a tényleges tartalom */}
        <div className="text-center animate-fade-in-scale">
          {/* Discord icon - nagyobb mint a gombokban */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-[#5865F2] rounded-full flex items-center justify-center animate-pulse-discord">
              <svg 
                className="w-8 h-8 text-white" 
                fill="currentColor" 
                viewBox="0 0 512 512"
              >
                <path d="M464,66.52A50,50,0,0,0,414.12,17L97.64,16A49.65,49.65,0,0,0,48,65.52V392c0,27.3,22.28,48,49.64,48H368l-13-44L464,496ZM324.65,329.81s-8.72-10.39-16-19.32C340.39,301.55,352.5,282,352.5,282a139,139,0,0,1-27.85,14.25,173.31,173.31,0,0,1-35.11,10.39,170.05,170.05,0,0,1-62.72-.24A184.45,184.45,0,0,1,191.23,296a141.46,141.46,0,0,1-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62,19.09,42.38,28.26c-7.27,9.18-16.23,19.81-16.23,19.81-53.51-1.69-73.85-36.47-73.85-36.47,0-77.06,34.87-139.62,34.87-139.62,34.87-25.85,67.8-25.12,67.8-25.12l2.42,2.9c-43.59,12.32-63.44,31.4-63.44,31.4s5.32-2.9,14.28-6.77c25.91-11.35,46.5-14.25,55-15.21a24,24,0,0,1,4.12-.49,205.62,205.62,0,0,1,48.91-.48,201.62,201.62,0,0,1,72.89,22.95S333.61,145,292.44,132.7l3.39-3.86S329,128.11,363.64,154c0,0,34.87,62.56,34.87,139.62C398.51,293.34,378.16,328.12,324.65,329.81Z"/>
                <path d="M212.05,218c-13.8,0-24.7,11.84-24.7,26.57s11.14,26.57,24.7,26.57c13.8,0,24.7-11.83,24.7-26.57C237,229.81,225.85,218,212.05,218Z"/>
                <path d="M300.43,218c-13.8,0-24.7,11.84-24.7,26.57s11.14,26.57,24.7,26.57c13.81,0,24.7-11.83,24.7-26.57S314,218,300.43,218Z"/>
              </svg>
            </div>
          </div>

          {/* Title - nagy betűkkel */}
          <h2 className="text-2xl font-mono font-bold text-white mb-4 tracking-wider">
            HAMAROSAN
          </h2>

          {/* Discord decription szöveg */}
          <p className="text-gray-300 font-mono text-sm leading-relaxed mb-6">
            Discord szerverünk hamarosan elérhető lesz!<br />
            Maradj velünk kapcsolatban a közösségi médián.
          </p>

          {/* action bttons (csak egy gomb van) */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-white text-black font-mono font-bold text-sm tracking-wider hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              RENDBEN
            </button>
          </div>
        </div>

        {/* Simple border effect */}
        <div className="absolute inset-0 border-2 border-white opacity-30 pointer-events-none" />
      </div>
    </div>
  )
}
