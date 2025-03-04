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
import { SelectBank, Transaction } from './components/Link/index';
import History from './components/History/History';
import { Detail, DetailSupportHome } from './components/Support/Details/index';
import Setting from './components/Setting/Setting';
import Profile from './components/Profile/Profile';
import Referral from './components/Referral/Referral';
import ChangePassword from './components/ChangePassword/ChangePassword';
import Notification from './components/Notification/Notification';
import Store from './components/Store/Store';
import Recharge from './components/PhoneRecharge/Recharge';
import DepositAndWithdraw from './components/DepositAndWithdraw/DepositAndWithdraw';
import Internet from './components/Internet/Internet';

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Home" element={<Home />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Signup" element={<Signup />} />
				<Route path="/Support" element={<Support />} />
				<Route path="/Support/:id" element={<DetailSupportHome />} />
				<Route path="/Dashboard" element={<Dashboard />} />
				<Route path="/Pricing" element={<Pricing />} />
				<Route path="/About" element={<About />} />
				<Route path="/Wallet" element={<Wallet />} />
				<Route path="/Dashboard/Support" element={<DashboardSupport />} />
				<Route path="/Dashboard/Support/:id" element={<Detail />} />
				<Route path="/Dashboard/Transfer" element={<Transfer />} />
				<Route path="/Dashboard/Receive" element={<Receive />} />
				<Route path="/Dashboard/LinkCard" element={<LinkCard />} />
				<Route path="/Dashboard/SelectBank" element={<SelectBank />} />
				<Route path="/Dashboard/SelectBank/:id" element={<Transaction />} />
				<Route path="/Dashboard/Deposit" element={<DepositAndWithdraw />} />
				<Route path="/History" element={<History />} />
				<Route path="/Setting" element={<Setting />} />
				<Route path="/Notification" element={<Notification />} />
				<Route path="/Setting/Profile" element={<Profile />} />
				<Route path="/Setting/Referral" element={<Referral />} />
				<Route path="/Setting/ChangePassword" element={<ChangePassword />} />
				<Route path="/Setting/Store" element={<Store />} />
				<Route path="/Dashboard/1" element={<Recharge />} />
				<Route path="/Dashboard/7" element={<Internet />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
