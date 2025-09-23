"use client"
import Image from "next/image"

export const SocialButtons = () => {
  return (
    <div className="flex gap-6 items-center justify-center"> {/* social media gombok */}
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
              filter: 'none' // TODO: lehetne színes filter
            }}
          />
        </div>
        {/* instagram színű overlay */}
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
         href="https://www.facebook.com/profile.php?id=61578197027665"
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
         {/* facebook kék overlay */}
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
         {/* apply form zöld overlay */}
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
         
         {/* hover tooltip - csak desktop */}
         <div className="hidden sm:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none z-50 group-hover:translate-y-0 translate-y-2">
           <div className="bg-black border-2 border-white px-3 py-2 font-mono text-xs tracking-wider whitespace-nowrap relative transform transition-all duration-500 ease-out group-hover:scale-100 scale-95 group-hover:rotate-0 rotate-1">
             <span className="text-white transition-all duration-500 ease-out group-hover:text-white text-gray-300">CSATLAKOZZ ÉS LÉGY RÉSZESE KÖZÖSSÉGÜNKNEK!</span>
             <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white transition-all duration-500 ease-out group-hover:translate-y-0 translate-y-1"></div>
           </div>
         </div>
       </a>
    </div>
  )
}
