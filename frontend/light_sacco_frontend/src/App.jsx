import "./App.css";

function App() {
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
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200">
              Sign Up
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-200">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
