import { TranCard } from '../../lit-wrapper';
import pic1 from '../../../assets/icon/1.png';
import pic2 from '../../../assets/icon/2.png';
import pic3 from '../../../assets/icon/3.png';
import pic4 from '../../../assets/icon/4.png';

const Utilities = () => {
	return (
		<div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 bg-white p-11">
			<TranCard
				title="Chuyển Tiền"
				description="Giao dịch chuyển tiền một cách nhanh chóng an toàn"
				bgColor="green"
				icon={pic1}
			/>

			<TranCard
				title="Nhận Tiền"
				description="Giao dịch chuyển tiền một cách nhanh chóng an toàn"
				bgColor="darkgreen"
				icon={pic2}
			/>

			<TranCard
				title="Rút / Nạp"
				description="Giao dịch chuyển tiền một cách nhanh chóng an toàn"
				bgColor="blue"
				icon={pic3}
			/>

			<TranCard
				title="Ưu Đãi"
				description="Giao dịch chuyển tiền một cách nhanh chóng an toàn"
				bgColor="navy"
				icon={pic4}
			/>
		</div>
	);
};

export default Utilities;
