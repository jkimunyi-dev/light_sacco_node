import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/applyloan" element={<ApplyLoan />} />
        <Route path="/loanrepayment" element={<LoanRepayment />} />
        <Route path="/buyshares" element={<BuyShares />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/createsavingsaccount" element={<Loan />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

function Home() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center bg-gray-300">
        <div className="bg-gray-200 w-80 h-80 px-2 py-2 rounded flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="bg-gray-200 w-40 h-40 flex flex-col items-center justify-center rounded">
            <img
              src="https://placehold.co/40x40"
              alt=""
              className="w-20 h-20 rounded object-cover"
            />
            <p className="text-gray-700 text-l  font-bold my-2">Light Sacco</p>
          </div>

          <div className="flex justify-between mt-4 gap-5">
            <button className="bg-white hover:bg-blue-200 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200">
              <a href="/signup">Sign Up</a>
            </button>
            <button className="bg-white hover:bg-green-200 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-200">
              <a href="/signin">Sign In</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const SignIn = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to submit the form data
    console.log("Form data:", formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-96"
      >
        <h2 className="text-3xl mb-6">Sign In</h2>

        <div className="mb-4 flex">
          <label className="block text-gray-700 text-sm font-bold mr-2 w-1/2">
            ID Number:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="Enter your ID Number"
            required
          />
        </div>

        <div className="mb-4 flex">
          <label className="block text-gray-700 text-sm font-bold  mr-2 w-1/2">
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
        <a href="/signup"> Not a member? Sign Up </a>
      </form>
    </div>
  );
};

const SignUp = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    contact_number: "",
    email: "",
    address: "",
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to submit the form data
    console.log("Form data:", formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-96"
      >
        <h2 className="text-3xl mb-6">Sign Up</h2>
        <div className="mb-4 flex">
          <label className="block text-gray-700 text-sm font-bold mr-2 w-1/2">
            First Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="mb-4 flex">
          <label className="block text-gray-700 text-sm font-bold mr-2 w-1/2">
            Last Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="mb-4 flex">
          <label className="block text-gray-700 text-sm font-bold mr-2 w-1/2">
            ID Number:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="Enter your ID Number"
            required
          />
        </div>
        <div className="mb-4 flex">
          <label className="block text-gray-700 text-sm font-bold mr-2 w-1/2">
            Date of Birth:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex">
          <label className="block text-gray-700 text-sm font-bold mr-2 w-1/2">
            Contact Number:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            type="text"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            placeholder="Enter your contact number"
            required
          />
        </div>
        <div className="mb-4 flex">
          <label className="block text-gray-700 text-sm font-bold mr-2 w-1/2">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="mb-6 flex">
          <label className="block text-gray-700 text-sm font-bold mr-2 w-1/2">
            Address:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <a href="/signin"> Already a member? Sign In </a>
      </form>
    </div>
  );
};

