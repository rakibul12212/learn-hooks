"use client";
import React, { useState } from "react";
const data = [
  {
    name: "Grandpa Joe",
    age: 78,
    location: "Village A",
    parents: [
      {
        name: "Papa John",
        age: 50,
        location: "City B",
        money: 8000,
        children: [
          {
            name: "Alex",
            age: 27,
            location: "City C",
            money: 3000,
            wife: [
              {
                name: "Emily",
                age: 26,
                location: "City C",
                hobbies: ["painting", "reading"],
                family: [
                  {
                    father: {
                      name: "Mr. Smith",
                      age: 58,
                      location: "Town D",
                    },
                    mother: {
                      name: "Mrs. Smith",
                      age: 56,
                      location: "Town D",
                    },
                  },
                ],
              },
            ],
            children: [
              {
                name: "Liam",
                age: 4,
                location: "City C",
                toys: ["blocks", "train", "puzzle"],
              },
            ],
          },
          {
            name: "Anna",
            age: 23,
            location: "City B",
            money: 1500,
            husband: [
              {
                name: "Daniel",
                age: 25,
                location: "City B",
                job: "Engineer",
              },
            ],
          },
        ],
      },
      {
        name: "Uncle Sam",
        age: 48,
        location: "City D",
        money: 6000,
        children: [
          {
            name: "Cousin Mike",
            age: 21,
            location: "City E",
            money: 2000,
            girlfriend: [
              {
                name: "Rachel",
                age: 20,
                location: "City F",
                interests: ["music", "sports"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Grandma Lucy",
    age: 75,
    location: "Village Z",
    parents: [
      {
        name: "Mom Clara",
        age: 53,
        location: "City Y",
        money: 9000,
        children: [
          {
            name: "Meghan",
            age: 28,
            location: "City X",
            money: 3200,
            husband: [
              {
                name: "Ryan",
                age: 30,
                location: "City X",
                job: "Doctor",
                pets: [
                  {
                    type: "Dog",
                    name: "Buddy",
                    age: 3,
                  },
                  {
                    type: "Cat",
                    name: "Whiskers",
                    age: 2,
                  },
                ],
              },
            ],
            children: [
              {
                name: "Olivia",
                age: 3,
                favoriteFoods: ["pasta", "apple", "milk"],
              },
              {
                name: "Noah",
                age: 1,
                favoriteFoods: ["banana", "cereal"],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Filter = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    const value = e.target.value;
    console.log(value);
    setSearch(value);
  };
  const searchGrandParent = data.filter((name) =>
    name.name.toLowerCase().includes(search.toLowerCase()),
  );
  const parentData = data.flatMap((item) => item.parents);
  const searchParent = parentData.filter((parent) =>
    parent.name.toLowerCase().includes(search.toLowerCase()),
  );
  const childData = parentData.flatMap((item) => item.children);
  const searchChildren = childData.filter((children) =>
    children.name.toLowerCase().includes(search.toLowerCase()),
  );
  console.log("childData ", childData);

  return (
    <div className="p-10 space-y-5">
      <p>filter</p>
      <input
        type="search"
        name="search"
        placeholder="search"
        className="w-[40%] border px-4 py-3"
        value={search}
        onChange={(e) => handleSearch(e)}
      />
      {searchGrandParent.map((person, index) => (
        <p key={index}>{person.name}</p>
      ))}
      {searchParent.map((person, index) => (
        <p key={index}>{person.name}</p>
      ))}
      {searchChildren.map((person, index) => (
        <p key={index}>{person.name}</p>
      ))}
    </div>
  );
};

export default Filter;
