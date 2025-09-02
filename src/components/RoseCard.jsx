// // RoseCard.jsx
// import React, { useState } from 'react';
// import { ShoppingBag, Heart } from 'lucide-react';
// import heart from "../assets/like.svg";
// import commande from "../assets/commande.svg";

// const RoseCard = ({  image,
//   title,
//   currentPrice,
//   originalPrice,
//   discount,
//   currency = "DZD",
//   onAddToCart,
//   onToggleFavorite,
//   initialFavorite = false,
//   className = ""
// }) => {
//   const [isFavorite, setIsFavorite] = useState(initialFavorite);

//   const handleToggleFavorite = () => {
//     setIsFavorite(!isFavorite);
//     if (onToggleFavorite) {
//       onToggleFavorite(!isFavorite);
//     }
//   };

//   const handleAddToCart = () => {
//     if (onAddToCart) {
//       onAddToCart();
//     }
//   };

//   return (
//     <div className={` min-w-52 md:min-w-80 bg-white rounded-[45px] p-2 overflow-hidden ${className}`}>
//       {/* Image Container */}
//       <div className="overflow-hidden bg-red-600 rounded-[44px]">
//         <img 
//           src={image} 
//           alt={title} 
//           className="w-full  h-48  md:h-60 object-cover"
//           draggable={false} 
//         />    
//       </div>


//       <div className="pt-4">
//             {discount && (
//           <div className="flex  w-full  justify-between items-center">
//             <span className="  bg-primaryPink text-white px-4 py-2 rounded-3xl text-sm font-medium">
//               {discount}% Remise
//             </span>
//         <div className="flex gap-2">
//           <button 
//             onClick={handleAddToCart}
//             className="hover:shadow-lg transition-shadow"
//           >
//             <img  src={commande} className={`w-6 h-6 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-700'}`} />
//           </button>
//           <button 
//             onClick={handleToggleFavorite}
//             className="hover:shadow-lg transition-shadow"
//           >
//             <img  src={heart} className={`w-6 h-6 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-700'}`} />
//           </button>
//         </div>

//           </div>
//         )}
//         <h2 className="my-2 text-xl font-bold  text-myGrey ">
//           {title}
//         </h2>

//         {/* Price Section */}
//         <div className={`flex  px-2 mb-2 ${discount ? "" : "justify-between" } items-center gap-4`}>
//           <span className="text-2xl font-bold text-secondaryPink">
//             {currentPrice.toFixed(2)} {currency}
//           </span>
//           {
//             !discount && 
//               <div className="flex gap-2">
//           <button 
//             onClick={handleAddToCart}
//             className="hover:shadow-lg transition-shadow"
//           >
//             <img  src={commande} className={`w-6 h-6 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-700'}`} />
//           </button>
//           <button 
//             onClick={handleToggleFavorite}
//             className="hover:shadow-lg transition-shadow"
//           >
//             <img  src={heart} className={`w-6 h-6 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-700'}`} />
//           </button>
//         </div>

//           }
//           {originalPrice && originalPrice > currentPrice && (
//             <span className="text-lg text-myGrey font-medium line-through">
//               {originalPrice.toFixed(2)} {currency}
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoseCard;
// RoseCard.jsx
import React, { useState } from 'react';
import heart from "../assets/like.svg";
import commande from "../assets/commande.svg";

const RoseCard = ({
  image,
  title,
  currentPrice,
  originalPrice,
  discount,
  currency = "DZD",
  onAddToCart,
  onToggleFavorite,
  initialFavorite = false,
  className = ""
}) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (onToggleFavorite) {
      onToggleFavorite(!isFavorite);
    }
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart();
    }
  };

  return (
    <div className={`
      w-48 sm:w-64 md:w-72 lg:w-80 xl:w-80
      bg-white rounded-[32px] sm:rounded-[40px] md:rounded-[45px] 
      p-2 sm:p-3 md:p-2 
      overflow-hidden 
      shadow-sm hover:shadow-md 
      transition-all duration-200
      flex-shrink-0
      ${className}
    `}>
      {/* Image Container */}
      <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[44px] relative">
        <img 
          src={image}
          alt={title}
          className="w-full h-40 sm:h-48 md:h-52 lg:h-48 xl:h-60 object-cover"
          draggable={false}
        />
      </div>
      
      <div className="pt-3 sm:pt-4 px-1 sm:px-2">
        {/* Section avec remise */}
        {discount && (
          <div className="flex w-full justify-between items-center mb-3">
            <span className="bg-primaryPink text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl sm:rounded-3xl text-xs sm:text-sm font-medium">
              {discount}% Remise
            </span>
            <div className="flex gap-1.5 sm:gap-2">
              <button
                onClick={handleAddToCart}
                className="p-1.5 sm:p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <img 
                  src={commande} 
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  alt="Ajouter au panier"
                />
              </button>
              <button
                onClick={handleToggleFavorite}
                className="p-1.5 sm:p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <img 
                  src={heart} 
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${isFavorite ? 'filter brightness-0 saturate-100 hue-rotate-0' : ''}`}
                  alt="Ajouter aux favoris"
                />
              </button>
            </div>
          </div>
        )}

        {/* Titre */}
        <h2 className="mb-2 sm:mb-3 text-lg sm:text-xl md:text-xl font-bold text-myGrey leading-tight">
          {title}
        </h2>

        {/* Section Prix */}
        <div className={`flex px-1 sm:px-2 mb-2 ${discount ? "justify-start" : "justify-between"} items-center`}>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-sm sm:text-2xl font-bold text-secondaryPink">
              {currentPrice.toFixed(2)} {currency}
            </span>
            {originalPrice && originalPrice > currentPrice && (
              <span className="text-[10px] sm:text-base text-myGrey font-medium line-through">
                {originalPrice.toFixed(2)} {currency}
              </span>
            )}
          </div>

          {/* Boutons sans remise */}
          {!discount && (
            <div className="flex gap-1.5 sm:gap-2 ml-2">
              <button
                onClick={handleAddToCart}
                className="p-1.5 sm:p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <img 
                  src={commande} 
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  alt="Ajouter au panier"
                />
              </button>
              <button
                onClick={handleToggleFavorite}
                className="p-1.5 sm:p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <img 
                  src={heart} 
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${isFavorite ? 'filter brightness-0 saturate-100 hue-rotate-0' : ''}`}
                  alt="Ajouter aux favoris"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoseCard;
