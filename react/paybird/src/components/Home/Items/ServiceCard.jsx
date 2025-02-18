/* eslint-disable react/prop-types */
const ServiceCard = ({
	title,
	description,
	icon,
	bgColor = 'bg-blue-500',
	classname,
}) => {
	return (
		<div
			className={`p-6 border rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 ${classname}`}
		>
			{/* Icon với màu nền và bo tròn */}
			<div
				className={`${bgColor} rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4`}
			>
				<div className="text-4xl text-white">{icon}</div>
			</div>
			<h2 className="text-xl font-semibold mb-2 text-gray-800 text-center">
				{title}
			</h2>
			<p className="text-gray-600 text-center">{description}</p>
		</div>
	);
};

export default ServiceCard;
