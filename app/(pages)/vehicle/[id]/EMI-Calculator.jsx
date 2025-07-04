import React, { useState, useEffect } from "react";

// EMICalculator Component
export default function EMICalculator({ price }) {
  // State variables for inputs
  const [carPrice, setCarPrice] = useState(price); // Initial car price in USD
  const [loanTerm, setLoanTerm] = useState(60); // Loan term in months
  const [interestRate, setInterestRate] = useState(5); // Annual interest rate in %
  const [downPayment, setDownPayment] = useState(0); // Down payment in USD
  const [processingFeePercentage, setProcessingFeePercentage] = useState(1); // Processing fee in %

  // State variables for calculated results
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);
  const [loanProcessingFee, setLoanProcessingFee] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);

  // useEffect hook to recalculate EMI and amortization schedule whenever inputs change
  useEffect(() => {
    const calculateEMI = () => {
      // Calculate the principal loan amount after down payment
      const principal = carPrice - downPayment;

      // Handle invalid input cases to prevent errors and show zero results
      if (principal <= 0 || loanTerm <= 0 || interestRate < 0) {
        setMonthlyEMI(0);
        setTotalInterest(0);
        setTotalPayable(0);
        setLoanProcessingFee(0);
        setAmortizationSchedule([]);
        return;
      }

      // Convert annual interest rate to monthly interest rate
      const monthlyInterestRate = interestRate / 100 / 12;
      let emi = 0;

      // Calculate EMI based on whether interest rate is zero or not
      if (monthlyInterestRate === 0) {
        // Simple division if no interest
        emi = principal / loanTerm;
      } else {
        // Standard EMI formula
        emi =
          (principal *
            monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, loanTerm)) /
          (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);
      }

      // Calculate total amount payable over the loan term (principal + interest)
      const totalPayableAmount = emi * loanTerm;
      // Calculate total interest paid
      const calculatedTotalInterest = totalPayableAmount - principal;
      // Calculate loan processing fee based on car price percentage
      const calculatedProcessingFee =
        (carPrice * processingFeePercentage) / 100;

      // Update state with calculated results
      setMonthlyEMI(emi);
      setTotalInterest(calculatedTotalInterest);
      setTotalPayable(totalPayableAmount + calculatedProcessingFee); // Total includes principal, interest, and fee
      setLoanProcessingFee(calculatedProcessingFee);

      // --- Calculate Amortization Schedule ---
      let balance = principal; // Start with the principal loan amount
      const schedule = []; // Array to store monthly breakdown

      // Loop through each month of the loan term
      for (let i = 1; i <= loanTerm; i++) {
        // Calculate interest component for the current month
        const interestComponent = balance * monthlyInterestRate;
        // Calculate principal component for the current month
        const principalComponent = emi - interestComponent;
        // Update the remaining balance
        balance -= principalComponent;

        // Add the month's data to the schedule
        schedule.push({
          month: i,
          emi: emi,
          principalComponent: principalComponent,
          interestComponent: interestComponent,
          // Ensure remaining balance doesn't go negative due to floating point inaccuracies
          remainingBalance: balance > 0 ? balance : 0,
        });
      }
      setAmortizationSchedule(schedule); // Update state with the complete schedule
    };

    calculateEMI(); // Call the calculation function on component mount and input changes
  }, [carPrice, loanTerm, interestRate, downPayment, processingFeePercentage]); // Dependencies for useEffect

  // Helper function to format currency
  const formatCurrency = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-4xl border border-gray-200">
      {/* Tailwind CSS for Inter font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>

      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
        BryanAuto Car Loan EMI Calculator
      </h1>

      {/* Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Car Price Input with Slider */}
        <div className="flex flex-col">
          <label
            htmlFor="carPrice"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Car Price:
          </label>
          <input
            type="range"
            id="carPrice"
            min="5000"
            max="100000"
            step="1000"
            value={carPrice}
            onChange={(e) => setCarPrice(Number(e.target.value))}
            className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <span className="text-orange-500 font-semibold text-right mt-2 text-xl">
            {formatCurrency(carPrice)}
          </span>
        </div>

        {/* Down Payment Input */}
        <div className="flex flex-col">
          <label
            htmlFor="downPayment"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Down Payment:
          </label>
          <input
            type="number"
            id="downPayment"
            min="0"
            max={carPrice}
            step="100"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          />
          <span className="text-gray-600 text-right mt-2 text-base">
            Max: {formatCurrency(carPrice)}
          </span>
        </div>

        {/* Loan Term Input */}
        <div className="flex flex-col">
          <label
            htmlFor="loanTerm"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Loan Term (Months):
          </label>
          <input
            type="number"
            id="loanTerm"
            min="12"
            max="84"
            step="12"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          />
          <span className="text-gray-600 text-right mt-2 text-base">
            {loanTerm} Months
          </span>
        </div>

        {/* Interest Rate Input */}
        <div className="flex flex-col">
          <label
            htmlFor="interestRate"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Interest Rate (p.a. %):
          </label>
          <input
            type="number"
            id="interestRate"
            min="0.1"
            max="20"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          />
          <span className="text-gray-600 text-right mt-2 text-base">
            {interestRate}%
          </span>
        </div>

        {/* Processing Fee Input */}
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="processingFee"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Processing Fee (% of Car Price):
          </label>
          <input
            type="number"
            id="processingFee"
            min="0"
            max="10"
            step="0.1"
            value={processingFeePercentage}
            onChange={(e) => setProcessingFeePercentage(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          />
          <span className="text-gray-600 text-right mt-2 text-base">
            {processingFeePercentage}%
          </span>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Loan Summary
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
          <p>
            <strong>Monthly EMI:</strong>{" "}
            <span className="text-blue-700 font-bold">
              {formatCurrency(monthlyEMI)}
            </span>
          </p>
          <p>
            <strong>Loan Processing Fee:</strong>{" "}
            <span className="text-blue-700 font-bold">
              {formatCurrency(loanProcessingFee)}
            </span>
          </p>
          <p>
            <strong>Total Interest Payable:</strong>{" "}
            <span className="text-blue-700 font-bold">
              {formatCurrency(totalInterest)}
            </span>
          </p>
          <p>
            <strong>Total Amount Payable:</strong>{" "}
            <span className="text-blue-700 font-bold">
              {formatCurrency(totalPayable)}
            </span>
          </p>
        </div>
      </div>

      {/* Amortization Schedule */}
      {/* {amortizationSchedule.length > 0 && (
        <div className="amortization-schedule bg-gray-50 p-6 rounded-lg border border-gray-200 overflow-x-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Amortization Schedule (Monthly Breakdown)
          </h2>
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left rounded-tl-lg">Month</th>
                <th className="py-3 px-6 text-right">EMI</th>
                <th className="py-3 px-6 text-right">Principal</th>
                <th className="py-3 px-6 text-right">Interest</th>
                <th className="py-3 px-6 text-right rounded-tr-lg">
                  Remaining Balance
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {amortizationSchedule.map((monthData) => (
                <tr
                  key={monthData.month}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {monthData.month}
                  </td>
                  <td className="py-3 px-6 text-right">
                    {formatCurrency(monthData.emi)}
                  </td>
                  <td className="py-3 px-6 text-right">
                    {formatCurrency(monthData.principalComponent)}
                  </td>
                  <td className="py-3 px-6 text-right">
                    {formatCurrency(monthData.interestComponent)}
                  </td>
                  <td className="py-3 px-6 text-right">
                    {formatCurrency(monthData.remainingBalance)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )} */}
    </div>
  );
}
