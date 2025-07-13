import React from "react";

const ArrayMethod = () => {
  // flat amd flatmap
  const names1 = ["rakib", "nayem", "asif"];
  const names2 = ["rejwan", "mostafiz", ["safat"]];
  const names3 = names1.concat(names2);
  console.log(names3);
  const names4 = names3.flat(1);
  console.log(names4);
  const names5 = names4.flatMap((last) => [last + " khan"]);
  console.log(names5);
  return (
    <div className="p-10 space-y-5">
      <p className="text-xl font-semibold">ArrayMethod:</p>
      <p>1. flat() and flatMap()</p>
    </div>
  );
};

export default ArrayMethod;
