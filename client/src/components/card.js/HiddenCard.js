import { useRef, useEffect, useState } from "react";

const HiddenCard = ({ cards }) => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval;

    const startScrolling = () => {
      if (isPaused) return;
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += 1; // Adjust scrolling speed
        }
      }, 20); // Adjust movement speed
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
      setTimeout(() => {
        setIsPaused(false);
        startScrolling();
      }, 2000); // Pause duration (2 seconds)
    };

    startScrolling();

    // Detect end of scroll and reset seamlessly
    const handleScroll = () => {
      setIsPaused(true);
      clearInterval(scrollInterval);
      stopScrolling();

      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        scrollContainer.scrollLeft = 0; // Reset to the beginning
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [isPaused]);

  return (
    <div className="flex overflow-hidden px-7 py-3 mx-14">
      <div
        ref={scrollRef}
        className="flex gap-8 flex-row items-center overflow-x-scroll no-scrollbar whitespace-nowrap scroll-smooth"
      >
        {[...cards, ...cards, ...cards].map((card, index) => (
          <div key={index} className="shrink-0">
            <div
              className="w-[350px] h-[470px] rounded-[37px] bg-cover group bg-center background opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[245px] hover:py-2 transition-all duration-500"
              style={{ backgroundImage: `url(${card.src})` }}
            >
              <div className="w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-16 transition-all duration-500 overflow-hidden">
                <div className="flex flex-row h-fit w-full items-center px-2 pt-3">
                  <p className="text-white text-2xl font-Salsa">{card.title}</p>
                  <img
                    src={card.heart_icon}
                    alt="heart"
                    className={'w-6 h-6 ml-auto mx-2 focus:heart-icon'}
                    
                  />
                </div>
                <div className="flex flex-row h-fit w-full items-center px-1 pt-2">
                  <img src={card.location_icon} className="w-[18px] h-[18px]" />
                  <p className="text-white text-sm font-Andika mx-1">Lorem</p>
                </div>
                <p className="text-white text-sm pt-6 font-Andika mx-6 text-balance mb-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {card.text}
                </p>
                <button className="bg-white text-black font-Andika font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 content-center text-m w-1/2 rounded-full px-3 py-2 pt-1">
                  {card.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiddenCard;
