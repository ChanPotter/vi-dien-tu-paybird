import { HeaderDashboard, Footer } from '../../Header-Footer/index';
import DetailCard from './DetailCard';
import Step from './Step';

const LinkCard = () => {
	return (
		<div className="bg-white">
			<HeaderDashboard />
			<div className="mt-8 mb-10 px-4 py-6">
				<div className="flex justify-center">
					<DetailCard />
				</div>
			</div>
			<div className="mt-10 mb-10 px-4 py-6">
				<div className="flex justify-center">
					<Step />
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default LinkCard;
