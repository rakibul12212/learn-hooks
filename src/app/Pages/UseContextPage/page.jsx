"use client";
import useCardContext from "@/component/Hooks/useCardContext/useCardContext";

const UseContextPage = () => {
  const cardData = useCardContext();

  return (
    <div className="px-20 text-center">
      <p className="py-10 text-2xl font-semibold">UseContextPage</p>
      <div className="grid grid-cols-3 gap-4 ">
       
        {cardData.map((card) => (
          <div key={card.id} className="border p-4 rounded shadow space-y-3">
            <h3 className="text-xl font-semibold">{card.name}</h3>
            <p>Price: ${card.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseContextPage;
