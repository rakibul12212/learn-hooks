"use client";
import React, { useEffect, useState } from "react";

const AsyncAndAwaitPage = () => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      setComments(data);
    };
    fetchComments();
  }, []);
  if (!comments)
    return (
      <p className="flex justify-center items-center h-screen text-2xl font-semibold">
        Loading...
      </p>
    );

  return (
    <div className="space-y-8 p-8">
      <p className="text-center text-3xl font-semibold">
        <u>Async And Await</u>
      </p>
      <p className="pl-4 text-3xl font-semibold">Comments</p>
      <div className="space-y-4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {comments.slice(0, 9).map((item, id) => (
          <div key={id} className="p-4 border border-gray-300 space-y-2">
            <p className="font-bold text-2xl">{item.name}</p>
            <p className=" text-lg">
              <span className="font-semibold">Email:</span> {item.email}
            </p>
            <p className=" text-lg">
              <span className="font-semibold">Comment:</span> {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsyncAndAwaitPage;
