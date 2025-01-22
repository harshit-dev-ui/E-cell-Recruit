import React, { useState } from "react";
import Logo from "../assets/ecellLogo.png";

export default function Home() {
  const [colors, setColors] = useState(Array(9).fill("#00407A"));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (index === 8) {
      const newColors = [...colors];
      clickOrder.forEach((i, idx) => {
        setTimeout(() => {
          newColors[i] = "#00407A";

          setColors([...newColors]);
        }, idx * 500);
      });
      setClickOrder([]);
    } else {
      const newColors = [...colors];
      newColors[index] = "#7A0000";
      setColors(newColors);
      setClickOrder([...clickOrder, index]);
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center h-screen gap-6 p-6 pl-20 pr-20 text-xl">
        <div className="h-[24rem] w-[24rem] bg-gradient-to-br from-blue-500 to-pink-500 rounded-lg order-2 lg:order-1"></div>
        <div className="h-[24rem] w-[24rem] bg-white rounded-lg flex items-center justify-center border border-black order-1 lg:order-2">
          <img src={Logo} alt="Logo" className="h-full w-full object-cover" />
        </div>
        <div className="h-[24rem] w-[24rem] bg-[#D9D9D9] rounded-lg grid grid-cols-3 gap-2 p-6 shadow-inner order-3 lg:order-3">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`h-18 w-18 rounded-lg`}
              style={{ backgroundColor: index === 8 ? "#7A0000" : color }}
              onClick={() => handleClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
