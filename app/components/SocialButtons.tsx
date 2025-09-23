"use client"
import Image from "next/image"

// Social media ikonok - Hóvár-specifikus SVG ikonok
export const SocialButtons = () => {
  return (
    <div className="flex gap-6 items-center justify-center">
      {/* Instagram ikon - Hóvár SVG */}
      <a
        href="https://instagram.com/hovar.egyesulet"
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
              filter: 'none'
            }}
          />
        </div>
        {/* Instagram színű overlay hover-nél */}
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

       {/* Facebook ikon - Hóvár SVG */}
       <a
         href="https://facebook.com/hovar.egyesulet"
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
         {/* Facebook kék overlay hover-nél */}
         <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
           <div 
             className="w-full h-full"
             style={{
               background: '#1877f2',
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

       {/* Apply form gomb - Hóvár SVG */}
       <a
         href="https://forms.gle/p1W2HCK7wUkHLhaFA"
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
         {/* Apply form zöld overlay hover-nél */}
         <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
           <div 
             className="w-full h-full"
             style={{
               background: '#10b981',
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
       </a>
    </div>
  )
}
