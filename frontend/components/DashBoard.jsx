import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className={`bg-gray-800 text-white w-1/5 ${sidebarOpen ? 'block' : 'hidden'}`}>
          <div className="py-8 px-4">
            <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
            <ul>
              <li className="mb-2">
                <Link to="/item1" className="hover:cursor-pointer hover:text-gray-600" onClick={toggleSidebar}>
                  Item 1
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/item2" className="hover:cursor-pointer hover:text-gray-600" onClick={toggleSidebar}>
                  Item 2
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/item3" className="hover:cursor-pointer hover:text-gray-600" onClick={toggleSidebar}>
                  Item 3
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <Switch>
            <Route path="/item1" component={Item1Component} />
            <Route path="/item2" component={Item2Component} />
            <Route path="/item3" component={Item3Component} />
            <Route path="/" component={MembersTable} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

// Define your different components here
const Item1Component = () => {
  return <div>Item 1 Component</div>;
};

const Item2Component = () => {
  return <div>Item 2 Component</div>;
};

const Item3Component = () => {
  return <div>Item 3 Component</div>;
};

export default Dashboard;