const ApplyLoan = () => {
  const [loanData, setLoanData] = useState({
    id: "",
    guarantorId: "",
    amount: "",
    repaymentPeriod: "6 months",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanData({
      ...loanData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to submit the loan data
    console.log("Loan data:", loanData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-96"
      >
        <h2 className="text-3xl mb-6">Apply for Loan</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ID:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="id"
            value={loanData.id}
            onChange={handleChange}
            placeholder="Enter ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Guarantor ID:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="guarantorId"
            value={loanData.guarantorId}
            onChange={handleChange}
            placeholder="Enter Guarantor ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Amount:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            name="amount"
            value={loanData.amount}
            onChange={handleChange}
            placeholder="Enter Amount"
            min="2000"
            max="100000"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Repayment Period:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="repaymentPeriod"
            value={loanData.repaymentPeriod}
            onChange={handleChange}
          >
            <option value="6 months">6 months</option>
            <option value="12 months">12 months</option>
            <option value="18 months">18 months</option>
            <option value="24 months">24 months</option>
          </select>
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

const BuyShares = () => {
  const [buySharesData, setBuySharesData] = useState({
    share_id: "",
    member_id: "",
    share_amount: "",
    purchase_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuySharesData({
      ...buySharesData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to submit the buy shares data
    console.log("Buy Shares data:", buySharesData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-96"
      >
        <h2 className="text-3xl mb-6">Buy Shares</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Share ID:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="share_id"
            value={buySharesData.share_id}
            onChange={handleChange}
            placeholder="Enter Share ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Member ID:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="member_id"
            value={buySharesData.member_id}
            onChange={handleChange}
            placeholder="Enter Member ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Share Amount:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            name="share_amount"
            value={buySharesData.share_amount}
            onChange={handleChange}
            placeholder="Enter Share Amount"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Purchase Date:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            name="purchase_date"
            value={buySharesData.purchase_date}
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {/* <div className="bg-gray-800 text-white w-1/5">
        <div className="py-8 px-4">
          <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
          <ul>
            <ul>
              <li className="mb-2 hover:cursor-pointer hover:text-gray-600">
                Item 1
              </li>
              <li className="mb-2 hover:cursor-pointer hover:text-gray-600">
                Item 2
              </li>
              <li className="mb-2 hover:cursor-pointer hover:text-gray-600">
                Item 3
              </li>
            </ul>
          </ul>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 text-gray-800">
        <AccountsTable />
        <GuarantorsTable />
        <LoanApplicationsTable />
        <LoansTable />
        <LoanTypesTable />
        <MembersTable />
        <SavingsPlansTable />
        <SharesTable />
        <TransactionsTable />
      </div>
    </div>
  );
};

const AccountsTable = () => {
  const accounts = [
    { account_id: 1, member_id: 1, account_type: "Savings", balance: 5000.0 },
    { account_id: 2, member_id: 2, account_type: "Loan", balance: 10000.0 },
    { account_id: 3, member_id: 3, account_type: "Savings", balance: 8000.0 },
    { account_id: 4, member_id: 4, account_type: "Loan", balance: 5000.0 },
    { account_id: 5, member_id: 5, account_type: "Savings", balance: 3000.0 },
    // Add more data as needed
  ];
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Accounts</h1>
      <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Account ID</th>
            <th className="px-4 py-2">Member ID</th>
            <th className="px-4 py-2">Account Type</th>
            <th className="px-4 py-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the accounts data and render rows */}
          {accounts.map((account) => (
            <tr key={account.account_id}>
              <td className="px-4 py-2">{account.account_id}</td>
              <td className="px-4 py-2">{account.member_id}</td>
              <td className="px-4 py-2">{account.account_type}</td>
              <td className="px-4 py-2">{account.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const GuarantorsTable = () => {
  const guarantors = [
    { guarantor_id: 11, member_id: 2, loan_id: 1 },
    { guarantor_id: 12, member_id: 3, loan_id: 2 },
    { guarantor_id: 13, member_id: 4, loan_id: 1 },
    // Add more data as needed
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Guarantors</h1>
      <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Guarantor ID</th>
            <th className="px-4 py-2">Member ID</th>
            <th className="px-4 py-2">Loan ID</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the guarantors data and render rows */}
          {guarantors.map((guarantor) => (
            <tr key={guarantor.guarantor_id}>
              <td className="px-4 py-2">{guarantor.guarantor_id}</td>
              <td className="px-4 py-2">{guarantor.member_id}</td>
              <td className="px-4 py-2">{guarantor.loan_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const LoanApplicationsTable = () => {
  // Define the loan applications data
  const loanApplications = [
    {
      application_id: 1,
      member_id: 1,
      loan_type_id: 1,
      application_date: "2024-03-10",
      status: "Pending",
    },
    {
      application_id: 2,
      member_id: 2,
      loan_type_id: 2,
      application_date: "2024-03-11",
      status: "Approved",
    },
    {
      application_id: 3,
      member_id: 3,
      loan_type_id: 3,
      application_date: "2024-03-12",
      status: "Pending",
    },
    // Add more data as needed
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Loan Applications</h1>
      <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Application ID</th>
            <th className="px-4 py-2">Member ID</th>
            <th className="px-4 py-2">Loan Type ID</th>
            <th className="px-4 py-2">Application Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the loan applications data and render rows */}
          {loanApplications.map((application) => (
            <tr key={application.application_id}>
              <td className="px-4 py-2">{application.application_id}</td>
              <td className="px-4 py-2">{application.member_id}</td>
              <td className="px-4 py-2">{application.loan_type_id}</td>
              <td className="px-4 py-2">{application.application_date}</td>
              <td className="px-4 py-2">{application.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const LoansTable = () => {
  // Define the loans data
  const loans = [
    {
      loan_id: 1,
      account_id: 2,
      loan_amount: 10000.0,
      interest_rate: 5.5,
      start_date: "2024-03-01",
      end_date: "2025-03-01",
      status: "Active",
    },
    {
      loan_id: 2,
      account_id: 4,
      loan_amount: 8000.0,
      interest_rate: 6.0,
      start_date: "2024-02-15",
      end_date: "2025-02-15",
      status: "Completed",
    },
    {
      loan_id: 3,
      account_id: 2,
      loan_amount: 10000.0,
      interest_rate: 5.5,
      start_date: "2024-03-01",
      end_date: "2025-03-01",
      status: "Active",
    },
    {
      loan_id: 4,
      account_id: 4,
      loan_amount: 8000.0,
      interest_rate: 6.0,
      start_date: "2024-02-15",
      end_date: "2025-02-15",
      status: "Completed",
    },
    // Add more data as needed
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Loans</h1>
      <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Loan ID</th>
            <th className="px-4 py-2">Account ID</th>
            <th className="px-4 py-2">Loan Amount</th>
            <th className="px-4 py-2">Interest Rate</th>
            <th className="px-4 py-2">Start Date</th>
            <th className="px-4 py-2">End Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the loans data and render rows */}
          {loans.map((loan) => (
            <tr key={loan.loan_id}>
              <td className="px-4 py-2">{loan.loan_id}</td>
              <td className="px-4 py-2">{loan.account_id}</td>
              <td className="px-4 py-2">{loan.loan_amount}</td>
              <td className="px-4 py-2">{loan.interest_rate}</td>
              <td className="px-4 py-2">{loan.start_date}</td>
              <td className="px-4 py-2">{loan.end_date}</td>
              <td className="px-4 py-2">{loan.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const LoanTypesTable = () => {
  // Define the loan types data
  const loanTypes = [
    {
      loan_type_id: 1,
      loan_type_name: "Personal Loan",
      max_loan_amount: 5000.0,
      interest_rate: 8.5,
    },
    {
      loan_type_id: 2,
      loan_type_name: "Home Loan",
      max_loan_amount: 200000.0,
      interest_rate: 6.75,
    },
    {
      loan_type_id: 3,
      loan_type_name: "Car Loan",
      max_loan_amount: 30000.0,
      interest_rate: 7.25,
    },
    {
      loan_type_id: 4,
      loan_type_name: "Education Loan",
      max_loan_amount: 40000.0,
      interest_rate: 5.5,
    },
    {
      loan_type_id: 5,
      loan_type_name: "Business Loan",
      max_loan_amount: 100000.0,
      interest_rate: 9.0,
    },
    {
      loan_type_id: 6,
      loan_type_name: "Personal Loan",
      max_loan_amount: 5000.0,
      interest_rate: 8.5,
    },
    {
      loan_type_id: 7,
      loan_type_name: "Home Loan",
      max_loan_amount: 200000.0,
      interest_rate: 6.75,
    },
    {
      loan_type_id: 8,
      loan_type_name: "Car Loan",
      max_loan_amount: 30000.0,
      interest_rate: 7.25,
    },
    // Add more data as needed
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Loan Types</h1>
      <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Loan Type ID</th>
            <th className="px-4 py-2">Loan Type Name</th>
            <th className="px-4 py-2">Max Loan Amount</th>
            <th className="px-4 py-2">Interest Rate</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the loan types data and render rows */}
          {loanTypes.map((loanType) => (
            <tr key={loanType.loan_type_id}>
              <td className="px-4 py-2">{loanType.loan_type_id}</td>
              <td className="px-4 py-2">{loanType.loan_type_name}</td>
              <td className="px-4 py-2">{loanType.max_loan_amount}</td>
              <td className="px-4 py-2">{loanType.interest_rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const MembersTable = () => {
  // Define the members data
  const members = [
    {
      member_id: 1,
      first_name: "John",
      last_name: "Doe",
      id_number: "123456789",
      date_of_birth: "1990-05-15",
      contact_number: "123-456-7890",
      email: "john.doe@example.com",
      address: "123 Main St, City",
    },
    {
      member_id: 2,
      first_name: "Alice",
      last_name: "Smith",
      id_number: "987654321",
      date_of_birth: "1985-08-21",
      contact_number: "987-654-3210",
      email: "alice.smith@example.com",
      address: "456 Elm St, Town",
    },
    {
      member_id: 3,
      first_name: "Michael",
      last_name: "Johnson",
      id_number: "456123789",
      date_of_birth: "1978-12-03",
      contact_number: "456-123-7890",
      email: "michael.johnson@example.com",
      address: "789 Oak St, Village",
    },
    {
      member_id: 4,
      first_name: "Emily",
      last_name: "Brown",
      id_number: "789456123",
      date_of_birth: "1995-03-27",
      contact_number: "789-456-1230",
      email: "emily.brown@example.com",
      address: "321 Pine St, Countryside",
    },
    {
      member_id: 5,
      first_name: "David",
      last_name: "Martinez",
      id_number: "321789654",
      date_of_birth: "1982-07-11",
      contact_number: "321-789-6540",
      email: "david.martinez@example.com",
      address: "654 Maple St, Suburb",
    },
    {
      member_id: 6,
      first_name: "John",
      last_name: "Doe",
      id_number: "123456789",
      date_of_birth: "1990-05-15",
      contact_number: "123-456-7890",
      email: "john.doe@example.com",
      address: "123 Main St, City",
    },
    {
      member_id: 7,
      first_name: "Alice",
      last_name: "Smith",
      id_number: "987654321",
      date_of_birth: "1985-08-21",
      contact_number: "987-654-3210",
      email: "alice.smith@example.com",
      address: "456 Elm St, Town",
    },
    {
      member_id: 8,
      first_name: "Michael",
      last_name: "Johnson",
      id_number: "456123789",
      date_of_birth: "1978-12-03",
      contact_number: "456-123-7890",
      email: "michael.johnson@example.com",
      address: "789 Oak St, Village",
    },
    {
      member_id: 9,
      first_name: "Emily",
      last_name: "Brown",
      id_number: "789456123",
      date_of_birth: "1995-03-27",
      contact_number: "789-456-1230",
      email: "emily.brown@example.com",
      address: "321 Pine St, Countryside",
    },
    {
      member_id: 10,
      first_name: "David",
      last_name: "Martinez",
      id_number: "321789654",
      date_of_birth: "1982-07-11",
      contact_number: "321-789-6540",
      email: "david.martinez@example.com",
      address: "654 Maple St, Suburb",
    },
    // Add more data as needed
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Members</h1>
      <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Member ID</th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">ID Number</th>
            <th className="px-4 py-2">Date of Birth</th>
            <th className="px-4 py-2">Contact Number</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Address</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the members data and render rows */}
          {members.map((member) => (
            <tr key={member.member_id}>
              <td className="px-4 py-2">{member.member_id}</td>
              <td className="px-4 py-2">{member.first_name}</td>
              <td className="px-4 py-2">{member.last_name}</td>
              <td className="px-4 py-2">{member.id_number}</td>
              <td className="px-4 py-2">{member.date_of_birth}</td>
              <td className="px-4 py-2">{member.contact_number}</td>
              <td className="px-4 py-2">{member.email}</td>
              <td className="px-4 py-2">{member.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SavingsPlansTable = () => {
  // Define the savings plans data
  const savingsPlans = [
    {
      plan_id: 1,
      plan_name: "Basic Savings",
      minimum_balance: 1000.0,
      interest_rate: 2.0,
    },
    {
      plan_id: 2,
      plan_name: "Premium Savings",
      minimum_balance: 5000.0,
      interest_rate: 3.5,
    },
    {
      plan_id: 3,
      plan_name: "Retirement Plan",
      minimum_balance: 10000.0,
      interest_rate: 5.0,
    },
    {
      plan_id: 4,
      plan_name: "Children Savings",
      minimum_balance: 500.0,
      interest_rate: 2.25,
    },
    {
      plan_id: 5,
      plan_name: "High Yield Savings",
      minimum_balance: 10000.0,
      interest_rate: 4.5,
    },
    {
      plan_id: 6,
      plan_name: "Basic Savings",
      minimum_balance: 1000.0,
      interest_rate: 2.0,
    },
    {
      plan_id: 7,
      plan_name: "Premium Savings",
      minimum_balance: 5000.0,
      interest_rate: 3.5,
    },
    {
      plan_id: 8,
      plan_name: "Retirement Plan",
      minimum_balance: 10000.0,
      interest_rate: 5.0,
    },
    // Add more data as needed
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Savings Plans</h1>
      <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Plan ID</th>
            <th className="px-4 py-2">Plan Name</th>
            <th className="px-4 py-2">Minimum Balance</th>
            <th className="px-4 py-2">Interest Rate</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the savings plans data and render rows */}
          {savingsPlans.map((plan) => (
            <tr key={plan.plan_id}>
              <td className="px-4 py-2">{plan.plan_id}</td>
              <td className="px-4 py-2">{plan.plan_name}</td>
              <td className="px-4 py-2">{plan.minimum_balance}</td>
              <td className="px-4 py-2">{plan.interest_rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SharesTable = () => {
  // Define the shares data
  const shares = [
    {
      share_id: 6,
      member_id: 1,
      share_amount: 500.0,
      purchase_date: "2023-01-15",
    },
    {
      share_id: 7,
      member_id: 2,
      share_amount: 1000.0,
      purchase_date: "2022-11-20",
    },
    {
      share_id: 8,
      member_id: 3,
      share_amount: 1500.0,
      purchase_date: "2023-05-10",
    },
    {
      share_id: 9,
      member_id: 4,
      share_amount: 2000.0,
      purchase_date: "2022-09-05",
    },
    {
      share_id: 10,
      member_id: 5,
      share_amount: 2500.0,
      purchase_date: "2023-03-30",
    },
    {
      share_id: 11,
      member_id: 1,
      share_amount: 500.0,
      purchase_date: "2023-01-15",
    },
    {
      share_id: 12,
      member_id: 2,
      share_amount: 1000.0,
      purchase_date: "2022-11-20",
    },
    {
      share_id: 13,
      member_id: 3,
      share_amount: 1500.0,
      purchase_date: "2023-05-10",
    },
    {
      share_id: 14,
      member_id: 4,
      share_amount: 2000.0,
      purchase_date: "2022-09-05",
    },
    {
      share_id: 15,
      member_id: 5,
      share_amount: 2500.0,
      purchase_date: "2023-03-30",
    },
    // Add more data as needed
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Shares</h1>
      <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Share ID</th>
            <th className="px-4 py-2">Member ID</th>
            <th className="px-4 py-2">Share Amount</th>
            <th className="px-4 py-2">Purchase Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the shares data and render rows */}
          {shares.map((share) => (
            <tr key={share.share_id}>
              <td className="px-4 py-2">{share.share_id}</td>
              <td className="px-4 py-2">{share.member_id}</td>
              <td className="px-4 py-2">{share.share_amount}</td>
              <td className="px-4 py-2">{share.purchase_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TransactionsTable = () => {
  // Define the transactions data
  const transactions = [
    {
      transaction_id: 1,
      account_id: 1,
      transaction_type: "Deposit",
      amount: 1000.0,
      transaction_date: "2024-03-10 09:30:00",
    },
    {
      transaction_id: 2,
      account_id: 1,
      transaction_type: "Withdrawal",
      amount: 500.0,
      transaction_date: "2024-03-12 14:45:00",
    },
    {
      transaction_id: 3,
      account_id: 2,
      transaction_type: "Loan",
      amount: 5000.0,
      transaction_date: "2024-03-05 11:00:00",
    },
    {
      transaction_id: 4,
      account_id: 3,
      transaction_type: "Deposit",
      amount: 2000.0,
      transaction_date: "2024-03-09 10:00:00",
    },
    {
      transaction_id: 5,
      account_id: 4,
      transaction_type: "Loan",
      amount: 3000.0,
      transaction_date: "2024-03-08 13:30:00",
    },
    {
      transaction_id: 6,
      account_id: 1,
      transaction_type: "Deposit",
      amount: 1000.0,
      transaction_date: "2024-03-10 09:30:00",
    },
    {
      transaction_id: 7,
      account_id: 1,
      transaction_type: "Withdrawal",
      amount: 500.0,
      transaction_date: "2024-03-12 14:45:00",
    },
    {
      transaction_id: 8,
      account_id: 2,
      transaction_type: "Loan",
      amount: 5000.0,
      transaction_date: "2024-03-05 11:00:00",
    },
    {
      transaction_id: 9,
      account_id: 3,
      transaction_type: "Deposit",
      amount: 2000.0,
      transaction_date: "2024-03-09 10:00:00",
    },
    {
      transaction_id: 10,
      account_id: 4,
      transaction_type: "Loan",
      amount: 3000.0,
      transaction_date: "2024-03-08 13:30:00",
    },
    // Add more data as needed
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Transaction ID</th>
            <th className="px-4 py-2">Account ID</th>
            <th className="px-4 py-2">Transaction Type</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Transaction Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the transactions data and render rows */}
          {transactions.map((transaction) => (
            <tr key={transaction.transaction_id}>
              <td className="px-4 py-2">{transaction.transaction_id}</td>
              <td className="px-4 py-2">{transaction.account_id}</td>
              <td className="px-4 py-2">{transaction.transaction_type}</td>
              <td className="px-4 py-2">{transaction.amount}</td>
              <td className="px-4 py-2">{transaction.transaction_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
