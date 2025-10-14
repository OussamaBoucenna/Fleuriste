import { FaStar } from "react-icons/fa";
import Flower from "../assets/flowerLogo.svg";

const TestimonialCard = ({ rating, testimonial, name, date, avatar }) => {
  return (
    <div className="relative bg-greyBg rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      
      {/* 🌸 Image décorative en arrière-plan */}
      <img
        src={Flower}
        alt=""
        className="absolute bottom-0 right-0 w-16 md:w-32  scale-x-[-1]"
      />

      {/* Contenu de la carte */}
      <div className="relative z-10 flex flex-col gap-4">
        
        {/* Étoiles et note */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`${
                  index < Math.floor(rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                } text-lg md:text-xl`}
              />
            ))}
          </div>
          <span className="text-myGrey font-bold text-lg md:text-xl">
            {rating.toFixed(1)}
          </span>
        </div>

        {/* Témoignage */}
        <p className="text-myGrey text-sm md:text-base leading-relaxed">
          " {testimonial} "
        </p>

        {/* Avatar et informations client */}
        <div className="flex items-center gap-3 mt-2">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2  border-primaryPink"
          />
          <div>
            <p className="text-myGrey font-semibold text-sm md:text-base">
              {name}
            </p>
            <p className="text-gray-500 text-xs md:text-sm">
              Client depuis {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exemple d'utilisation avec plusieurs témoignages
const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5.0,
      testimonial:
        "J'adore cette boutique ! Les fleurs tiennent longtemps et chaque composition est réalisée avec goût. Une vraie valeur sûre pour faire plaisir",
      name: "Nadia R",
      date: "Mars 2018",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      rating: 5.0,
      testimonial:
        "Des bouquets magnifiques et toujours frais ! La livraison a été rapide et soignée, ma mère était ravie de sa surprise. Je recommande à 100% !",
      name: "Melissa L",
      date: "Août 2020",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      rating: 5.0,
      testimonial:
        "Un service impeccable et des créations florales uniques. J'ai pu composer un bouquet sur mesure, et le résultat a dépassé mes attentes",
      name: "Karim B",
      date: "Juin 2021",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
  ];

  return (
    <section className="py-8 px-4 md:px-12">
        <div className=" mb-6">
        <h2 className=" pl-4 md:pl-0 text-2xl  md:text-5xl font-bold text-myGrey mb-2">Ce que nos clients disent de nous</h2>
      
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            rating={item.rating}
            testimonial={item.testimonial}
            name={item.name}
            date={item.date}
            avatar={item.avatar}
          />
        ))}
      </div>
    </section>
  );
};

export { TestimonialCard, TestimonialsSection };
export default TestimonialCard;