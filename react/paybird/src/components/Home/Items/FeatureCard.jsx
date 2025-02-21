// eslint-disable-next-line react/prop-types
export function FeatureCard({ iconBg }) {
	return (
		<div className="relative flex flex-col items-center sm:flex-row sm:items-center sm:space-x-4">
			{/* Icon Section */}
			<div
				className={`flex items-center justify-center rounded-full ${iconBg} max-w-[500px]:w-10 max-w-[500px]:h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28`}
			>
				<span className="text-black text-xl max-w-[500px]:text-xl sm:text-3xl md:text-4xl lg:text-6xl">
					🎁
				</span>
			</div>
			{/* Content Section */}
		</div>
	);
}
