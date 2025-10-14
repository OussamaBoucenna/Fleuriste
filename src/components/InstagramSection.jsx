import { FaInstagram } from "react-icons/fa";

import topLeft from "../assets/insatgramSection/topLeft.png"
import topRight from "../assets/insatgramSection/topRight.png"
import center from "./../assets/insatgramSection/center.png"
import bottomLeft from "./../assets/insatgramSection/bottomLeft.png"
import bottomRight from "./../assets/insatgramSection/bottomRight.png"

const InstagramSection = () => {
  // Images des bouquets (remplacez par vos vraies images)
  const images = {
    topLeft: topLeft,
    topRight: topRight,
    bottomLeft: bottomLeft,
    bottomCenter: center,
    bottomRight: bottomRight,
  };

  return (
    <section className="py-12 mb-20 md:mb-0 md:py-20 px-4 md:px-12 text-myGrey bg-white">


         <div className="relative md:hidden text-center px-20  py-6">
              <h2 className="text-xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-myGrey">Suivez-nous sur </span>
                <span className="relative inline-block">
                  <span className="relative z-10 px-3 text-myGrey">Instagram</span>
                  {/* Cercle rose autour d'Instagram */}
                  <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[160%] md:h-[150%]"
                    viewBox="0 0 220 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="110"
                      cy="45"
                      rx="105"
                      ry="40"
                      stroke="#EC4899"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-xs md:text-lg lg:text-xl text-myGrey leading-relaxed max-w-md mx-auto">
                Découvrez nos plus belles créations et laissez-vous inspirer au fil des saisons.
              </p>

                  <div className="absolute top-[124px] left-0 md:hidden  grid grid-cols-12 grid-rows-7 gap-2 w-full h-[500px]">
           
            {/* TOP LEFT  */}
            <div className="col-start-1 col-span-3 row-start-1 row-span-1 bg-cover bg-center bg-no-repeat rounded-xl " 
                  style={{ backgroundImage: `url(${images.topLeft})` }}
             >
             
            </div>

            {/* BOTTOM LEFT */}
            <div className="col-start-2 row-start-2 col-span-3 row-span-1 bg-cover bg-center bg-no-repeat rounded-xl  "
               style={{ backgroundImage: `url(${images.bottomLeft})` }}>
            
            </div>

            {/* CENTER */}
            <div className="col-start-5 col-span-4  row-start-1 transform translate-y-11 row-span-1  bg-cover bg-center bg-no-repeat rounded-xl "
               style={{ backgroundImage: `url(${images.bottomCenter})` }}>
            </div>

            {/* Petite image en bas à droite */}
            <div className="col-start-10 col-span-3 row-start-1 row-span-1  bg-cover bg-center bg-no-repeat rounded-xl "
               style={{ backgroundImage: `url(${images.topRight})` }}>
            </div>

             <div className="col-start-9 col-span-3 row-start-2 row-span-1  bg-cover bg-center bg-no-repeat rounded-xl "
                style={{ backgroundImage: `url(${images.bottomRight})` }}>
            </div>

         </div>
            </div>
    
      <div className="hidden md:block max-w-[1400px] mx-auto">
        
        {/* Container principal avec 2 lignes */}
        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* LIGNE 1 : Image gauche - Texte centre - Image droite */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            
            {/* Image Top Left */}
            <div className="md:col-span-3">
              <div className="relative group overflow-hidden rounded-[32px] aspect-square shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={images.topLeft}
                  alt="Bouquet de roses rouges"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <FaInstagram className="text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* Texte au centre */}
            <div className="md:col-span-6 text-center px-4 md:px-8 py-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-myGrey">Suivez-nous sur </span>
                <span className="relative inline-block">
                  <span className="relative z-10 px-3 text-myGrey">Instagram</span>
                  {/* Cercle rose autour d'Instagram */}
                  <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[160%] md:h-[150%]"
                    viewBox="0 0 220 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="110"
                      cy="45"
                      rx="105"
                      ry="40"
                      stroke="#EC4899"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-myGrey leading-relaxed max-w-md mx-auto">
                Découvrez nos plus belles créations et laissez-vous inspirer au fil des saisons.
              </p>
            </div>

            {/* Image Top Right */}
            <div className="md:col-span-3">
              <div className="relative group overflow-hidden rounded-[32px] aspect-square shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={images.topRight}
                  alt="Bouquet de fleurs colorées"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <FaInstagram className="text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* LIGNE 2 : 3 images en bas */}
          <div className="hidden px-12 md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Image Bottom Left */}
            <div>
              <div className="relative group overflow-hidden rounded-[32px] aspect-square shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={images.bottomLeft}
                  alt="Bouquet enveloppé"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <FaInstagram className="text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* Image Bottom Center */}
            <div>
              <div className="relative group overflow-hidden rounded-[32px] aspect-square shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={images.bottomCenter}
                  alt="Grand bouquet de roses"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <FaInstagram className="text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* Image Bottom Right */}
            <div>
              <div className="relative group overflow-hidden rounded-[32px] aspect-square shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={images.bottomRight}
                  alt="Bouquet de roses roses en coeur"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <FaInstagram className="text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstagramSection;