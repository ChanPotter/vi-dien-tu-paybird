import { useState } from 'react';
import News from '../../../database/Event.json';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NewsAndEvents = () => {
	const [activeTab, setActiveTab] = useState('news');
	const navigate = useNavigate();
	const handleClick = (id) => {
		navigate(`/Dashboard/Events/${id}`); // Dùng ID
		// Nếu dùng name thì: navigate(`/bank/${encodeURIComponent(name)}`);
	};

	return (
		<div className="max-w-7xl mx-auto">
			{/* Tab Navigation */}
			<div className="flex justify-center space-x-10 border-b border-gray-300 pb-2">
				<button
					className="text-lg font-semibold pb-2 text-blue-600 border-b-2 border-blue-600"
					onClick={() => setActiveTab('news')}
				>
					Tin tức - Sự kiện
				</button>
			</div>

			{/* News Content */}
			<div className="bg-white p-10 rounded-xl shadow-lg">
				<div className="grid grid-cols-1 md:grid-cols-10 gap-4">
					{/* Main News */}
					<div
						onClick={() => handleClick(News[0].id)}
						className="md:col-span-6 cursor-pointer"
					>
						<img
							src={News[0].image}
							alt="Main News"
							className="rounded-lg w-full h-99 object-cover"
						/>
						<p className="text-gray-500 text-sm mt-4">{News[0].date}</p>
						<h2 className="text-xl font-bold mt-2">{News[0].name}</h2>
						<p className="text-gray-600 mt-2">
							{News[0].description.length > 300
								? News[0].description.slice(0, 300) + '...'
								: News[0].description}
						</p>
					</div>

					{/* Other News */}
					<div className="space-y-4 md:col-span-4">
						{News.slice(0, 3).map((item) => (
							<div
								key={item.id} // Đặt key ở đúng vị trí
								onClick={() => handleClick(item.id)}
								className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center"
							>
								{/* Ảnh trên mobile, chiếm 2 cột trên desktop */}
								<img
									src={item.image}
									alt={item.title}
									className="w-56 h-30 object-cover rounded-lg mx-auto md:col-span-2"
								/>

								{/* Nội dung chữ dưới mobile, chiếm 2 cột trên desktop */}
								<div className="text-center md:text-left md:col-span-2">
									<p className="text-gray-500 text-sm">{item.date}</p>
									<h3 className="text-sm font-semibold">{item.name}</h3>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Explore More Button */}
				<div className="flex justify-center mt-6">
					<Link to="/Dashboard/Events">
						<button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-100 transition">
							Khám phá thêm
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NewsAndEvents;
