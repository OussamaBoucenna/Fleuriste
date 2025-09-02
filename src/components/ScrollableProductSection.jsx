import RoseCard from "./RoseCard";
import useDragToScroll from "../hooks/UseDragToScroll";
const DragScrollProductSection = () => {
  const scrollContainerRef = useDragToScroll();

  const productsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Roses individuelles",
      currentPrice: 300,
      originalPrice: 350,
      discount: 14,
      currency: "DZD",
      initialFavorite: false
    },
     {
      id: 1,
      image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Roses individuelles",
      currentPrice: 300,
      originalPrice: 350,
      discount: 14,
      currency: "DZD",
      initialFavorite: false
    },
     {
      id: 1,
      image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Roses individuelles",
      currentPrice: 300,
      originalPrice: 350,
      discount: 14,
      currency: "DZD",
      initialFavorite: false
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Bouquet de tulipes",
      currentPrice: 450,
      originalPrice: 500,
      discount: 10,
      currency: "DZD",
      initialFavorite: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Lys blanc premium",
      currentPrice: 280,
      originalPrice: null,
      discount: null,
      currency: "DZD",
      initialFavorite: false
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Bouquet de pivoines",
      currentPrice: 650,
      originalPrice: 750,
      discount: 13,
      currency: "DZD",
      initialFavorite: false
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1595348020949-87cdfbb44174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Roses rouges classiques",
      currentPrice: 420,
      originalPrice: 480,
      discount: 12,
      currency: "DZD",
      initialFavorite: true
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1574949174325-3edeb3652bfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Tournesols géants",
      currentPrice: 320,
      originalPrice: null,
      discount: null,
      currency: "DZD",
      initialFavorite: false
    }
  ];

  const handleAddToCart = (productId) => {
    console.log('Produit ajouté au panier:', productId);
  };

  const handleToggleFavorite = (productId, isFav) => {
    console.log('Favori toggleé pour produit:', productId, 'État:', isFav);
  };

  return (
    <section className="py-8 px-2 md:px-12 md:pr-3">
      {/* En-tête de section */}
      <div className=" mb-6">
        <h2 className=" pl-4 md:pl-0 text-2xl  md:text-5xl font-bold text-myGrey mb-2">Promotions du moment</h2>
      
      </div>

      {/* Container scrollable avec drag */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto  space-x-3 md:space-x-6  py-4 cursor-grab select-none"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
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
      </div>

      {/* CSS pour cacher la scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default DragScrollProductSection;