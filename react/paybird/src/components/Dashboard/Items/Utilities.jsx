import { TranCard } from '../../lit-wrapper';
import pic1 from '../../../assets/icon/1.png';
import pic2 from '../../../assets/icon/2.png';
import pic3 from '../../../assets/icon/3.png';
import pic4 from '../../../assets/icon/4.png';
import { Link } from 'react-router-dom';

const Utilities = () => {
	return (
		<div className="mx-auto grid grid-cols-4 shadow-md  sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-4 sm:p-11">
			<Link to="/Dashboard/Transfer">
				<TranCard
					title="Chuyển Tiền"
					description="Giao dịch chuyển tiền một cách nhanh chóng an toàn"
					bgColor="rgb(30, 144, 255)"
					icon={pic1}
				/>
			</Link>

			<Link to="/Dashboard/Receive">
				<TranCard
					title="Nhận Tiền"
					description="Giao dịch chuyển tiền một cách nhanh chóng an toàn"
					bgColor="rgb(50, 205, 50)"
					icon={pic2}
				/>
			</Link>

			<Link to="/Dashboard/Deposit">
				<TranCard
					title="Rút / Nạp"
					description="Giao dịch chuyển tiền một cách nhanh chóng an toàn"
					bgColor="rgb(147, 112, 219)"
					icon={pic3}
				/>
			</Link>

			<Link to="/Dashboard/Offers">
				<TranCard
					title="Ưu Đãi"
					description="Giao dịch chuyển tiền một cách nhanh chóng an toàn"
					bgColor="#1e1e2f"
					icon={pic4}
				/>
			</Link>
		</div>
	);
};

export default Utilities;
