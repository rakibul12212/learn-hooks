"use client";

import { useState } from "react";
import { Steps } from "antd";

const CallbackFunction = () => {
  const [message, setMessage] = useState("pending");
  const [progress, setProgress] = useState("waiting");
  const [certificate, setCertificate] = useState("waiting");
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentSuccess = true;
  const result = 40;

  const enrollment = (Callback) => {
    setMessage("Enrollment in progress...");
    setCurrentStep(0);
    setTimeout(() => {
      if (paymentSuccess) {
        setMessage("Payment Successful");
        setCurrentStep(1);
        Callback();
      } else {
        setMessage("❌ Payment Failed");
        setIsProcessing(false);
      }
    }, 2000);
  };

  const Progress = (Callback) => {
    setProgress("Checking course progress...");
    setTimeout(() => {
      if (result >= 40) {
        setProgress(`You got ${result} Marks`);
        setCurrentStep(2);
        Callback();
      } else {
        setProgress("❌ Work hard to get pass marks");
        setIsProcessing(false);
      }
    }, 3000);
  };

  const getCertificate = () => {
    setIsProcessing(true);
    enrollment(() =>
      Progress(() => {
        setCertificate("Preparing your certificate...");
        setTimeout(() => {
          setCertificate("Congratulation");
          setIsProcessing(false);
        }, 1000);
      }),
    );
  };

  return (
    <div className="p-6 space-y-8 font-sans text-lg text-center">
      <h1 className="text-2xl font-bold">Callback Function</h1>

      <Steps
        current={currentStep}
        
        items={[
          {
            title: "Enrollment",
            description: message,
          },
          {
            title: "Progress",
            description: progress,
          },
          {
            title: "Certificate",
            description: certificate,
          },
        ]}
      />

      {!isProcessing && (
        <button
          onClick={getCertificate}
          className="border border-blue-700 bg-blue-50 text-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white mt-8"
        >
          Get Certificate
        </button>
      )}
    </div>
  );
};

export default CallbackFunction;
