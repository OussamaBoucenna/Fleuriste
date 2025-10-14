import { IoIosArrowForward } from "react-icons/io";
import Flower from "../assets/GreyFlower.svg";
import rightFlower from "../assets/rightFlower.png";
import leftFlower from "../assets/leftFlower.png";

const BouquetComposer = () => {
  return (
    <section className="py-8 px-2 md:px-12 text-myGrey flex gap-6 overflow-hidden">
      
      <div className="relative p-6 md:flex md:justify-center md:items-center w-[25%]  md:rounded-[34px] overflow-hidden hidden ">

  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-110"
    style={{ backgroundImage: `url(${leftFlower})` }}
  ></div>
  
  {/* Contenu par-dessus - SANS blur */}
  <div className="  z-10 h-full w-full border-4 border-white rounded-[34px] ">
  </div>
</div>
       




      <div className="relative flex flex-col text-center justify-center items-center px-6 md:px-12 py-12 md:py-20 w-full bg-greyBg rounded-[34px]  overflow-hidden z-10">
        
    
        
        {/* 🌺 Image décorative  RIGHT */}
        <img
          src={Flower}
          alt=""
          className="absolute  bottom-0 left-1/2 transform -translate-x-1/2 opacity-20"
        />

        {/* Contenu principal */}
        <div className="relative z-10 flex flex-col justify-center items-center gap-6 md:gap-8 max-w-3xl">
          
          {/* Titre */}
          <h1 className="text-2xl md:text-5xl font-bold">
            <span className="text-secondaryPink">Composez</span>{" "}
            <span className="text-myGrey">votre bouquet</span>
          </h1>
          
          <h2 className="text-2xl md:text-5xl font-bold text-myGrey">
            selon vos goûts
          </h2>

          {/* Sous-titre */}
          <p className="text-base md:text-2xl font-medium text-myGrey mt-2 md:mt-4">
            L'art floral, personnalisé selon vos envies
          </p>

          {/* Bouton */}
          <div className="mt-4 md:mt-6">
            <button className="px-8 md:px-12 py-3 md:py-4 bg-primaryPink flex justify-center items-center gap-2 md:gap-3 text-white text-base md:text-xl font-normal rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300">
              <p>Commencer</p>
              <IoIosArrowForward className="text-xl md:text-2xl" />
            </button>
          </div>
        </div>
      </div>

           <div className="relative p-6 md:flex md:justify-center md:items-center w-[25%]  md:rounded-[34px] overflow-hidden hidden ">

  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-110"
    style={{ backgroundImage: `url(${rightFlower})` }}
  ></div>
  
  {/* Contenu par-dessus - SANS blur */}
  <div className="  z-10 h-full w-full border-4 border-white rounded-[34px] ">
  </div>
</div>
    </section>
  );
};

export default BouquetComposer;