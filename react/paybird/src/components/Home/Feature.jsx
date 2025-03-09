import bg from '../../assets/images/12.jpg';
import logo from '../../assets/logo/logo3.png';
import { FeatureCard } from './Items/FeatureCard';

export function Feature() {
	return (
		<div className="grid grid-cols-3 mt-2 mb-5">
			<div className="">
				<div className="mt-18 sm:mt-30 md:mt-35 lg:mt-52">
					<div className="flex-1 p-6 text-white text-center bg-red-500 rounded-xl md:text-left py-1 sm:py-3 md:py-6">
						<h3 className="text-2xl font-bold md:text-3xl text-right max-[425px]:text-[12px] max-[495px]:text-sm max-[640px]:text-lg">
							Nhanh Chóng
						</h3>
					</div>
				</div>

				<div className=" mt-25 sm:mt-30 md:mt-36 lg:mt-45">
					<div
						className={`flex-1 p-6 text-white text-center bg-blue-500 rounded-xl md:text-left py-1 sm:py-3 md:py-6`}
					>
						<h3 className="text-2xl font-bold md:text-3xl text-right max-[425px]:text-[12px] max-[495px]:text-sm max-[640px]:text-lg">
							Tiện Lợi
						</h3>
					</div>
				</div>
			</div>
			<div className="relative flex justify-center">
				<img src={bg} alt="Feature background" className="w-90 h-auto" />
				<img
					src={logo}
					alt="Feature logo"
					className="h-7 w-auto absolute mt-11 max-[400px]:h-5 max-[400px]:mt-[40px] sm:mt-16 md:mt-20 md:h-12 lg:mt-27 lg:h-12"
				/>
				<div className="absolute top-2/7 flex items-center space-x-4">
					<FeatureCard
						iconBg="bg-red-700"
						classname="flex justify-center items-center"
					/>
				</div>
				<div className="absolute top-12/25 flex items-center space-x-4">
					<FeatureCard iconBg="bg-green-700" />
				</div>

				<div className="absolute top-118/175 flex items-center space-x-4">
					<FeatureCard
						iconBg="bg-blue-700"
						classname="flex justify-center items-center"
					/>
				</div>
			</div>
			<div className="">
				<div className="mt-35 sm:mt-55 md:mt-67 lg:mt-86">
					<div
						className={`flex-1 p-6 text-white text-center bg-green-500 rounded-xl md:text-left py-1 sm:py-3 md:py-6`}
					>
						<h3 className="text-2xl font-bold md:text-3xl max-[425px]:text-[12px] max-[495px]:text-sm max-[640px]:text-lg">
							An toàn
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
