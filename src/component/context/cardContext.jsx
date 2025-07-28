"use client";
import { createContext } from "react";
import { cardData } from "../data/cardData";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  return (
    <CardContext.Provider value={cardData}>{children}</CardContext.Provider>
  );
};

export default CardContext;
