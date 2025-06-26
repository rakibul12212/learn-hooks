"use client";

import useFetch from "@/component/Hooks/CustomHook/CustomHookPage";

const CustomHookPage = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div className="space-y-8 p-8">
      <p className="text-center text-3xl font-semibold">
        <u>Custom Hook</u>
      </p>
      <div>
        <p className="pl-8 text-3xl font-semibold">Todo: {data.length}</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 space-y-8">
          {data.slice(0, 8).map((item) => (
            <div key={item.id} className="p-4 border border-gray-300 space-y-2">
              <p className="font-bold text-xl">{item.title}</p>
              <p className="text-lg flex items-center gap-2">
                Status:
                {item.completed ? (
                  <span className="text-green-600 font-bold">Completed</span>
                ) : (
                  <span className="text-red-600 font-bold">Not Completed</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomHookPage;
