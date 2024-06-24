import { useEffect, useRef } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollTop: React.FC = () => {
  const arrowRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (arrowRef.current) {
        if (window.scrollX >= 180) {
          arrowRef.current?.classList.add("right-10");
        } else {
          arrowRef.current?.classList.remove("right-10");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-hidden">
      <button
        aria-label="arrow"
        className={`fixed bottom-6 ss:bottom-10 z-30 -right-full transition-all duration-500 shadow-2xl shadow-black bg-white hover:bg-[#cdcdcd] active:p-[.45rem] p-2 rounded`}
        onClick={scrollToTop}
        ref={arrowRef}
      >
        <BsArrowUp className="text-xl active:text-lg text-black" />
      </button>
    </div>
  );
};

export default ScrollTop;
