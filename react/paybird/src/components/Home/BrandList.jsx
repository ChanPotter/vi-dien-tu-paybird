import Marquee from 'react-fast-marquee';
import brands from '../../database/Brand.json';

const BrandList = () => {
	return (
		<div className="p-6 bg-gray-100 mt-10 mb-2">
			<h1 className="text-2xl font-bold mb-7 text-center">ĐỐI TÁC PAYBIRD</h1>
			<Marquee pauseOnHover={true} speed={45} gradient={false}>
				{brands.map((brand, index) => (
					<div
						key={index}
						className="mx-4 p-7 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow text-center"
					>
						<img
							src={brand.logo}
							alt={brand.name}
							className="w-24 h-24 mx-auto mb-2 rounded-2xl"
						/>
						<h2 className="text-lg">{brand.name}</h2>
					</div>
				))}
			</Marquee>
		</div>
	);
};

export default BrandList;
