import packages from '../../database/Data.json';
import { MyPackageCard } from '../lit-wrapper';

const PackageList = () => {
	return (
		<div className="p-5">
			{packages.map((pkg, index) => (
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
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default PackageList;
