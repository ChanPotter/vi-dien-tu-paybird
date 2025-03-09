import Data from '../../database/Notification.json';
import { useState, useEffect } from 'react';
import { HeaderDashboard, Footer } from '../Header-Footer/index';

const Notification = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 640); // sm: 640px
		};

		handleResize(); // Kiểm tra ngay khi component mount
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<>
			{isSmallScreen ? (
				<div className="bg-gray-100 min-h-screen flex flex-col">
					<HeaderDashboard />
					<div className="flex-grow flex flex-col items-center space-y-3 mt-9">
						<div className="font-semibold text-2xl">Thông báo</div>
						{Data.map(({ id, title, content }) => (
							<div
								key={id}
								className="bg-white p-4 rounded-2xl max-w-md w-full"
							>
								<p className="font-bold text-base">{title}</p>
								<p className="text-gray-700 text-sm">{content}</p>
								<button className="text-blue-500 text-xs">Xem chi tiết</button>
							</div>
						))}
					</div>
					<Footer />
				</div>
			) : (
				<div className="mt-4 space-y-3">
					{Data.map(({ id, title, content }) => (
						<div key={id} className="bg-white p-5 rounded-2xl">
							<p className="font-bold text-base">{title}</p>
							<p className="text-gray-700 text-sm">{content}</p>
							<button className="text-blue-500 text-xs">Xem chi tiết</button>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Notification;
