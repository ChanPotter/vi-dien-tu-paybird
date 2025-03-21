import { HeaderDashboard, Footer } from '../Header-Footer/index';
import pic from '../../assets/images/8.png';
import YourOffers from './YourOffers';
import Voucher from './Voucher';
const Offers = () => {
	return (
		<div className="bg-gray-50 min-h-screen">
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
			<div className="mb-3">
				<YourOffers />
			</div>
			<div className="mb-3">
				<Voucher />
			</div>

			<Footer />
		</div>
	);
};
export default Offers;
