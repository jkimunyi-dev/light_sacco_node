import { useState } from "react";

const LoanRepayment = () => {
  const [repaymentData, setRepaymentData] = useState({
    repayment_id: "",
    loan_id: "",
    payment_amount: "",
    payment_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRepaymentData({
      ...repaymentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to submit the repayment data
    console.log("Repayment data:", repaymentData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-96"
      >
        <h2 className="text-3xl mb-6">Loan Repayment</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Repayment ID:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="repayment_id"
            value={repaymentData.repayment_id}
            onChange={handleChange}
            placeholder="Enter Repayment ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Loan ID:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="loan_id"
            value={repaymentData.loan_id}
            onChange={handleChange}
            placeholder="Enter Loan ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Payment Amount:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            name="payment_amount"
            value={repaymentData.payment_amount}
            onChange={handleChange}
            placeholder="Enter Payment Amount"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Payment Date:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            name="payment_date"
            value={repaymentData.payment_date}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoanRepayment;
