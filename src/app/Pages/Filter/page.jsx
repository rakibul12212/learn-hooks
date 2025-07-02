"use client";
import React, { useState } from "react";

const data = [
  {
    Name: "Grandpa Joe",
    Age: 78,
    Location: "Village A",
    Parents: [
      {
        name: "Papa John",
        age: 50,
        location: "City B",
        money: 8000,
        Children: [
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
        Children: [
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
    Name: "Grandma Lucy",
    Age: 75,
    Location: "Village Z",
    Parents: [
      {
        name: "Mom Clara",
        age: 53,
        location: "City Y",
        money: 9000,
        Children: [
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
    const searchItem = data.filter((name) =>
        name.Name.toLowerCase().includes(search.toLowerCase().trim())
    );

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
      {searchItem.map((data, index) => (
        <div key={index}>
          <div className="bg-blue-50 border p-1">
            <p>{data.Name}</p>
            <p>{data.Age}</p>
            <p>{data.Location}</p>
            <div className="bg-blue-100 border p-1 px-4">
              <p className="font-semibold">Parents</p>
              {data.Parents.map((parent, index) => (
                <div key={index}>
                  <p>{parent.name}</p>
                  <p>{parent.age}</p>
                  <p>{parent.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;
