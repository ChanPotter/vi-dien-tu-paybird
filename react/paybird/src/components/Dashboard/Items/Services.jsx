import { Data } from './Data/Data';
const Services = () => {
	return (
		<div>
			<div className="max-w-7xl mx-auto bg-white p-10 rounded-xl shadow-lg">
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-11">
					{Data.map((item, index) => (
						<div key={index} className="flex flex-col items-center">
							<div className="bg-gray-200 p-5 rounded-full shadow-md">
								<img src={item.icon} alt={item.name} className="w-16 h-16" />
							</div>
							<p className="mt-2 text-lg font-sans">{item.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default Services;
