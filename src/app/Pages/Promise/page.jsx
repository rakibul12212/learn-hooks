"use client";

// example-1

// import React, { useState } from "react";

// const PromiseExample = () => {
//   const [payment, setPayment] = useState("Pending");
//   const paymentSuccess = true;

//   const handlePayment = () => {
//     const paymentPromise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (paymentSuccess) {
//           resolve("Payment successful");
//         } else {
//           reject("Payment failed");
//         }
//       }, 1000);
//     });

//     paymentPromise
//       .then((message) => {
//         setPayment(message);
//       })
//       .catch((message) => {
//         setPayment(message);
//       });
//   };

//   const enroll = () => {
//     console.log("Enrollment started");
//     handlePayment();
//   };

//   return (
//     <div className="p-4 space-y-8 text-center">
//       <h1 className="text-3xl ">Promise Example</h1>
//       <button onClick={enroll} className="border p-2">
//         Confirm Payment
//       </button>
//       <p>
//         Status :
//         <span
//           className={`font-semibold ${
//             payment === "Pending"
//               ? "text-yellow-500"
//               : payment === "Payment successful"
//               ? "text-green-500"
//               : "text-red-500"
//           }`}
//         >
//           {payment}
//         </span>
//       </p>
//     </div>
//   );
// };

// export default PromiseExample;

// example - 2

import { useState } from "react";

const PromiseExample = () => {
  const [enroll, setEnroll] = useState("Pending");
  const [progress, setProgress] = useState("Pending");
  const [certificate, setCertificate] = useState("Pending");
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentSuccess = true;
  const result = 90;

  const enrollment = () => {
    setEnroll("Enrollment in progress...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (paymentSuccess) {
          setEnroll("✅ Payment Successful");
          resolve();
        } else {
          setEnroll("❌ Payment Failed");
          reject();
        }
      }, 2000);
    });
  };

  const checkProgress = () => {
    setProgress("Checking course progress...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (result >= 80) {
          setProgress(`✅ Congrats! You got ${result} Marks`);
          resolve();
        } else {
          setProgress("❌ Try harder to get 80 marks");
          reject();
        }
      }, 3000);
    });
  };

  const getCertificate = () => {
    setIsProcessing(true);
    setCertificate("");
    enrollment()
      .then(() => checkProgress())
      .then(() => {
        setCertificate("🎉 Congrats! You got the Certificate");
      })
      .catch(() => {
        setCertificate("❌ Certificate generation failed");
      })
      .finally(() => {
        setTimeout(() => {
          setIsProcessing(false);
        }, 1000);
      });
  };

  return (
    <div className="p-6 space-y-4 font-sans text-lg text-center">
      <h1 className="text-2xl font-bold">Promise</h1>

      <div className="space-y-2">
        <p>
          <strong>Status:</strong> {enroll}
        </p>
        <p>
          <strong>Progress:</strong> {progress}
        </p>
        <p>
          <strong>Certificate:</strong> {certificate}
        </p>
      </div>

      {!isProcessing && (
        <button
          onClick={getCertificate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Get Certificate
        </button>
      )}
    </div>
  );
};

export default PromiseExample;
