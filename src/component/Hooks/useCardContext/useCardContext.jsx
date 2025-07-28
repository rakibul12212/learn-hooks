"use client";
import { useContext } from "react";
import CardContext from "@/component/context/cardContext";

const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};

export default useCardContext;
