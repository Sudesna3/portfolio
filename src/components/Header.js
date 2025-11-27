import React, { useState } from "react";
import Landing from "./landing";
import About from "./About";
import Resume from "./Resume";
import Contactus from "./Contactus";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [lastSelectedCard, setLastSelectedCard] = useState(null);

  const toggleMenu = () => {
    if (activeCard !== null) {
      setActiveCard(null);
      setMenuOpen(true);
    } else {
      setMenuOpen(!menuOpen);
    }
  };

  const expandCard = (index) => {
    setActiveCard(index);
    setMenuOpen(false);
    setLastSelectedCard(index);
  };

  const handleNavClick = (index) => {
    setMenuOpen(false);
    setActiveCard(index);
    setLastSelectedCard(index);
  };

  const cardComponents = [
    { id: 0, component: <Landing /> },
    { id: 1, component: <About /> },
    { id: 2, component: <Resume /> },
    { id: 3, component: <Contactus /> },
  ];

  const stackedCards = [...cardComponents];
  if (menuOpen && lastSelectedCard !== null) {
    const selectedCard = stackedCards.splice(lastSelectedCard, 1)[0];
    stackedCards.push(selectedCard);
  }

  return (
    <div
      className="relative bg-gray-900 overflow-hidden rounded-lg min-h-screen"
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
      {/* Hamburger */}
      <div className="fixed z-[999] right-0 h-14 w-1/5 rounded-r-lg">
        <div className="h-14 flex items-center justify-between">
          <div className="p-4 w-3/4 bg-lime-500 text-white font-bold">
            SUDESNA
          </div>
          <button className="py-4 pr-4 pl-5 bg-gray-900" onClick={toggleMenu}>
            <i
              className="fa-solid fa-bars-staggered fa-2xl"
              style={{ color: "#e0e2e6" }}
            ></i>
          </button>
        </div>
      </div>

      {/* Navbar */}
      <div className="absolute left-0 top-0 w-full">
        <div
          className="flex md:flex-row flex-col gap-6 items-center justify-center text-white"
          style={{
            transform: menuOpen ? "translateY(50px)" : "translateY(20rem)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <p className="text-2xl cursor-pointer" onClick={() => handleNavClick(0)}>Home</p>
          <p className="text-2xl cursor-pointer" onClick={() => handleNavClick(1)}>About us</p>
          <p className="text-2xl cursor-pointer" onClick={() => handleNavClick(2)}>Resume</p>
          <p className="text-2xl cursor-pointer" onClick={() => handleNavClick(3)}>Contact us</p>
        </div>
      </div>

      {/* Cards */}
      {stackedCards.map((item, index) => {
        const originalIndex = cardComponents.findIndex((c) => c.id === item.id);
        const isExpanded = activeCard === originalIndex;

        const randomZ =
          originalIndex * -200 - (Math.floor(Math.random() * 100) + 200);

        const scale = isExpanded ? 1 : menuOpen ? 0.85 : 1;

        /* ⭐⭐ FIXED TRANSFORM LOGIC ⭐⭐
           - Always push inactive pages OFF-SCREEN (100vh)
           - Animation ALWAYS triggers
           - Your original stack layout remains unchanged
        */
        const transform = (() => {
          // 1️⃣ Expanded page
          if (isExpanded) {
            return "translate3d(0,0,0) scale(1)";
          }

          // 2️⃣ Stack mode (your original stack style)
          if (menuOpen) {
            return `translate3d(0, ${40 + index * 4}%, ${randomZ}px) rotateY(0deg) scale(${scale})`;
          }

          // 3️⃣ Initial load: show Home only
          if (!menuOpen && activeCard === null) {
            return originalIndex === 0
              ? "translate3d(0,0,0) scale(1)"
              : "translate3d(0,100vh,0) scale(0.98)";
          }

          // 4️⃣ ⭐ If page is NOT active, keep it off-screen
          if (activeCard !== null && !isExpanded) {
            return "translate3d(0,100vh,0) scale(0.98)";
          }

          return "translate3d(0,0,0) scale(1)";
        })();

        // zIndex unchanged
        const zIndex = isExpanded
          ? 100
          : menuOpen
          ? 30 + index
          : originalIndex === 0
          ? 20
          : 5;

        return (
          <div
            key={item.id}
            onClick={() => expandCard(originalIndex)}
            className="absolute overflow-y-auto h-screen cursor-pointer w-full"
            style={{
              transform,
              zIndex,
              opacity: 1,
              transition:
                "transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.3s ease",
            }}
          >
            {item.component}
          </div>
        );
      })}
    </div>
  );
}

export default Header;
