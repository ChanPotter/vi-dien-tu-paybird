import gift from '../../assets/icon/giftbox.png';
import coin from '../../assets/icon/coin.png';
import { Link } from 'react-router-dom';

const YourOffers = () => {
	return (
		<div className="bg-blue-600 p-4">
			<div className="flex justify-center max-[550px]:gap-3   gap-10 mt-5 mb-5">
				{/* Quà của Gia Chấn */}
				<Link to="/Dashboard/Offers/OwnVoucher">
					<div className="bg-white rounded-lg max-[550px]:p-3 p-4 flex justify-between items-center gap-4 shadow-md w-80">
						<div>
							<p className="text-sm text-gray-500">Quà của</p>
							<p className="font-semibold text-lg">Gia Chấn</p>
						</div>
						<div className="border-2 border-green-800 rounded-full p-3 bg-green-600">
							<img src={gift} alt="Gift" className="w-13 h-13" />
						</div>
					</div>
				</Link>

				{/* Tích xu */}
				<div className="bg-white rounded-lg max-[550px]:p-3 p-4 flex justify-between items-center gap-4 shadow-md w-80">
					<div>
						<p className="text-sm text-gray-500">Tích xu</p>
						<p className="font-semibold text-lg">0 xu</p>
					</div>
					<div className="border-2 border-green-800 rounded-full p-3 bg-green-600">
						<img src={coin} alt="Gift" className="w-13 h-13" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default YourOffers;
