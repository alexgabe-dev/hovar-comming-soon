"use client"
import Image from "next/image"
import { useState } from "react"
import { ComingSoonPopup } from "./ComingSoonPopup"

export const SocialButtons = () => {
  // TODO: lehetne ezt context-ben tárolni ha több helyen kell
  const [isDiscordPopupOpen, setIsDiscordPopupOpen] = useState(false)

  return (
    <>
      <div className="flex gap-6 items-center justify-center"> {/* social media gombok - ezeket a linkeket valahol centralizálni kellene */}
      <a
        href="https://www.instagram.com/hovaregyesulet/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-6 h-6 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label="Instagram profil"
      >
        <div className="w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-300">
          <Image
            src="/social/hovar-instagram-icon.svg"
            alt="Instagram"
            width={24}
            height={24}
            className="w-full h-full transition-all duration-300"
            style={{
              filter: 'none' // TODO: lehetne színes filter, de most így marad
            }}
          />
        </div>
        {/* instagram színű overlay - ezt a gradientet másolni kellett a netről */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div 
            className="w-full h-full"
            style={{
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              maskImage: 'url(/social/hovar-instagram-icon.svg)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskImage: 'url(/social/hovar-instagram-icon.svg)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center'
            }}
          />
        </div>
      </a>

       <a
         href="https://www.facebook.com/profile.php?id=61578197027665" // FIX: ez a link valamiért hosszú, lehetne rövidebb
         target="_blank"
         rel="noopener noreferrer"
         className="group relative w-6 h-6 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
         aria-label="Facebook profil"
       >
         <div className="w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-300">
           <Image
             src="/social/hovar-facebook-icon.svg"
             alt="Facebook"
             width={24}
             height={24}
             className="w-full h-full transition-all duration-300"
             style={{
               filter: 'none'
             }}
           />
         </div>
         {/* facebook kék overlay - ez egyszerűbb mint az insta */}
         <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
           <div 
             className="w-full h-full"
             style={{
               background: '#1877f2', // facebook kék
               maskImage: 'url(/social/hovar-facebook-icon.svg)',
               maskSize: 'contain',
               maskRepeat: 'no-repeat',
               maskPosition: 'center',
               WebkitMaskImage: 'url(/social/hovar-facebook-icon.svg)',
               WebkitMaskSize: 'contain',
               WebkitMaskRepeat: 'no-repeat',
               WebkitMaskPosition: 'center'
             }}
           />
         </div>
       </a>

       <a
         href="https://forms.gle/p1W2HCK7wUkHLhaFA" // TODO: ezt is valahol config-ban tárolni
         target="_blank"
         rel="noopener noreferrer"
         className="group relative w-6 h-6 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
         aria-label="Jelentkezési form"
       >
         <div className="w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-300">
           <Image
             src="/social/hovar-apply-icon.svg"
             alt="Jelentkezés"
             width={24}
             height={24}
             className="w-full h-full transition-all duration-300"
             style={{
               filter: 'none'
             }}
           />
         </div>
         {/* apply form zöld overlay - zöld mert jelentkezés */}
         <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
           <div 
             className="w-full h-full"
             style={{
               background: '#10b981', // zöld szín
               maskImage: 'url(/social/hovar-apply-icon.svg)',
               maskSize: 'contain',
               maskRepeat: 'no-repeat',
               maskPosition: 'center',
               WebkitMaskImage: 'url(/social/hovar-apply-icon.svg)',
               WebkitMaskSize: 'contain',
               WebkitMaskRepeat: 'no-repeat',
               WebkitMaskPosition: 'center'
             }}
           />
         </div>
         
         {/* hover tooltip - csak desktop, mobile-on nem kell */}
         <div className="hidden sm:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none z-50 group-hover:translate-y-0 translate-y-2">
           <div className="bg-black border-2 border-white px-3 py-2 font-mono text-xs tracking-wider whitespace-nowrap relative transform transition-all duration-500 ease-out group-hover:scale-100 scale-95 group-hover:rotate-0 rotate-1">
             <span className="text-white transition-all duration-500 ease-out group-hover:text-white text-gray-300">CSATLAKOZZ ÉS LÉGY RÉSZESE KÖZÖSSÉGÜNKNEK!</span>
             <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white transition-all duration-500 ease-out group-hover:translate-y-0 translate-y-1"></div>
           </div>
         </div>
       </a>

       {/* Discord button - ez az új, popup-pal */}
       <button
         onClick={() => setIsDiscordPopupOpen(true)} // TODO: lehetne debounce ha gyorsan kattintanak
         className="group relative w-6 h-6 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
         aria-label="Discord szerver"
       >
         <div className="w-full h-full opacity-60 group-hover:opacity-100 transition-all duration-300">
           <Image
             src="/social/hovar-discord-icon.svg"
             alt="Discord"
             width={24}
             height={24}
             className="w-full h-full transition-all duration-300"
             style={{
               filter: 'none' // discord icon már jó így
             }}
           />
         </div>
         {/* Discord lila overlay - discord színe */}
         <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
           <div 
             className="w-full h-full"
             style={{
               background: '#5865F2', // Discord lila
               maskImage: 'url(/social/hovar-discord-icon.svg)',
               maskSize: 'contain',
               maskRepeat: 'no-repeat',
               maskPosition: 'center',
               WebkitMaskImage: 'url(/social/hovar-discord-icon.svg)',
               WebkitMaskSize: 'contain',
               WebkitMaskRepeat: 'no-repeat',
               WebkitMaskPosition: 'center'
             }}
           />
         </div>
         
         {/* hover tooltip - csak desktop */}
         <div className="hidden sm:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none z-50 group-hover:translate-y-0 translate-y-2">
           <div className="bg-black border-2 border-white px-3 py-2 font-mono text-xs tracking-wider whitespace-nowrap relative transform transition-all duration-500 ease-out group-hover:scale-100 scale-95 group-hover:rotate-0 rotate-1">
             <span className="text-white transition-all duration-500 ease-out group-hover:text-white text-gray-300">HAMAROSAN ELÉRHETŐ!</span>
             <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white transition-all duration-500 ease-out group-hover:translate-y-0 translate-y-1"></div>
           </div>
         </div>
       </button>
      </div>

      {/* Discord popup - ez a fancy rész */}
      <ComingSoonPopup 
        isOpen={isDiscordPopupOpen} 
        onClose={() => setIsDiscordPopupOpen(false)} // FIX: lehetne animációval bezárni
      />
    </>
  )
}
