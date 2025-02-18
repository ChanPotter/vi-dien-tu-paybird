import { useState } from 'react';
import pic from '../../../assets/events/jackbox.jpg';
import { News } from './Data/News';

const newsData = [
	{
		id: 1,
		date: '26 Tháng một 2025',
		title: 'Đã có thể dùng ứng dụng Zalopay thể quét thanh toán VNPAY-QR',
		description:
			'Ngay trước thềm Tết Ất Tỵ, Zalopay đã thành công ra mắt tính năng quét VNPAY-QR bằng ứng dụng Zalopay.',
		image: pic,
	},
];

const NewsAndEvents = () => {
	const [activeTab, setActiveTab] = useState('news');

	return (
		<div className="max-w-7xl mx-auto">
			{/* Tab Navigation */}
			<div className="flex justify-center space-x-10 border-b border-gray-300 pb-2">
				<button
					className={`text-lg font-semibold pb-2 ${
						activeTab === 'news'
							? 'text-blue-600 border-b-2 border-blue-600'
							: 'text-gray-500'
					}`}
					onClick={() => setActiveTab('news')}
				>
					Tin tức - Sự kiện
				</button>
				<button
					className={`text-lg font-semibold pb-2 ${
						activeTab === 'promo'
							? 'text-blue-600 border-b-2 border-blue-600'
							: 'text-gray-500'
					}`}
					onClick={() => setActiveTab('promo')}
				>
					Khuyến mãi - Ưu Đãi
				</button>
			</div>

			{/* News Content */}
			<div className="bg-white p-10 rounded-xl shadow-lg ">
				<div className="grid grid-cols-1 md:grid-cols-10 gap-4">
					{/* Main News */}
					<div className="md:col-span-6">
						<img
							src={newsData[0].image}
							alt="Main News"
							className="rounded-lg w-full h-99 object-cover"
						/>
						<p className="text-gray-500 text-sm mt-4">{newsData[0].date}</p>
						<h2 className="text-xl font-bold mt-2">{newsData[0].title}</h2>
						<p className="text-gray-600 mt-2">{newsData[0].description}</p>
					</div>

					<div className="space-y-4 md:col-span-4">
						{News.map((item) => (
							<div
								key={item.id}
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
									<h3 className="text-md font-semibold">{item.title}</h3>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Explore More Button */}
				<div className="flex justify-center mt-6">
					<button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-100 transition">
						Khám phá thêm
					</button>
				</div>
			</div>
		</div>
	);
};

export default NewsAndEvents;
