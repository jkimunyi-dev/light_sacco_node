import { useState } from "react";

const Loan = () => {
  const [loanData, setLoanData] = useState({
    loan_type_name: "",
    max_loan_amount: "",
    interest_rate: "",
  });

  const handleLoanTypeChange = (e) => {
    const { value } = e.target;

    let interestRate = "";
    switch (value) {
      case "Basic":
        interestRate = "10.00 %";
        break;
      case "Standard":
        interestRate = "8.00 %";
        break;
      case "Premium":
        interestRate = "6.00 %";
        break;
      default:
        interestRate = "";
        break;
    }

    setLoanData({
      ...loanData,
      loan_type_name: value,
      interest_rate: interestRate,
    });
  };

  const handleMaxLoanAmountChange = (e) => {
    const { value } = e.target;
    setLoanData({
      ...loanData,
      max_loan_amount: value,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-96">
        <h2 className="text-3xl mb-6">Loan</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Loan Type:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
            name="loan_type_name"
            value={loanData.loan_type_name}
            onChange={handleLoanTypeChange}
          >
            <option value="">Select Loan Type</option>
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Max Loan Amount:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
            name="max_loan_amount"
            value={loanData.max_loan_amount}
            onChange={handleMaxLoanAmountChange}
          >
            <option value="">Select Max Loan Amount Range</option>
            <option value="2000-100000">$2,000 - $100,000</option>
            <option value="100001-500000">$100,001 - $500,000</option>
            <option value="500001-2000000">$500,001 - $2,000,000</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Interest Rate:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
            type="text"
            name="interest_rate"
            value={loanData.interest_rate}
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default Loan;
