import { HeaderDashboard, Footer } from '../Header-Footer/index';
import AccountCard from './AccountCard';
const Receive = () => {
	return (
		<div className="bg-white">
			<HeaderDashboard />
			<div className="mt-8 mb-10 px-4 py-5">
				<div className="flex justify-center">
					<AccountCard />
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Receive;
