import { HeaderDashboard, Footer } from '../Header-Footer/index';
import FilterBar from './FilterBar';

const Internet = () => {
	return (
		<div>
			<HeaderDashboard />
			<div className="mt-8 mb-10 px-4 py-5">
				<div className="flex justify-center">
					<FilterBar />
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Internet;
