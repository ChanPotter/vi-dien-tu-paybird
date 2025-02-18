import { FeatureCard } from './Items/FeatureCard';
import bg from '../../assets/images/11.jpg';

export function Feature() {
	return (
		<div className="relative flex flex-col items-center justify-center h-[90vh] max-[768px]:h-[120vh] bg-blue-200">
			{/* Lớp phủ mờ cho ảnh nền */}
			<div className="absolute inset-0 bg-cover bg-center"></div>

			<div className="w-full max-w-5xl space-y-5 relative z-10">
				<FeatureCard
					color="bg-red-500"
					iconBg="bg-red-700"
					title="NHANH CHÓNG"
					description="Chời ơi tập này combat đã con mắt thật sự"
				/>
				<FeatureCard
					color="bg-green-500"
					iconBg="bg-green-700"
					title="TIỆN LỢI"
					description="Chời ơi tập này combat đã con mắt thật sự"
				/>
				<FeatureCard
					color="bg-blue-600"
					iconBg="bg-blue-800"
					title="AN TOÀN"
					description="Chời ơi tập này combat đã con mắt thật sự"
				/>
			</div>
		</div>
	);
}
