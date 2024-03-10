import {  useState } from "react";
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
      <div className="bg-gray-800 text-white w-1/5">
        <div className="py-8 px-4">
          <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
          <ul>
          <ul>
              <li className="mb-2 hover:cursor-pointer hover:text-gray-600">Item 1</li>
              <li className="mb-2 hover:cursor-pointer hover:text-gray-600">Item 2</li>
              <li className="mb-2 hover:cursor-pointer hover:text-gray-600">Item 3</li>
</ul>

          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 text-gray-800">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Members Table</h1>
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
              {/* Example Data (Replace with dynamic data from your backend) */}
              <tr>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">John</td>
                <td className="px-4 py-2">Doe</td>
                <td className="px-4 py-2">1234567890</td>
                <td className="px-4 py-2">1990-01-01</td>
                <td className="px-4 py-2">123-456-7890</td>
                <td className="px-4 py-2">john@example.com</td>
                <td className="px-4 py-2">123 Main St, City</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">Jane</td>
                <td className="px-4 py-2">Smith</td>
                <td className="px-4 py-2">0987654321</td>
                <td className="px-4 py-2">1988-05-05</td>
                <td className="px-4 py-2">987-654-3210</td>
                <td className="px-4 py-2">jane@example.com</td>
                <td className="px-4 py-2">456 Elm St, Town</td>
              </tr>
              {/* End of Example Data */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};




export default App;
