import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import assets from "../../constants/assets";

const cards = [
  { id: 1, title: "Kodaikanal", image:assets.image1  },
  { id: 2, title: "Munnar", image:assets.image2  },
  { id: 3, title: "Ooty", image:assets.image3  },
  { id: 4, title: "Coorg", image:assets.image4  },
  { id: 5, title: "Shimla", image:assets.image5  },
  { id: 6, title: "Manali", image:assets.image6  }
];

const CardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const nextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="flex flex-col justify-center w-full px-28 items-center h-screen overflow-hidden relative">
      <div className="relative flex w-full overflow-hidden h-80 justify-center items-center gap-6">
        {cards.map((card, index) => {
          let relativeIndex = (index - activeIndex + cards.length) % cards.length;
          let xOffset = (relativeIndex - 1) * 300;
          let scale = relativeIndex === 1 ? 1 : 0.9;
          let opacity = relativeIndex === 1 ? 1 : 1;
          let zIndex = relativeIndex === 1 ? 10 : 5;

          return (
            <motion.div
              key={card.id}
              className="w-[800px] h-full rounded-full cursor-pointer shadow-lg absolute"
              style={{ zIndex }}
              initial={{ x: 0, scale: 1, opacity: 1 }}
              animate={{ x: xOffset, scale, opacity }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={() => handleCardClick(index)}
              //whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover rounded-[30px]"
                animate={{ x: -xOffset * 0.2 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              />
              <div className="absolute bottom-0 left-0 right-0  bg-black bg-opacity-60 text-white flex justify-between w-full h-full overflow-hidden items-center rounded-3xl p-12 m-12">
                <span className="font-semibold">{card.title}</span>
                <Heart className="text-red-500" size={20} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CardCarousel;
