/* eslint-disable react/prop-types */
import packages from '../../database/Data.json';
import { MyPackageCard } from '../lit-wrapper';
import { useNavigate } from 'react-router-dom';

const PackageList = ({ selectedDay }) => {
	// Hàm xử lý khi click vào nút chuyển tiền
	const navigate = useNavigate();
	const handleTrans = (selectedPackage) => {
		navigate(`/Dashboard/7/${selectedPackage.id}`, {
			state: { selectedPackage },
		});
	};

	// Hàm lọc gói theo ngày
	const filteredPackages = packages
		.map((pkg) => {
			const filteredData = pkg.data.filter((item) => {
				if (selectedDay === 'Tất cả') return true;
				return item.duration === selectedDay;
			});
			return { ...pkg, data: filteredData };
		})
		.filter((pkg) => pkg.data.length > 0); // Loại bỏ các gói không có dữ liệu sau khi lọc

	return (
		<div className="p-5">
			{filteredPackages.length > 0 ? (
				filteredPackages.map((pkg, index) => (
					<div key={index} className="mb-10">
						{/* Tiêu đề gói */}
						<div className="flex items-center justify-between">
							<h2 className="text-lg font-bold">{pkg.title}</h2>
							<span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
								{pkg.cashback}
							</span>
						</div>

						{/* Danh sách gói */}
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
							{pkg.data.map((item, idx) => (
								<MyPackageCard
									key={idx}
									size={item.size}
									price={item.price}
									duration={item.duration}
									cashback={item.cashback}
									onClick={() => handleTrans(item)}
								/>
							))}
						</div>
					</div>
				))
			) : (
				<p className="text-center text-gray-500">
					Không có gói nào phù hợp với lựa chọn.
				</p>
			)}
		</div>
	);
};

export default PackageList;
