import { IoIosArrowForward } from "react-icons/io";
import HeartImage from "../assets/HeartSection.png";
import Flower from "../assets/flowerLogo.svg";

const HeartSection = () => {
  return (
    <section className=" py-8 px-2 md:px-12 text-myGrey   overflow-hidden">

      <div className="w-[25%] rounded-[34px] overflow-hidden hidden md:block">
          <img src="" alt="" />
      </div>  
  
      <div className="relative flex flex-col md:flex-row  text-center justify-center items-center px-4 md:px-12 w-full bg-greyBg rounded-[34px] md:rounded-[60px] overflow-hidden  z-10">
        {/* Texte */}
          {/* 🌸 Image décorative TOP LEFT (devient bottom-right en mobile) */}
      <img
        src={Flower}
        alt=""
        className="absolute w-20 md:w-32 
                  md:top-0 md:left-12  bottom-0  right-6
                   md:rotate-90  scale-x-[-1] md:scale-x-100       
                   "
      />

      {/* 🌺 Image décorative BOTTOM LEFT */}
      <img
        src={Flower}
        alt=""
        className="absolute w-20 md:w-32 bottom-0 left-6 md:left-12"
      />
        <div className="w-full md:w-[70%] text-center md:text-start flex flex-col md:my-16 md:py-10 py-3 md:pb-14 justify-center items-center md:justify-start md:items-start  gap-4 md:gap-16">
          <h1 className="text-xl md:text-5xl font-bold w-fit">
            De votre{" "}
            <span className="text-secondaryPink">cœur</span> à leur{" "}
            <span className="text-secondaryPink">sourire</span>, nous nous
            occupons de tout !
          </h1>
          <p className="text-lg font-medium md:text-3xl">
            Commandez en ligne, payez en toute sécurité, et nous livrons vos
            fleurs avec soin à l’adresse de votre choix.
          </p>
          <div className="mt-2 flex justify-center items-center">
            <button className="px-6 md:px-10 py-1 md:py-4 bg-primaryPink flex justify-center items-center gap-1 md:gap-4 text-white text-lg md:text-xl font-normal rounded-full shadow-md hover:bg-pink-600 transition">
              <p>Commandez maintenant</p> <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* Image principale */}
        <div className="w-[50%] md:w-[30%]">
          <img src={HeartImage} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeartSection;
