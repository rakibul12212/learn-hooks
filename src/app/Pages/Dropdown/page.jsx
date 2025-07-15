"use client";
import { useState } from "react";

const data = {
  countries: [
    {
      country: "Bangladesh",
      divisions: [
        {
          name: "Dhaka",
          districts: ["Gazipur", "Narayanganj", "Tangail"],
        },
        {
          name: "Chittagong",
          districts: ["Comilla", "Cox's Bazar", "Rangamati"],
        },
        {
          name: "Khulna",
          districts: ["Jessore", "Satkhira", "Bagerhat"],
        },
      ],
    },
    {
      country: "India",
      divisions: [
        {
          name: "Maharashtra",
          districts: ["Mumbai", "Pune", "Nagpur"],
        },
        {
          name: "West Bengal",
          districts: ["Kolkata", "Howrah", "Darjeeling"],
        },
        {
          name: "Punjab",
          districts: ["Amritsar", "Ludhiana", "Patiala"],
        },
      ],
    },
    {
      country: "USA",
      divisions: [
        {
          name: "California",
          districts: ["Los Angeles", "San Francisco", "San Diego"],
        },
        {
          name: "Texas",
          districts: ["Houston", "Dallas", "Austin"],
        },
        {
          name: "Florida",
          districts: ["Miami", "Orlando", "Tampa"],
        },
      ],
    },
  ],
};

const DropdownPage = () => {
  const [selectedCountry, setSelectedCountry] = useState({ divisions: [] });
  const [selectedDivision, setSelectedDivision] = useState({ districts: [] });
  const [selectedDistrict, setSelectedDistrict] = useState({});
  console.log("Countries:", selectedCountry);

  function handleDivisionChange(e) {
    const division = selectedCountry.divisions[parseInt(e.target.value)];
    setSelectedDivision(division);
  }
  function handleDistrictChange(e) {
    const district = selectedDivision.districts[parseInt(e.target.value)];
    setSelectedDistrict(district);
  }

  return (
    <div className="p-20 gap-4 flex justify-center">
      <select
        onChange={(e) => {
          setSelectedCountry(data.countries[parseInt(e.target.value)]);
          setSelectedDivision({ districts: [] });
          console.log("Selected Country:", e.target.value);
        }}
        className="border-2 rounded-md p-2 w-full"
      >
        <option>Select a country</option>
        {data.countries.map((country, i) => (
          <option key={i} value={i}>
            {country.country}
          </option>
        ))}
      </select>
      <select
        className="border-2 rounded-md p-2 w-full"
        onChange={handleDivisionChange}
      >
        <option value="">Select a division</option>
        {selectedCountry.divisions?.map((division, i) => (
          <option key={i} value={i}>
            {division.name}
          </option>
        ))}
      </select>
      <select
        className="border-2 rounded-md p-2 w-full"
        onChange={handleDistrictChange}
      >
        <option value="">Select a district</option>
        {selectedDivision.districts?.map((district, i) => (
          <option key={i} value={i}>
            {district}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownPage;




// "use client";
// import { useState } from "react";

// const data = {
//   countries: [
//     {
//       country: "Bangladesh",
//       divisions: [
//         {
//           name: "Dhaka",
//           districts: ["Gazipur", "Narayanganj", "Tangail"],
//         },
//         {
//           name: "Chittagong",
//           districts: ["Comilla", "Cox's Bazar", "Rangamati"],
//         },
//         {
//           name: "Khulna",
//           districts: ["Jessore", "Satkhira", "Bagerhat"],
//         },
//       ],
//     },
//     {
//       country: "India",
//       divisions: [
//         {
//           name: "Maharashtra",
//           districts: ["Mumbai", "Pune", "Nagpur"],
//         },
//         {
//           name: "West Bengal",
//           districts: ["Kolkata", "Howrah", "Darjeeling"],
//         },
//         {
//           name: "Punjab",
//           districts: ["Amritsar", "Ludhiana", "Patiala"],
//         },
//       ],
//     },
//     {
//       country: "USA",
//       divisions: [
//         {
//           name: "California",
//           districts: ["Los Angeles", "San Francisco", "San Diego"],
//         },
//         {
//           name: "Texas",
//           districts: ["Houston", "Dallas", "Austin"],
//         },
//         {
//           name: "Florida",
//           districts: ["Miami", "Orlando", "Tampa"],
//         },
//       ],
//     },
//   ],
// };

// const DropdownPage = () => {
//   return (
//     <div className="p-20 gap-4 flex justify-center">
//       <select className="border-2 rounded-md p-2 w-full">
//         <option value="">Select a country</option>
//         {data.countries.map((country, index) => (
//           <option key={index} value={country.country}>
//             {country.country}
//           </option>
//         ))}
//       </select>

//       <select className="border-2 rounded-md p-2 w-full">
//         <option value="">Select a division</option>
//         {data.countries[0]?.divisions?.map((division, index) => (
//           <option key={index} value={division.name}>
//             {division.name}
//           </option>
//         ))}
//       </select>
//       <select className="border-2 rounded-md p-2 w-full">
//         <option value="">Select a division</option>
//         {data.countries[0]?.divisions[0]?.districts?.map((district, index) => (
//           <option key={index} value={district.name}>
//             {district.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default DropdownPage;

