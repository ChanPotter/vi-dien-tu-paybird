import { HeaderDashboard, Footer } from '../Header-Footer/index';
import MoneyCard from './MoneyCard';

const Transfer = () => {
	return (
		<div className="bg-white">
			<HeaderDashboard />
			<div className="mt-10 mb-10 px-4 py-6">
				<div className="flex justify-center">
					<MoneyCard />
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Transfer;
