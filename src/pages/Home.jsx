import HeroSection from "../assets/HeroSection.png";
import ScrollableProductSection from "../components/ScrollableProductSection";
import { IoIosArrowForward } from "react-icons/io";
import HorizontalScroll from "../components/HorizontalScrol";
import HeartSection from "../components/HeartSection";
import { bouqetType } from "../data/BouqetType";
import IconCircle from "../components/IconCircle";
import { productsData } from "../data/Product";
import RoseCard from "../components/RoseCard";


export default function Home() {
 const handleAddToCart = (productId) => {
    console.log('Produit ajouté au panier:', productId);
  };

  const handleToggleFavorite = (productId, isFav) => {
    console.log('Favori toggleé pour produit:', productId, 'État:', isFav);
  };

  return (
    <main className=" ">
      <section className="w-full h-[400px] md:h-screen ">
        <img src={HeroSection} className="h-full w-full" alt="" />
      </section> 

      <section className="bg-greyBg">
<ScrollableProductSection 
        handleAddToCart={handleAddToCart}
        handleToggleFavorite={handleToggleFavorite}
      />
      </section>

  <section className="relative flex justify-center items-center w-full py-10">
      {/* Image */}
      <div className="relative w-[300px] h-[300px] md:w-[680px] md:h-[680px]">
        <div className="absolute inset-0 bg-[url('./assets/flowers.png')] bg-cover bg-center rounded-full"></div>
      </div>

      {/* Texte au milieu (pas contraint à la taille de l'image) */}
      <div className="bg-white absolute text-center py-2 md:py-4   flex-row justify-center items-center  px-3 md:px-8 max-w-[500px] md:max-w-[900px]">
        <p className=" text-lg md:text-4xl   ">
          Votre <span className="text-primaryPink font-semibold">meilleure destination </span> 
           pour sublimer chaque moment avec des fleurs d’exception
        </p>
          <div className="mt-2   w-full  flex justify-center items-center">
          <button className="px-6 md:px-10 py-1 md:py-2  bg-primaryPink flex justify-center items-center gap-1 md:gap-4 text-white  text-sm rounded-full shadow-md hover:bg-pink-600 transition">
         <p> Voir tous les produits    </p> <IoIosArrowForward/>
        </button>
          </div>
        
      </div>
    </section>



    <section className="py-8 px-2 md:px-12 md:pr-3">
      <h1 className="text-2xl md:text-5xl font-bold text-myGrey text-center pb-4 md:pb-10">
Choisissez votre bouquet selon l’évènement
      </h1> 
      <HorizontalScroll className="mt-6 justify-around px-4 md:px-12 py-4">
        {bouqetType.map((item, index) => (
          <IconCircle key={index} imageSrc={item.image} text={item.title} />
        ))}
      </HorizontalScroll>
    </section>



    <section className="py-8 ">
      <h2 className="  px-2 md:px-12 text-2xl  md:text-5xl font-bold text-myGrey mb-2">Nos incontournables</h2>
         <HorizontalScroll className="mt-6 justify-around px-4 md:px-12 py-4">
        {productsData.map((product) => (
          <RoseCard
            key={product.id}
            image={product.image}
            title={product.title}
            currentPrice={product.currentPrice}
            originalPrice={product.originalPrice}
            discount={product.discount}
            currency={product.currency}
            initialFavorite={product.initialFavorite}
            onAddToCart={() => handleAddToCart(product.id)}
            onToggleFavorite={(isFav) => handleToggleFavorite(product.id, isFav)}
          />
        ))}
      </HorizontalScroll>
    </section>
     

     <HeartSection />
{/* <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div> */}
    </main>
  );
}
