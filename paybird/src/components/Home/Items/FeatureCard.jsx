// eslint-disable-next-line react/prop-types
export function FeatureCard({ color, iconBg, title, description }) {
	return (
		<div className="relative flex flex-col items-center w-full p-1 md:flex-row md:items-center md:space-x-4">
			{/* Icon Section */}
			<div
				className={`w-20 h-20 flex items-center justify-center rounded-xl ${iconBg} md:w-28 md:h-28`}
			>
				<span className="text-black text-4xl md:text-6xl">🎁</span>
			</div>
			{/* Content Section */}
			<div
				className={`flex-1 mt-4 p-6 text-white text-center ${color} rounded-xl md:text-left md:py-8`}
			>
				<h3 className="text-2xl font-bold md:text-4xl">{title}</h3>
				<p className="text-base md:text-lg">{description}</p>
			</div>
		</div>
	);
}
