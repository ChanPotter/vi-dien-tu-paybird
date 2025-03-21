import { HeaderDashboard, Footer } from '../Header-Footer/index';
import ListEvent from './ListEvent';
import pic from '../../assets/images/8.png';

const Event = () => {
	return (
		<div className="">
			<HeaderDashboard />
			<div className="relative flex items-center justify-center">
				<img
					src={pic}
					alt="Offers"
					className="img-fluid w-full max-h-30 sm:max-h-50  object-cover brightness-85"
				/>
				<h1 className="absolute text-white text-3xl font-bold px-4 py-2 rounded-lg">
					ƯU ĐÃI
				</h1>
			</div>
			<div className="bg-white">
				<ListEvent />
			</div>
			<Footer />
		</div>
	);
};
export default Event;
