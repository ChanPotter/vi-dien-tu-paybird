import { HeaderDashboard, Footer } from '../Header-Footer/index';
import { LinkBank, Money } from '../Wallet/Items/index';

const Wallet = () => {
	return (
		<div className="bg-gray-100">
			<HeaderDashboard></HeaderDashboard>
			<div className="bg-white">
				<LinkBank></LinkBank>
			</div>
			<div className="bg-white mt-2">
				<Money></Money>
			</div>
			<div className="mt-30"></div>
			<Footer></Footer>
		</div>
	);
};
export default Wallet;
