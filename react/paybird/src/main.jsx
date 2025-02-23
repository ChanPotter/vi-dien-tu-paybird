import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Support from './components/Support/HomeSupport';
import Pricing from './components/Pricing/Pricing';
import About from './components/About/About';

import Dashboard from './components/Dashboard/Dashboard';
import Wallet from './components/wallet/Wallet';
import DashboardSupport from './components/Support/DashboardSupport';
import Transfer from './components/TransferMoney/Transfer';
import Receive from './components/ReceiveMoney/Receive';
import LinkCard from './components/Link/Card/LinkCard';

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Home" element={<Home />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Signup" element={<Signup />} />
				<Route path="/Support" element={<Support />} />
				<Route path="/Dashboard" element={<Dashboard />} />
				<Route path="/Pricing" element={<Pricing />} />
				<Route path="/About" element={<About />} />
				<Route path="/Wallet" element={<Wallet />} />
				<Route path="/Dashboard/Support" element={<DashboardSupport />} />
				<Route path="/Dashboard/Transfer" element={<Transfer />} />
				<Route path="/Dashboard/Receive" element={<Receive />} />
				<Route path="/Dashboard/LinkCard" element={<LinkCard />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
