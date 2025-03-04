import camera from '../../assets/setting/camera.png';

export default function ProfileCard() {
	return (
		<div className="flex flex-col items-center">
			{/* Header background with high animated wave */}
			<div className="relative w-full h-48 overflow-hidden bg-blue-500">
				<svg
					className="absolute bottom-0 left-0 w-full h-full"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
					preserveAspectRatio="none"
				>
					<defs>
						<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#4F46E5" />
							<stop offset="100%" stopColor="#6D28D9" />
						</linearGradient>
					</defs>
					<path
						fill="url(#gradient)"
						fillOpacity="1"
						d="M0,224L60,192C120,160,240,96,360,106.7C480,117,600,203,720,234.7C840,267,960,245,1080,202.7C1200,160,1320,96,1380,64L1440,32V320H0Z"
					>
						<animateTransform
							attributeName="transform"
							attributeType="XML"
							type="translate"
							values="0,0; 0,20; 0,0"
							dur="5s"
							repeatCount="indefinite"
						/>
					</path>
				</svg>
			</div>

			{/* Avatar container */}
			<div className="relative -mt-27">
				<div className="w-50 h-50 bg-gray-300 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
					<span className="text-gray-500">Ảnh</span>
				</div>

				{/* Camera icon button */}
				<button className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow-md border border-gray-200 hover:bg-gray-100 transition-all duration-200">
					<img src={camera} alt="Camera Icon" className="w-6 h-6" />
				</button>
			</div>

			{/* User Name */}
			<p className="mt-4 text-xl font-semibold text-gray-800 text-center">
				Nguyễn Gia Chấn
			</p>
		</div>
	);
}
