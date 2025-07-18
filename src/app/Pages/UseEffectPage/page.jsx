import UseEffectHookPage from "@/component/Hooks/UseEffect/UseEffectHookPage";
import React from "react";

const UseEffectPage = () => {
  return (
    <div className="space-y-8 p-8">
      <p className="text-center text-3xl font-semibold">
        <u>Use Effect Hook</u>
      </p>
      <p className="pl-4 text-3xl font-semibold">Users</p>
      <UseEffectHookPage />
    </div>
  );
};

export default UseEffectPage;
