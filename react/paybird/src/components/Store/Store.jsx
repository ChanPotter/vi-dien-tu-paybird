import { HeaderDashboard, Footer } from '../Header-Footer/index';
import MultiStepProgress from './MultiStepProgress';
const Store = () => {
	return (
		<div className="min-h-screen flex flex-col bg-gray-100">
			<HeaderDashboard />
			<div className="flex-grow flex items-center justify-center 5g">
				<MultiStepProgress />
			</div>
			<Footer />
		</div>
	);
};

export default Store;
